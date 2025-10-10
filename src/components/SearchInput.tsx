import React, { useState, useEffect, useRef } from 'react'
import ClearButton from './ClearButton'
import './SearchInput.css'

interface SearchInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  debounceMs?: number
}

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Type to search...',
  debounceMs = 300,
}) => {
  const [localValue, setLocalValue] = useState(value)
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Sync local value with prop value when it changes externally (e.g., clear button)
  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setLocalValue(newValue)

    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      onChange(newValue)
    }, debounceMs)
  }

  const handleClear = () => {
    setLocalValue('')
    // Clear any pending debounce
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    onChange('')
  }

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [])

  return (
    <div className="search-input-container">
      <label className="search-input-label" htmlFor={`search-${label}`}>
        {label}
      </label>
      <div className="search-input-wrapper">
        <svg
          className="search-input-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          id={`search-${label}`}
          type="text"
          className="search-input-field"
          value={localValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {localValue && (
          <div className="search-input-clear">
            <ClearButton onClick={handleClear} ariaLabel="Clear search" />
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchInput
