import React from 'react'

interface TrackTitleProps {
  trackName?: string
  subtheme?: string
  moderatorName?: string
  className?: string
  subthemeClassName?: string
}

/**
 * Renders the track title with optional subtheme.
 * If there's no track name but a moderator exists, shows "Moderator: {name}" instead.
 */
export const TrackTitle: React.FC<TrackTitleProps> = ({
  trackName,
  subtheme,
  moderatorName,
  className,
  subthemeClassName,
}) => {
  // If no track name but has moderator, show moderator info
  const displayText =
    trackName || (moderatorName ? `Moderator: ${moderatorName}` : 'Track')

  return (
    <>
      <span className={className}>{displayText}</span>
      {subtheme && <span className={subthemeClassName}> - {subtheme}</span>}
    </>
  )
}
