import { useState, useEffect } from 'react'
import authContext from '../AuthContext'

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
  const [authenticatedAdmin, setAuthenticatedAdmin] = useState(false)

  //logged user email
  const loggedUserEmail = localStorage.getItem('train_user_email')
  useEffect(() => {
    if (loggedUserEmail === adminEmail) {
      setAuthenticatedAdmin(true)
    } else {
      setAuthenticatedAdmin(false)
    }
  }, [adminEmail, loggedUserEmail])

  console.log(authenticatedAdmin, 'authenticatedAdmin provider')
  return (
    <authContext.Provider
      value={[
        isAuthenticated,
        setIsAuthenticated,
        adminEmail,
        authenticatedAdmin
      ]}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
