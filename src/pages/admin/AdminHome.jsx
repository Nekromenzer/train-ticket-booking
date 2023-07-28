import { useContext, useState, useEffect } from 'react'
import { TwoColSideBar } from '../../components'
import appDataContext from '../../context/AppDataContext'
import AdminStatistics from './AdminStatistics'
import handleApiCall from '../../api/handleApiCall'
import AdminUsers from './AdminUsers'
import AdminReservations from './AdminReservations'
import dayjs from 'dayjs'
import LoadingAnimation from '../../components/elements/LoadingAnimation'
import AdminSchedules from './AdminSchedules'

const AdminHome = () => {
  const [activeTabIndex] = useContext(appDataContext)
  const [loading, setLoading] = useState(false)
  const [statistics, setStatistics] = useState({})
  const [reservations, setReservations] = useState([{}])
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

  const getReservations = ({
    loading,
    from = dayjs().startOf('month').format('YYYY-MM-DD'),
    to = dayjs().endOf('month').format('YYYY-MM-DD')
  }) => {
    handleApiCall({
      variant: 'admin',
      urlType: 'getAllReservation',
      setLoading: loading,
      auth: true,
      data: {
        from,
        to
      },
      cb: res => {
        setReservations(res)
      }
    })
  }

  const HeaderText = ({ children, description }) => {
    return (
      <div className='mb-12'>
        <h3 className='text-2xl antialiased font-bold'>{children}</h3>
        <p className='text-sm h-[1rem] text-slate-500'>{description}</p>
      </div>
    )
  }
  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return <AdminStatistics loading={loading} statistics={statistics} />
    }
    if (activeTabIndex === 2) {
      return (
        <>
          <HeaderText description='You can manage all the users in system form this page'>
            System users
          </HeaderText>
          <AdminUsers users={users} fetchUsers={fetchUsers} loading={loading} />
        </>
      )
    }
    if (activeTabIndex === 3) {
      return (
        <>
          <HeaderText description='Reservations made by all of users'>
            Reservations
          </HeaderText>
          <AdminReservations
            reservations={reservations}
            getReservations={getReservations}
            loading={loading}
          />
        </>
      )
    }
    if (activeTabIndex === 4) {
      return (
        <>
          <HeaderText description='Train schedules currently on system'>
            Schedules
          </HeaderText>
          <AdminSchedules loading={loading} />
        </>
      )
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
    getReservations({ loading: setLoading })
    fetchUsers({ loading: setLoading })
  }, [])

  return (
    <TwoColSideBar
      sideBar
      content={
        <LoadingAnimation loading={loading} tip='Getting statistics.....'>
          <GetContentForActiveTab />
        </LoadingAnimation>
      }
      isAdmin
    />
  )
}

export default AdminHome
