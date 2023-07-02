import { Navigate, Outlet } from 'react-router'

const HandleAuthRedirect = () => {
  // need to add real routed here
  const isAuthenticated = true
  if (!isAuthenticated) return <Navigate to='login' />
  return <Outlet />
}

export default HandleAuthRedirect
