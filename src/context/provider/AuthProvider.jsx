import { useState, useEffect } from 'react'
import authContext from '../AuthContext'

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [userToken, setUserToken] = useState(null)
  const [isSystemAdmin, setIsSystemAdmin] = useState(false)
  // admin mail
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
  const getStoredUserToken = localStorage.getItem('userToken')

  useEffect(() => {
    localStorage.setItem('userToken', userToken)
  }, [getStoredUserToken, isAuthenticated, userToken])

  useEffect(() => {
    if (getStoredUserToken === null) {
      setIsAuthenticated(false)
    }
  }, [getStoredUserToken, userToken])

  return (
    <authContext.Provider
      value={[
        isAuthenticated,
        setIsAuthenticated,
        isSystemAdmin,
        setIsSystemAdmin,
        setUserToken,
        adminEmail
      ]}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
