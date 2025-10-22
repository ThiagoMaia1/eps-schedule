import { useState, type FormEvent } from 'react'
import { FiX } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../contexts/useAuth'
import { useAuthModalStyles } from './AuthModal.styles'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { classes, cx } = useAuthModalStyles()
  const { user, signIn, signUp, signInWithGoogle, logout } = useAuth()
  const isProduction = import.meta.env.PROD
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    // Prevent sign up in production
    if (isSignUp && isProduction) {
      setError('Sign up is not available')
      return
    }

    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      if (isSignUp) {
        await signUp(email, password)
      } else {
        await signIn(email, password)
      }
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      // Don't close the modal automatically - let user see they're signed in
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setLoading(true)

    try {
      await signInWithGoogle()
      // Don't close the modal automatically
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    setError('')
    setLoading(true)

    try {
      await logout()
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal}>
        <div className={classes.modalHeader}>
          <h2 className={classes.modalTitle}>
            {user ? 'Account' : 'Authentication'}
          </h2>
          <button
            className={classes.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>

        <div className={classes.modalBody}>
          {user ? (
            <div className={classes.userInfo}>
              <p>You are signed in as:</p>
              <p className={classes.userEmail}>{user.email}</p>
              <button
                className={cx(classes.button, classes.logoutButton)}
                onClick={handleLogout}
                disabled={loading}
              >
                {loading ? 'Signing out...' : 'Sign Out'}
              </button>
            </div>
          ) : (
            <>
              <div className={classes.infoBox}>
                <p className={classes.infoText}>
                  Sign in to sync your session selections across all your
                  devices. Your schedule will be automatically saved and
                  accessible from anywhere.
                </p>
              </div>

              <div className={classes.tabs}>
                <button
                  className={cx(classes.tab, !isSignUp && classes.tabActive)}
                  onClick={() => {
                    setIsSignUp(false)
                    setError('')
                  }}
                >
                  Sign In
                </button>
                {!isProduction && (
                  <button
                    className={cx(classes.tab, isSignUp && classes.tabActive)}
                    onClick={() => {
                      setIsSignUp(true)
                      setError('')
                    }}
                  >
                    Sign Up
                  </button>
                )}
              </div>

              {error && <div className={classes.error}>{error}</div>}

              <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.formGroup}>
                  <label className={classes.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={classes.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    placeholder="Enter your email"
                  />
                </div>

                <div className={classes.formGroup}>
                  <label className={classes.label} htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className={classes.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    placeholder="Enter your password"
                  />
                </div>

                {isSignUp && (
                  <div className={classes.formGroup}>
                    <label className={classes.label} htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className={classes.input}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={loading}
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className={cx(classes.button, classes.primaryButton)}
                  disabled={loading}
                >
                  {loading
                    ? 'Please wait...'
                    : isSignUp
                      ? 'Create Account'
                      : 'Sign In'}
                </button>
              </form>

              <div className={classes.divider}>OR</div>

              <button
                className={cx(classes.button, classes.googleButton)}
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
