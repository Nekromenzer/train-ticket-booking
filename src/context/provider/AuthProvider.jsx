import { useState } from 'react'
import authContext from '../AuthContext'

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  // admin mail
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL

  return (
    <authContext.Provider
      value={[isAuthenticated, setIsAuthenticated, adminEmail]}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
