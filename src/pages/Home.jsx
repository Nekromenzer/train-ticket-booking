import { useContext } from 'react'
import { TwoColSideBar } from '../components'
import appDataContext from '../context/AppDataContext'
import UserHome from './user/UserHome'
import handleApiCall from '../api/handleApiCall'

const Home = () => {
  const [activeTabIndex] = useContext(appDataContext)
  handleApiCall({ variant: 'user', urlType: 'info' })
  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return <UserHome />
    }
    if (activeTabIndex === 2) {
      return <div className='bg-red-400'>my bookings page content</div>
    }
    return null
  }

  return <TwoColSideBar sideBar content={<GetContentForActiveTab />} />
}

export default Home
