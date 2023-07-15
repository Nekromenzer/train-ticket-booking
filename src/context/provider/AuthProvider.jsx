import { useState, useEffect } from 'react'
import authContext from '../AuthContext'
import { ellipse } from '@antv/x6/lib/registry/port-layout/ellipse'

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userToken, setUserToken] = useState(null)
  const [isSystemAdmin, setIsSystemAdmin] = useState(false)
  // admin mail
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
  const getStoredUserToken = localStorage.getItem('userToken')

  useEffect(() => {
    if (
      getStoredUserToken &&
      getStoredUserToken !== 'null' &&
      getStoredUserToken !== 'undefined'
    ) {
      setUserToken(getStoredUserToken)
      setIsAuthenticated(true)
    } else {
      setUserToken(null)
      setIsAuthenticated(false)
    }
    return
  }, [getStoredUserToken, isAuthenticated])
  return (
    <authContext.Provider
      value={[
        isAuthenticated,
        setIsAuthenticated,
        isSystemAdmin,
        setIsSystemAdmin,
        setUserToken,
        userToken,
        adminEmail,
        getStoredUserToken
      ]}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
