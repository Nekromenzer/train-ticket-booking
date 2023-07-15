/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { TwoColSideBar } from '../components'
import appDataContext from '../context/AppDataContext'
import UserHome from './user/UserHome'
import { Navigate, useNavigate } from 'react-router-dom'
import authContext from '../context/AuthContext'

const loggedUserEmail = localStorage.getItem('train_user_email')
const adminUrl = import.meta.env.VITE_ADMIN_EMAIL
const isAdmin = adminUrl === loggedUserEmail

const Home = () => {
  const [activeTabIndex] = useContext(appDataContext)
  const [isSystemAdmin] = useContext(authContext)
  const navigate = useNavigate()
  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return <UserHome />
    }
    if (activeTabIndex === 2) {
      return <div className='bg-red-400'>my bookings page content</div>
    }
    return null
  }

  const handleRedirection = () => {
    if (adminUrl === loggedUserEmail || isSystemAdmin) {
      window.location.reload()
      return <Navigate to='/admin' replace={true} />
    }
    return <Navigate to='/' replace={true} />
  }

  console.log(isAdmin, 'isAdmin')
  useEffect(() => {
    return handleRedirection()
  }, [])

  return <TwoColSideBar sideBar content={<GetContentForActiveTab />} />
}

export default Home
