import { useContext } from 'react'
import { TwoColSideBar } from '../components'
import appDataContext from '../context/AppDataContext'

const Home = () => {
  const [activeTabIndex] = useContext(appDataContext)

  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return <div className='bg-red-400'>home page content</div>
    }
    if (activeTabIndex === 2) {
      return <div className='bg-red-400'>my bookings page content</div>
    }
    return null
  }

  return <TwoColSideBar sideBar content={<GetContentForActiveTab />} />
}

export default Home
