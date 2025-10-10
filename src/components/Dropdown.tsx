import React from 'react'
import ClearButton from './ClearButton'
import './Dropdown.css'

interface DropdownProps {
  label: string
  value: string | null
  options: string[]
  onChange: (value: string | null) => void
  placeholder?: string
  showClearButton?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
  placeholder = 'All',
  showClearButton = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    onChange(selectedValue === '' ? null : selectedValue)
  }

  const handleClear = () => {
    onChange(null)
  }

  return (
    <div className="dropdown-container">
      <label className="dropdown-label" htmlFor={`dropdown-${label}`}>
        {label}
      </label>
      <div className="dropdown-wrapper">
        <select
          id={`dropdown-${label}`}
          className="dropdown-select"
          value={value || ''}
          onChange={handleChange}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {showClearButton && value && (
          <div className="dropdown-clear-btn">
            <ClearButton onClick={handleClear} ariaLabel="Clear selection" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropdown
