/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { TwoColSideBar } from '../components'
import appDataContext from '../context/AppDataContext'
import UserHome from './user/UserHome'
import { useNavigate } from 'react-router-dom'

const loggedUserEmail = localStorage.getItem('train_user_email')
const adminUrl = import.meta.env.VITE_ADMIN_EMAIL
const isAdmin = adminUrl === loggedUserEmail

const Home = () => {
  const [activeTabIndex] = useContext(appDataContext)
 
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

  useEffect(() => {
    if (adminUrl === loggedUserEmail) {
      navigate('/admin', { replace: true })
    } else {
      navigate('/', { replace: true })
    }
  }, [adminUrl, isAdmin, loggedUserEmail, navigate])
  
  return <TwoColSideBar sideBar content={<GetContentForActiveTab />} />
}

export default Home
