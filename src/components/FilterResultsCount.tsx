import React from 'react'
import { MdLayers, MdEventNote } from 'react-icons/md'
import { useFilterResultsCountStyles } from './FilterResultsCount.styles'

interface FilterResultsCountProps {
  totalTracks: number
  totalSessions: number
  filteredTracks: number
  filteredSessions: number
}

const FilterResultsCount: React.FC<FilterResultsCountProps> = ({
  totalTracks,
  totalSessions,
  filteredTracks,
  filteredSessions,
}) => {
  const { classes } = useFilterResultsCountStyles()
  const isFiltered =
    filteredSessions !== totalSessions || filteredTracks !== totalTracks

  if (isFiltered) {
    return (
      <div className={classes.totalsInfo}>
        <div className={classes.totalsComparison}>
          <div className={classes.totalsMetric}>
            <div className={classes.metricHeader}>
              <MdLayers className={classes.metricIcon} />
              <span className={classes.metricLabel}>Tracks</span>
            </div>
            <div className={classes.metricValues}>
              <div className={classes.metricBar}>
                <div
                  className={classes.metricBarFill}
                  style={{
                    width: `${(filteredTracks / totalTracks) * 100}%`,
                  }}
                />
              </div>
              <div className={classes.metricNumbers}>
                <span className={classes.metricShowing}>Showing</span>
                <span className={classes.metricFiltered}>{filteredTracks}</span>
                <span className={classes.metricSeparator}>/</span>
                <span className={classes.metricTotal}>{totalTracks}</span>
              </div>
            </div>
          </div>
          <div className={classes.totalsMetric}>
            <div className={classes.metricHeader}>
              <MdEventNote className={classes.metricIcon} />
              <span className={classes.metricLabel}>Sessions</span>
            </div>
            <div className={classes.metricValues}>
              <div className={classes.metricBar}>
                <div
                  className={classes.metricBarFill}
                  style={{
                    width: `${(filteredSessions / totalSessions) * 100}%`,
                  }}
                />
              </div>
              <div className={classes.metricNumbers}>
                <span className={classes.metricShowing}>Showing</span>
                <span className={classes.metricFiltered}>
                  {filteredSessions}
                </span>
                <span className={classes.metricSeparator}>/</span>
                <span className={classes.metricTotal}>{totalSessions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={classes.totalsInfo}>
      <div className={classes.totalsSimple}>
        <MdLayers className={classes.metricIcon} />
        <span className={classes.totalsValue}>{totalTracks} tracks</span>
        <span className={classes.totalsSeparator}>•</span>
        <MdEventNote className={classes.metricIcon} />
        <span className={classes.totalsValue}>{totalSessions} sessions</span>
      </div>
    </div>
  )
}

export default FilterResultsCount
