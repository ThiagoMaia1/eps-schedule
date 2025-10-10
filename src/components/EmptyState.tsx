import React from 'react'
import './EmptyState.css'

interface EmptyStateProps {
  searchText: string
  showOnlySelected: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
  searchText,
  showOnlySelected,
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">🔍</div>
      <h3 className="empty-state-title">No sessions found</h3>
      <p className="empty-state-message">
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

