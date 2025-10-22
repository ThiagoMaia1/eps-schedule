import { useState } from 'react'
import { FiUser, FiLogIn } from 'react-icons/fi'
import { useAuth } from '../contexts/useAuth'
import AuthModal from './AuthModal'
import { useAuthButtonStyles } from './AuthButton.styles'

export default function AuthButton() {
  const { classes, cx } = useAuthButtonStyles()
  const { user } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getDisplayEmail = (email: string | null) => {
    if (!email) return ''
    const [username] = email.split('@')
    return username.length > 15 ? `${username.slice(0, 12)}...` : username
  }

  return (
    <>
      <button
        className={cx(classes.authButton, user && classes.userButton)}
        onClick={() => setIsModalOpen(true)}
      >
        <span className={classes.icon}>{user ? <FiUser /> : <FiLogIn />}</span>
        {user ? (
          <span className={classes.userEmail}>
            {getDisplayEmail(user.email)}
          </span>
        ) : (
          <span className={classes.signInText}>Sign In</span>
        )}
      </button>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
