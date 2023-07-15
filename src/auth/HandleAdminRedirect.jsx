import { Navigate, Outlet } from 'react-router'

const adminUrl = import.meta.env.VITE_ADMIN_EMAIL

const HandleAdminRedirect = () => {
  // need to add real routed here
  if (adminUrl !== 'admin.trainTrack@gmal.com') return <Navigate to='/' />
  return <Outlet />
}

export default HandleAdminRedirect