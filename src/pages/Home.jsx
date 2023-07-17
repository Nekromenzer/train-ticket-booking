/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { TwoColSideBar } from '../components'
import appDataContext from '../context/AppDataContext'
import UserHome from './user/UserHome'
import { Navigate } from 'react-router-dom'
import UserBookings from './user/UserBookings'

const loggedUserEmail = localStorage.getItem('train_user_email')
const adminUrl = import.meta.env.VITE_ADMIN_EMAIL

const Home = () => {
  const [activeTabIndex] = useContext(appDataContext)
  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return <UserHome />
    }
    if (activeTabIndex === 2) {
      return <UserBookings />
    }
    return null
  }

  const handleRedirection = () => {
    return <Navigate to='/admin' replace />
  }

  useEffect(() => {
    if (adminUrl === loggedUserEmail) {
      handleRedirection()
    }
  }, [])

  return <TwoColSideBar sideBar content={<GetContentForActiveTab />} />
}

export default Home
