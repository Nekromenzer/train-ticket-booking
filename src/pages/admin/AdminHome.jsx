import { useContext, useState, useEffect } from 'react'
import { CommonBtn, TwoColSideBar } from '../../components'
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
  const [schedules, setSchedules] = useState([])

  const [stations, setStations] = useState([])
  const [routes, setRoutes] = useState([])
  const [trains, setTrains] = useState([])


  const [btnClicked, setBtnClicked] = useState(false)

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

  const getTrainSchedules = ({loading}) => {
    handleApiCall({
      variant: 'admin',
      urlType: 'getSchedules',
      setLoading: loading,
      auth: true,
      cb: res => {
        setSchedules(res)
      }
    })
  }

  const HeaderText = ({ children, description, btnTitle, onClick }) => {
    return (
      <div className='mb-12'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-2xl antialiased font-bold'>{children}</h3>
            <p className='text-sm h-[1rem] text-slate-500'>{description}</p>
          </div>
          {btnTitle && (
            <CommonBtn
              type='primary'
              className='bg-blue-600 border-none shadow-none'
              onClick={() => onClick && onClick()}
            >
              {btnTitle}
            </CommonBtn>
          )}
        </div>
      </div>
    )
  }

  const GetContentForActiveTab = () => {
    if (activeTabIndex === 1) {
      return (
        <AdminStatistics
          loading={loading}
          statistics={statistics}
          totalUsers={users?.data?.length}
          totalSchedules={0}
          totalReservations={reservations?.data?.length}
        />
      )
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
          />
        </>
      )
    }
    if (activeTabIndex === 4) {
      return (
        <>
          <HeaderText
            description='Train schedules currently on system'
            btnTitle='Add schedule'
            onClick={() => setBtnClicked(true)}
          >
            Schedules
          </HeaderText>
          <AdminSchedules
            loading={loading}
            btnClicked={btnClicked}
            setBtnClicked={setBtnClicked}
            schedules={schedules}
            getTrainSchedules
            // data
            stations={stations}
            routes={routes}
            trains={trains}
          />
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
    getTrainSchedules({loading: setLoading})

    handleApiCall({
      variant: 'admin',
      urlType: 'getRoutes',
      setLoading: setLoading,
      auth: true,
      cb: res => {
        const mappedRoutes = res?.map(({ from_to, id }) => ({
          label: from_to,
          value: id
        }))
        setRoutes(mappedRoutes)
      }
    })

    handleApiCall({
      variant: 'admin',
      urlType: 'getAllTrains',
      setLoading: setLoading,
      auth: true,
      cb: res => {
        const mappedTrains = res?.map(({ name, id }) => ({
          label: name,
          value: id
        }))
        setTrains(mappedTrains)
      }
    })
  }, [])

  useEffect(() => {
    handleApiCall({
      variant: 'userDashboard',
      urlType: 'stations',
      setLoading: () => {},
      cb: (data, status) => {
        const mappedStations = data?.map(({ name, id }) => ({
          label: name,
          value: id
        }))
        if (status === 200) {
          setStations(mappedStations)
        }
      }
    })
    return () => {}
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
