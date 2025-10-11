import React from 'react'
import { useEmptyStateStyles } from './EmptyState.styles'

interface EmptyStateProps {
  searchText: string
  showOnlySelected: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
  searchText,
  showOnlySelected,
}) => {
  const { classes } = useEmptyStateStyles()

  return (
    <div className={classes.emptyState}>
      <div className={classes.emptyStateIcon}>🔍</div>
      <h3 className={classes.emptyStateTitle}>No sessions found</h3>
      <p className={classes.emptyStateMessage}>
        {searchText.trim()
          ? `No sessions match your search "${searchText}"`
          : showOnlySelected
            ? "You haven't selected any sessions yet. Click the star icon on any session to add it to your list."
            : 'No sessions match the selected filters. Try adjusting your filters to see more results.'}
      </p>
    </div>
  )
}

export default EmptyState
