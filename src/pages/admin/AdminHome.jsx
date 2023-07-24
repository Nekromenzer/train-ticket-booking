import { useContext } from 'react'
import { TwoColSideBar } from '../../components'
import appDataContext from '../../context/AppDataContext'
import AdminStatistics from './AdminStatistics'

const AdminHome = () => {
  const [activeTabIndex] = useContext(appDataContext)

  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return <AdminStatistics />
    }
    if (activeTabIndex === 2) {
      return <div>tab 2</div>
    }
    if (activeTabIndex === 3) {
      return <div>tab 3</div>
    }
    return null
  }
  return <TwoColSideBar sideBar content={<GetContentForActiveTab />} isAdmin />
}

export default AdminHome
