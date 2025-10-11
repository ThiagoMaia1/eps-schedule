import { useState, useEffect } from 'react'

interface UseIsMobileOptions {
  breakpoint?: number
}

export const useIsMobile = (options: UseIsMobileOptions = {}) => {
  const { breakpoint = 768 } = options

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Initialize with current window size if available
    if (typeof window !== 'undefined') {
      return window.innerWidth <= breakpoint
    }
    return false
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    // Check on mount
    checkMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [breakpoint])

  return isMobile
}
