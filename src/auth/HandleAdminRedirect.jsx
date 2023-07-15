import { Navigate, Outlet } from 'react-router'
const adminUrl = import.meta.env.VITE_ADMIN_EMAIL

const HandleAdminRedirect = () => {
  const loggedUserEmail = localStorage.getItem('train_user_email')
  // need to add real routed here
  if (adminUrl !== loggedUserEmail) return <Navigate to='/' />
  return <Outlet />
}

export default HandleAdminRedirect
