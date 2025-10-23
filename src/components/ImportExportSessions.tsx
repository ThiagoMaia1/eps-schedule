import React, { useState, useEffect } from 'react'
import { MdContentCopy, MdFileUpload } from 'react-icons/md'
import { getAllSelectedSessionsAcrossEvents } from '../utils/localStorage'
import { getScheduleData } from '../utils/scheduleParser'
import { useImportExportSessionsStyles } from './ImportExportSessions.styles'
import Popup from './Popup'

interface ImportExportSessionsProps {
  isOpen: boolean
  onClose: () => void
  onCopySelectedSessions: () => Promise<{ success: boolean; count: number }>
  onImportSelectedSessions: (
    validSessionsMap: Map<string, string[]>
  ) => Promise<{ success: boolean; count: number }>
}

interface ValidationResult {
  validByEvent: Map<string, string[]>
  invalidByEvent: Map<string, string[]>
  duplicatesByEvent: Map<string, string[]>
  total: number
  totalValid: number
  totalInvalid: number
  totalDuplicates: number
}

const ImportExportSessions: React.FC<ImportExportSessionsProps> = ({
  isOpen,
  onClose,
  onCopySelectedSessions,
  onImportSelectedSessions,
}) => {
  const [message, setMessage] = useState<{
    text: string
    type: 'success' | 'error' | 'warning'
    operation: 'export' | 'import'
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

  // Get all valid session IDs for a specific event
  const getAllValidSessionIdsForEvent = (eventPath: string): Set<string> => {
    const sessionIds = new Set<string>()
    const eventScheduleData = getScheduleData(eventPath)

    eventScheduleData.forEach((day) => {
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

  // Validate imported session data (now organized by event)
  const validateSessionData = (
    importData: Record<string, string[]>
  ): ValidationResult => {
    const validByEvent = new Map<string, string[]>()
    const invalidByEvent = new Map<string, string[]>()
    const duplicatesByEvent = new Map<string, string[]>()

    let totalValid = 0
    let totalInvalid = 0
    let totalDuplicates = 0
    let total = 0

    // Get existing sessions across all events
    const existingSessionsMap = getAllSelectedSessionsAcrossEvents()

    // Process each event's sessions
    for (const [eventPath, sessionIds] of Object.entries(importData)) {
      if (!Array.isArray(sessionIds)) continue

      const validSessionIds = getAllValidSessionIdsForEvent(eventPath)
      const existingSessions =
        existingSessionsMap.get(eventPath) || new Set<string>()

      const valid: string[] = []
      const invalid: string[] = []
      const duplicates: string[] = []
      const seen = new Set<string>()

      sessionIds.forEach((id) => {
        total++

        // Skip duplicates within the import list itself
        if (seen.has(id)) {
          return
        }
        seen.add(id)

        if (!validSessionIds.has(id)) {
          // Invalid session ID (not in schedule data for this event)
          invalid.push(id)
          totalInvalid++
        } else if (existingSessions.has(id)) {
          // Duplicate (already in storage for this event)
          duplicates.push(id)
          totalDuplicates++
        } else {
          // Valid and new
          valid.push(id)
          totalValid++
        }
      })

      if (valid.length > 0) validByEvent.set(eventPath, valid)
      if (invalid.length > 0) invalidByEvent.set(eventPath, invalid)
      if (duplicates.length > 0) duplicatesByEvent.set(eventPath, duplicates)
    }

    return {
      validByEvent,
      invalidByEvent,
      duplicatesByEvent,
      total,
      totalValid,
      totalInvalid,
      totalDuplicates,
    }
  }

  // Handler for exporting selected sessions (all events)
  const handleExport = async () => {
    const result = await onCopySelectedSessions()
    if (result.success) {
      // Get all sessions across all events to display
      const allSessionsMap = getAllSelectedSessionsAcrossEvents()
      const exportData: Record<string, string[]> = {}

      for (const [eventPath, sessionIds] of allSessionsMap.entries()) {
        exportData[eventPath] = Array.from(sessionIds)
      }

      const data = JSON.stringify(exportData, null, 2)
      setExportedData(data)

      if (result.count === 0) {
        setMessage({
          text: 'No sessions selected to export',
          type: 'warning',
          operation: 'export',
        })
      } else {
        setMessage({
          text: `Exported ${result.count} session${result.count !== 1 ? 's' : ''} from all events (copied to clipboard)`,
          type: 'success',
          operation: 'export',
        })
      }
    } else {
      setMessage({
        text: 'Failed to export sessions',
        type: 'error',
        operation: 'export',
      })
    }
  }

  // Copy exported data to clipboard
  const handleCopyExported = async () => {
    try {
      await navigator.clipboard.writeText(exportedData)
      setMessage({
        text: 'Copied to clipboard',
        type: 'success',
        operation: 'export',
      })
    } catch (error) {
      console.error('Failed to copy:', error)
      setMessage({
        text: 'Failed to copy',
        type: 'error',
        operation: 'export',
      })
    }
  }

  // Handler for importing selected sessions (all events)
  const handleImport = async () => {
    try {
      if (!importText.trim()) {
        setMessage({
          text: 'Please paste session data in the import field',
          type: 'error',
          operation: 'import',
        })
        return
      }

      // Parse the input text
      const importData = JSON.parse(importText)

      if (typeof importData !== 'object' || importData === null) {
        setMessage({
          text: 'Invalid data format. Please copy session data from the export button.',
          type: 'error',
          operation: 'import',
        })
        return
      }

      // Validate session data
      const validation = validateSessionData(importData)

      if (validation.total === 0) {
        setMessage({
          text: 'No session data found',
          type: 'error',
          operation: 'import',
        })
        return
      }

      if (validation.totalValid === 0) {
        // No new sessions to import
        if (validation.totalDuplicates > 0 && validation.totalInvalid === 0) {
          setMessage({
            text: `All ${validation.totalDuplicates} session${validation.totalDuplicates !== 1 ? 's are' : ' is'} already selected`,
            type: 'warning',
            operation: 'import',
          })
        } else if (
          validation.totalInvalid > 0 &&
          validation.totalDuplicates === 0
        ) {
          setMessage({
            text: `All ${validation.totalInvalid} session${validation.totalInvalid !== 1 ? 's are' : ' is'} invalid`,
            type: 'error',
            operation: 'import',
          })
        } else {
          setMessage({
            text: `${validation.totalDuplicates} duplicate${validation.totalDuplicates !== 1 ? 's' : ''} and ${validation.totalInvalid} invalid session${validation.totalInvalid !== 1 ? 's' : ''}. Nothing to import.`,
            type: 'error',
            operation: 'import',
          })
        }
        return
      }

      // Import only valid sessions
      const result = await onImportSelectedSessions(validation.validByEvent)

      if (result.success) {
        const hasInvalid = validation.totalInvalid > 0
        const hasDuplicates = validation.totalDuplicates > 0
        const hasNewSessions = result.count > 0

        if (!hasNewSessions && (hasInvalid || hasDuplicates)) {
          // Nothing new imported
          const parts: string[] = []
          if (hasInvalid) {
            parts.push(
              `${validation.totalInvalid} invalid session${validation.totalInvalid !== 1 ? 's' : ''}`
            )
          }
          if (hasDuplicates) {
            parts.push(
              `${validation.totalDuplicates} duplicate${validation.totalDuplicates !== 1 ? 's' : ''}`
            )
          }
          setMessage({
            text: `No new sessions imported. ${parts.join(' and ')} skipped.`,
            type: 'warning',
            operation: 'import',
          })
        } else if (hasInvalid || hasDuplicates) {
          // Some imported, some skipped
          const parts: string[] = []
          if (hasInvalid) {
            parts.push(`${validation.totalInvalid} invalid`)
          }
          if (hasDuplicates) {
            parts.push(
              `${validation.totalDuplicates} duplicate${validation.totalDuplicates !== 1 ? 's' : ''}`
            )
          }
          setMessage({
            text: `Imported ${result.count} new session${result.count !== 1 ? 's' : ''} across all events. ${parts.join(' and ')} skipped.`,
            type: 'warning',
            operation: 'import',
          })
        } else {
          // All imported successfully
          setMessage({
            text: `Successfully imported ${result.count} new session${result.count !== 1 ? 's' : ''} across all events`,
            type: 'success',
            operation: 'import',
          })
        }
      } else {
        setMessage({
          text: 'Failed to import sessions',
          type: 'error',
          operation: 'import',
        })
      }
    } catch (error) {
      console.error('Failed to import:', error)
      setMessage({
        text: 'Failed to import sessions. Please ensure you have valid session data.',
        type: 'error',
        operation: 'import',
      })
    }
  }

  const { classes, cx } = useImportExportSessionsStyles({
    messageType: message?.type,
  })

  // Reset state when popup closes
  useEffect(() => {
    if (!isOpen) {
      setMessage(null)
      setImportText('')
      setExportedData('')
    }
  }, [isOpen])

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Transfer Sessions"
      maxWidth="700px"
    >
      <div>
        Use this tool to transfer your selected sessions between devices or
        browsers. Export your selections as data (from all events), then import
        them on another device.
        <br />
        <br />
      </div>

      <div className={classes.importExportSection}>
        <h3 className={classes.sectionTitle}>Export Sessions</h3>
        <p className={classes.sectionDescription}>
          Export your selected sessions from all events.
        </p>
        <button
          className={cx(classes.importExportBtn, classes.exportBtn)}
          onClick={handleExport}
        >
          <MdContentCopy className="btn-icon" />
          Export All Selected Sessions
        </button>
        {exportedData && (
          <div className={classes.exportOutput}>
            <div className={classes.outputHeader}>
              <label className={classes.outputLabel}>Exported Data:</label>
              <button
                className={classes.copyOutputBtn}
                onClick={handleCopyExported}
              >
                <MdContentCopy /> Copy
              </button>
            </div>
            <textarea
              className={classes.exportTextarea}
              value={exportedData}
              readOnly
              rows={6}
            />
          </div>
        )}
        {message && message.operation === 'export' && (
          <div className={classes.importExportMessage}>{message.text}</div>
        )}
      </div>

      <div className={classes.importExportDivider} />

      <div className={classes.importExportSection}>
        <h3 className={classes.sectionTitle}>Import Sessions</h3>
        <p className={classes.sectionDescription}>
          Paste session data below to import and merge with your current
          selections across all events.
          <br /> <strong>Note:</strong> Invalid sessions will be automatically
          filtered out. Sessions already selected will be skipped.
        </p>
        <label className={classes.inputLabel}>Session Data:</label>
        <textarea
          className={classes.importTextarea}
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder='Paste exported session data here (format: {"/event-path": ["session1", "session2"]})'
          rows={6}
        />
        <button
          className={cx(classes.importExportBtn, classes.importBtn)}
          onClick={handleImport}
          disabled={!importText.trim()}
        >
          <MdFileUpload className="btn-icon" />
          Import Sessions
        </button>
        {message && message.operation === 'import' && (
          <div className={classes.importExportMessage}>{message.text}</div>
        )}
      </div>
    </Popup>
  )
}

export default ImportExportSessions
