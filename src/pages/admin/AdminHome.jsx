/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const loggedUserEmail = localStorage.getItem('train_user_email')
const adminUrl = import.meta.env.VITE_ADMIN_EMAIL
const isAdmin = adminUrl === loggedUserEmail

const AdminHome = () => {
  const navigate = useNavigate()
  const loggedUserEmail = localStorage.getItem('train_user_email')

  // useEffect(() => {
  //   const handleNavigate = () => {
  //     if (!isAdmin) {
  //       return navigate('/', { replace: true })
  //     }
  //   }
  //   return handleNavigate()
  // }, [loggedUserEmail, navigate, loggedUserEmail])
  return <div>Admin Home</div>
}

export default AdminHome
