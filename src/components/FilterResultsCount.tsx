import React from 'react'
import { MdLayers, MdEventNote } from 'react-icons/md'
import './FilterResultsCount.css'

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
  const isFiltered =
    filteredSessions !== totalSessions || filteredTracks !== totalTracks

  if (isFiltered) {
    return (
      <div className="totals-info">
        <div className="totals-comparison">
          <div className="totals-metric">
            <div className="metric-header">
              <MdLayers className="metric-icon" />
              <span className="metric-label">Tracks</span>
            </div>
            <div className="metric-values">
              <div className="metric-bar">
                <div
                  className="metric-bar-fill filtered"
                  style={{
                    width: `${(filteredTracks / totalTracks) * 100}%`,
                  }}
                />
              </div>
              <div className="metric-numbers">
                <span className="metric-showing">Showing</span>
                <span className="metric-filtered">{filteredTracks}</span>
                <span className="metric-separator">/</span>
                <span className="metric-total">{totalTracks}</span>
              </div>
            </div>
          </div>
          <div className="totals-metric">
            <div className="metric-header">
              <MdEventNote className="metric-icon" />
              <span className="metric-label">Sessions</span>
            </div>
            <div className="metric-values">
              <div className="metric-bar">
                <div
                  className="metric-bar-fill filtered"
                  style={{
                    width: `${(filteredSessions / totalSessions) * 100}%`,
                  }}
                />
              </div>
              <div className="metric-numbers">
                <span className="metric-showing">Showing</span>
                <span className="metric-filtered">{filteredSessions}</span>
                <span className="metric-separator">/</span>
                <span className="metric-total">{totalSessions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="totals-info">
      <div className="totals-simple">
        <MdLayers className="metric-icon" />
        <span className="totals-value">{totalTracks} tracks</span>
        <span className="totals-separator">•</span>
        <MdEventNote className="metric-icon" />
        <span className="totals-value">{totalSessions} sessions</span>
      </div>
    </div>
  )
}

export default FilterResultsCount
