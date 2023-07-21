/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { TwoColSideBar } from '../components'
import appDataContext from '../context/AppDataContext'
import UserHome from './user/UserHome'
import { Navigate } from 'react-router-dom'
import UserBookings from './user/UserBookings'
import handleApiCall from '../api/handleApiCall'

const loggedUserEmail = localStorage.getItem('train_user_email')
const adminUrl = import.meta.env.VITE_ADMIN_EMAIL

const Home = () => {
  const [activeTabIndex] = useContext(appDataContext)
  const [stations, setStations] = useState([])

  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return <UserHome stations={stations} />
    }
    if (activeTabIndex === 2) {
      return <UserBookings />
    }
    if (activeTabIndex === 3) {
      return <div>FAQ</div>
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

  useEffect(() => {
    handleApiCall({
      variant: 'userDashboard',
      urlType: 'stations',
      setLoading: () => {},
      cb: (data, status) => {
        const mappedStations = data?.map(({ name }) => ({
          value: name
        }))
        if (status === 200) {
          setStations(mappedStations)
        }
      }
    })
    return () => {}
  }, [])

  return <TwoColSideBar sideBar content={<GetContentForActiveTab />} />
}

export default Home
