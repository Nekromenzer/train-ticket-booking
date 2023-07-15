import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import authContext from '../context/AuthContext'

const HandleAuthRedirect = () => {
  // need to add real routed here
  const [isAuthenticated] = useContext(authContext)
  if (!isAuthenticated) return <Navigate to='login' />
  return <Outlet />
}

export default HandleAuthRedirect
