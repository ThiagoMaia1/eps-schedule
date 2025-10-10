import React, { useState, useEffect } from 'react'
import { MdContentCopy, MdFileUpload, MdClose } from 'react-icons/md'
import { type ScheduleData } from '../types/schedule'
import { getSelectedSessions } from '../utils/localStorage'
import './ImportExportSessions.css'

interface ImportExportSessionsProps {
  selectedCount: number
  isOpen: boolean
  onClose: () => void
  onCopySelectedSessions: () => Promise<{ success: boolean; count: number }>
  onImportSelectedSessions: (
    validSessions: string[],
    allValidSessionIds: Set<string>
  ) => Promise<{ success: boolean; count: number }>
  scheduleData: ScheduleData[]
}

interface ValidationResult {
  valid: string[]
  invalid: string[]
  duplicates: string[]
  total: number
}

const ImportExportSessions: React.FC<ImportExportSessionsProps> = ({
  selectedCount,
  isOpen,
  onClose,
  onCopySelectedSessions,
  onImportSelectedSessions,
  scheduleData,
}) => {
  const [message, setMessage] = useState<{
    text: string
    type: 'success' | 'error' | 'warning'
  } | null>(null)
  const [importText, setImportText] = useState('')
  const [exportedData, setExportedData] = useState('')

  // Clear message after timeout
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [message])

  // Get all valid session IDs from schedule data
  const getAllValidSessionIds = (): Set<string> => {
    const sessionIds = new Set<string>()

    scheduleData.forEach((day) => {
      day.timeSlots.forEach((timeSlot) => {
        Object.values(timeSlot.sessions).forEach((sessions) => {
          sessions.forEach((session) => {
            sessionIds.add(session.id)
          })
        })
      })
    })

    return sessionIds
  }

  // Validate imported session IDs
  const validateSessionIds = (
    sessionIds: string[],
    existingSessions: Set<string>
  ): ValidationResult => {
    const validSessionIds = getAllValidSessionIds()
    const valid: string[] = []
    const invalid: string[] = []
    const duplicates: string[] = []
    const seen = new Set<string>()

    sessionIds.forEach((id) => {
      // Skip duplicates within the import list itself
      if (seen.has(id)) {
        return
      }
      seen.add(id)

      if (!validSessionIds.has(id)) {
        // Invalid session ID (not in schedule data)
        invalid.push(id)
      } else if (existingSessions.has(id)) {
        // Duplicate (already in storage)
        duplicates.push(id)
      } else {
        // Valid and new
        valid.push(id)
      }
    })

    return {
      valid,
      invalid,
      duplicates,
      total: sessionIds.length,
    }
  }

  // Handler for exporting selected sessions
  const handleExport = async () => {
    if (selectedCount === 0) {
      setMessage({ text: 'No sessions selected to export', type: 'error' })
      return
    }

    const result = await onCopySelectedSessions()
    if (result.success) {
      // Get the data to display
      const selected = getSelectedSessions()
      const data = JSON.stringify(Array.from(selected))
      setExportedData(data)

      setMessage({
        text: `Exported ${result.count} session${result.count !== 1 ? 's' : ''} (copied to clipboard)`,
        type: 'success',
      })
    } else {
      setMessage({ text: 'Failed to export sessions', type: 'error' })
    }
  }

  // Copy exported data to clipboard
  const handleCopyExported = async () => {
    try {
      await navigator.clipboard.writeText(exportedData)
      setMessage({
        text: 'Copied to clipboard',
        type: 'success',
      })
    } catch (error) {
      console.error('Failed to copy:', error)
      setMessage({ text: 'Failed to copy', type: 'error' })
    }
  }

  // Handler for importing selected sessions
  const handleImport = async () => {
    try {
      if (!importText.trim()) {
        setMessage({
          text: 'Please paste session data in the import field',
          type: 'error',
        })
        return
      }

      // Parse the input text
      const sessionsArray = JSON.parse(importText)

      if (!Array.isArray(sessionsArray)) {
        setMessage({
          text: 'Invalid data format. Please copy session data from the export button.',
          type: 'error',
        })
        return
      }

      // Get current selected sessions from storage
      const existingSessions = getSelectedSessions()

      // Validate session IDs
      const validation = validateSessionIds(sessionsArray, existingSessions)
      const allValidSessionIds = getAllValidSessionIds()

      if (validation.total === 0) {
        setMessage({
          text: 'No session data found in clipboard',
          type: 'error',
        })
        return
      }

      if (validation.valid.length === 0) {
        // No new sessions to import
        if (
          validation.duplicates.length > 0 &&
          validation.invalid.length === 0
        ) {
          setMessage({
            text: `All ${validation.duplicates.length} session${validation.duplicates.length !== 1 ? 's are' : ' is'} already selected`,
            type: 'warning',
          })
        } else if (
          validation.invalid.length > 0 &&
          validation.duplicates.length === 0
        ) {
          setMessage({
            text: `All ${validation.invalid.length} session${validation.invalid.length !== 1 ? 's are' : ' is'} invalid`,
            type: 'error',
          })
        } else {
          setMessage({
            text: `${validation.duplicates.length} duplicate${validation.duplicates.length !== 1 ? 's' : ''} and ${validation.invalid.length} invalid session${validation.invalid.length !== 1 ? 's' : ''}. Nothing to import.`,
            type: 'error',
          })
        }
        return
      }

      // Import only valid sessions (also cleans up any invalid existing sessions)
      const result = await onImportSelectedSessions(
        validation.valid,
        allValidSessionIds
      )

      if (result.success) {
        const hasInvalid = validation.invalid.length > 0
        const hasDuplicates = validation.duplicates.length > 0
        const hasNewSessions = result.count > 0

        if (!hasNewSessions && (hasInvalid || hasDuplicates)) {
          // Nothing new imported
          const parts: string[] = []
          if (hasInvalid) {
            parts.push(
              `${validation.invalid.length} invalid session${validation.invalid.length !== 1 ? 's' : ''}`
            )
          }
          if (hasDuplicates) {
            parts.push(
              `${validation.duplicates.length} duplicate${validation.duplicates.length !== 1 ? 's' : ''}`
            )
          }
          setMessage({
            text: `No new sessions imported. ${parts.join(' and ')} skipped.`,
            type: 'warning',
          })
        } else if (hasInvalid || hasDuplicates) {
          // Some imported, some skipped
          const parts: string[] = []
          if (hasInvalid) {
            parts.push(`${validation.invalid.length} invalid`)
          }
          if (hasDuplicates) {
            parts.push(
              `${validation.duplicates.length} duplicate${validation.duplicates.length !== 1 ? 's' : ''}`
            )
          }
          setMessage({
            text: `Imported ${result.count} new session${result.count !== 1 ? 's' : ''}. ${parts.join(' and ')} skipped.`,
            type: 'warning',
          })
        } else {
          // All imported successfully
          setMessage({
            text: `Successfully imported ${result.count} new session${result.count !== 1 ? 's' : ''}`,
            type: 'success',
          })
        }
      } else {
        setMessage({
          text: 'Failed to import sessions',
          type: 'error',
        })
      }
    } catch (error) {
      console.error('Failed to import:', error)
      setMessage({
        text: 'Failed to import sessions. Please ensure you have valid session data.',
        type: 'error',
      })
    }
  }

  // Reset state when popup closes
  useEffect(() => {
    if (!isOpen) {
      setMessage(null)
      setImportText('')
      setExportedData('')
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content import-export-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-header">
          <h2 className="popup-title">Transfer Sessions</h2>
          <button
            className="popup-close-button"
            onClick={onClose}
            aria-label="Close popup"
          >
            <MdClose />
          </button>
        </div>

        <div className="popup-body">
          <div className="import-export-instructions">
            <p>
              Use this tool to transfer your selected sessions between devices
              or browsers. Export your selections as data, then import them on
              another device.
            </p>
          </div>

          <div className="import-export-section">
            <h3 className="section-title">Export Sessions</h3>
            <p className="section-description">
              Export your currently selected sessions ({selectedCount}{' '}
              selected).
            </p>
            <button
              className="import-export-btn export-btn"
              onClick={handleExport}
              disabled={selectedCount === 0}
            >
              <MdContentCopy className="btn-icon" />
              Export Selected Sessions
            </button>
            {exportedData && (
              <div className="export-output">
                <div className="output-header">
                  <label className="output-label">Exported Data:</label>
                  <button
                    className="copy-output-btn"
                    onClick={handleCopyExported}
                  >
                    <MdContentCopy /> Copy
                  </button>
                </div>
                <textarea
                  className="export-textarea"
                  value={exportedData}
                  readOnly
                  rows={6}
                />
              </div>
            )}
          </div>

          <div className="import-export-divider" />

          <div className="import-export-section">
            <h3 className="section-title">Import Sessions</h3>
            <p className="section-description">
              Paste session data below to import and merge with your current
              selections.
            </p>
            <label className="input-label">Session Data:</label>
            <textarea
              className="import-textarea"
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder='Paste exported session data here (e.g., ["session1", "session2"])'
              rows={6}
            />
            <button
              className="import-export-btn import-btn"
              onClick={handleImport}
              disabled={!importText.trim()}
            >
              <MdFileUpload className="btn-icon" />
              Import Sessions
            </button>
          </div>

          {message && (
            <div className={`import-export-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="import-export-note">
            <strong>Note:</strong> Invalid sessions will be automatically
            filtered out. Duplicate sessions (already selected) will be skipped.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportExportSessions
