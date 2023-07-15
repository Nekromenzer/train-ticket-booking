import { useState, useEffect } from 'react'
import authContext from '../AuthContext'

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  // admin mail
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
  //logged user email
  const loggedUserEmail = localStorage.getItem('train_user_email')

  // useEffect(() => {
  //   if (loggedUserEmail === adminEmail) {
  //     setIsAdmin(true)
  //   } else {
  //     setIsAdmin(false)
  //   }
  // }, [adminEmail, loggedUserEmail])

  console.log(isAuthenticated, 'isAuthenticated provider')
  return (
    <authContext.Provider
      value={[
        isAuthenticated,
        setIsAuthenticated,
        adminEmail,
        isAdmin,
        setIsAdmin
      ]}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
