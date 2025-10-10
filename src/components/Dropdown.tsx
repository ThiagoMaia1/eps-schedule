import React from 'react'
import Select, {
  type StylesConfig,
  components,
  type ClearIndicatorProps,
} from 'react-select'
import { IoClose } from 'react-icons/io5'
import './Dropdown.css'

interface DropdownProps {
  label: string
  value: string | null
  options: string[]
  onChange: (value: string | null) => void
  placeholder?: string
  showClearButton?: boolean
}

interface OptionType {
  value: string
  label: string
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
  placeholder = 'All',
  showClearButton = false,
}) => {
  const selectOptions: OptionType[] = options.map((option) => ({
    value: option,
    label: option,
  }))

  const selectedOption = value
    ? selectOptions.find((opt) => opt.value === value)
    : null

  const handleChange = (newValue: OptionType | null) => {
    onChange(newValue ? newValue.value : null)
  }

  // Custom styles to match the existing design
  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      padding: '0.125rem 0.375rem',
      fontSize: '0.9375rem',
      border: state.isFocused ? '2px solid #3b82f6' : '2px solid #e5e7eb',
      borderRadius: '0.5rem',
      backgroundColor: '#ffffff',
      color: '#1f2937',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none',
      boxShadow: state.isFocused ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
        backgroundColor: state.isFocused ? '#ffffff' : '#f9fafb',
      },
      minHeight: '42px',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '0.5rem',
      boxShadow:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      marginTop: '0.25rem',
      zIndex: 9999,
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: '0.25rem',
      maxHeight: '300px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#3b82f6'
        : state.isFocused
          ? '#eff6ff'
          : 'transparent',
      color: state.isSelected ? '#ffffff' : '#1f2937',
      cursor: 'pointer',
      padding: '0.625rem 0.875rem',
      borderRadius: '0.375rem',
      transition: 'all 0.15s ease',
      '&:active': {
        backgroundColor: state.isSelected ? '#3b82f6' : '#dbeafe',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9ca3af',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#1f2937',
    }),
    input: (provided) => ({
      ...provided,
      color: '#1f2937',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#6b7280',
      padding: '0.5rem',
      transition: 'all 0.2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
      '&:hover': {
        color: '#374151',
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#6b7280',
      padding: '0.5rem',
      cursor: 'pointer',
      '&:hover': {
        color: '#374151',
      },
    }),
  }

  // Custom clear indicator to use the existing ClearButton style
  const ClearIndicator = (props: ClearIndicatorProps<OptionType, false>) => {
    return (
      <components.ClearIndicator {...props}>
        <div
          style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}
        >
          <IoClose size={18} color="#6b7280" />
        </div>
      </components.ClearIndicator>
    )
  }

  return (
    <div className="dropdown-container">
      <label className="dropdown-label" htmlFor={`dropdown-${label}`}>
        {label}
      </label>
      <div className="dropdown-wrapper">
        <Select
          inputId={`dropdown-${label}`}
          value={selectedOption}
          onChange={handleChange}
          options={selectOptions}
          styles={customStyles}
          placeholder={placeholder}
          isClearable={showClearButton}
          isSearchable={true}
          components={showClearButton ? { ClearIndicator } : undefined}
          className="react-select-container"
          classNamePrefix="react-select"
          menuPortalTarget={document.body}
          menuPosition="fixed"
        />
      </div>
    </div>
  )
}

export default Dropdown
