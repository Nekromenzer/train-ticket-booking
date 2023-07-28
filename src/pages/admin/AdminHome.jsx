import { useContext, useState } from 'react'
import { TwoColSideBar } from '../../components'
import appDataContext from '../../context/AppDataContext'
import AdminStatistics from './AdminStatistics'
import { useEffect } from 'react'
import handleApiCall from '../../api/handleApiCall'
import AdminUsers from './AdminUsers'

const AdminHome = () => {
  const [activeTabIndex] = useContext(appDataContext)
  const [loading, setLoading] = useState(false)
  const [statistics, setStatistics] = useState({})
  const [users, setUsers] = useState([])

  const fetchUsers = ({ loading }) => {
    handleApiCall({
      variant: 'admin',
      urlType: 'getAllUsers',
      setLoading: loading,
      auth: true,
      cb: res => {
        setUsers(res)
      }
    })
  }

  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return <AdminStatistics loading={loading} statistics={statistics} />
    }
    if (activeTabIndex === 2) {
      return <AdminUsers users={users} fetchUsers={fetchUsers} />
    }
    if (activeTabIndex === 3) {
      return <div>tab 3</div>
    }
    return null
  }

  useEffect(() => {
    setLoading(true)
    handleApiCall({
      variant: 'admin',
      urlType: 'getStatistics',
      setLoading: setLoading,
      auth: true,
      cb: res => {
        setStatistics(res)
      }
    })

    fetchUsers({ loading: setLoading })
  }, [])

  return <TwoColSideBar sideBar content={<GetContentForActiveTab />} isAdmin />
}

export default AdminHome
