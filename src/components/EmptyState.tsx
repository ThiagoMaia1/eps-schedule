import React from 'react'
import { useEmptyStateStyles } from './EmptyState.styles'

interface EmptyStateProps {
  searchText: string
  showOnlySelected: boolean
  activeLocation?: string | null
  activeTrack?: string | null
  activeVenue?: string | null
  activeClassification?: string | null
  showOnlyGeneralEvents?: boolean
  hideGeneralEvents?: boolean
  hideSpecialEvents?: boolean
  showOnlyPanelQA?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
  searchText,
  showOnlySelected,
  activeLocation,
  activeTrack,
  activeVenue,
  activeClassification,
  showOnlyGeneralEvents,
  hideGeneralEvents,
  hideSpecialEvents,
  showOnlyPanelQA,
}) => {
  const { classes } = useEmptyStateStyles()

  // Build a list of active filters
  const getActiveFilters = (): string[] => {
    const filters: string[] = []

    if (searchText.trim()) {
      filters.push(`Search: "${searchText}"`)
    }
    if (showOnlySelected) {
      filters.push('Show only selected sessions')
    }
    if (activeLocation) {
      filters.push(`Location: ${activeLocation}`)
    }
    if (activeTrack) {
      filters.push(`Track: ${activeTrack}`)
    }
    if (activeVenue) {
      filters.push(`Venue: ${activeVenue}`)
    }
    if (activeClassification) {
      filters.push(`Classification: ${activeClassification}`)
    }
    if (showOnlyGeneralEvents) {
      filters.push('General events only')
    }
    if (hideGeneralEvents) {
      filters.push('Hide general events')
    }
    if (!hideSpecialEvents) {
      filters.push('Show special events')
    }
    if (showOnlyPanelQA) {
      filters.push('Panels/Q&A only')
    }

    return filters
  }

  const activeFilters = getActiveFilters()

  const getMessage = () => {
    if (showOnlySelected && activeFilters.length === 1) {
      return "You haven't selected any sessions yet. Click the star icon on any session to add it to your list."
    }

    if (activeFilters.length === 0) {
      return 'No sessions found.'
    }

    if (activeFilters.length === 1) {
      return `No sessions match your active filter: ${activeFilters[0]}.`
    }

    return (
      <>
        No sessions match your active filters:
        <ul
          style={{
            textAlign: 'center',
            marginTop: '8px',
            paddingLeft: '0',
            listStylePosition: 'inside',
          }}
        >
          {activeFilters.map((filter, index) => (
            <li key={index}>{filter}</li>
          ))}
        </ul>
        Try adjusting your filters to see more results.
      </>
    )
  }

  return (
    <div className={classes.emptyState}>
      <div className={classes.emptyStateIcon}>🔍</div>
      <h3 className={classes.emptyStateTitle}>No sessions found</h3>
      <p className={classes.emptyStateMessage}>{getMessage()}</p>
    </div>
  )
}

export default EmptyState
