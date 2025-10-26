import React from 'react'
import { useToggleStyles } from './Toggle.styles'

interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  ariaLabel?: string
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  disabled = false,
  ariaLabel,
}) => {
  const { classes, cx } = useToggleStyles()

  const handleClick = () => {
    if (!disabled) {
      onChange(!checked)
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={cx(classes.toggle, {
        [classes.toggleChecked]: checked,
        [classes.toggleDisabled]: disabled,
      })}
      onClick={handleClick}
      disabled={disabled}
    >
      <span
        className={cx(classes.toggleThumb, {
          [classes.toggleThumbChecked]: checked,
        })}
      />
    </button>
  )
}

export default Toggle
