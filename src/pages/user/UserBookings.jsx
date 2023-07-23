import { useEffect, useState } from 'react'
import { CommonCalender } from '../../components'
import handleApiCall from '../../api/handleApiCall'
import LoadingAnimation from '../../components/elements/LoadingAnimation'
import dayjs from 'dayjs'

const UserBookings = () => {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(false)

  const getListData = value => {
    const eventData = reservations

    return eventData[value.date()] || []
  }

  const from = dayjs().startOf('M').format('YYYY-MM-DD')
  const to = dayjs().endOf('M').format('YYYY-MM-DD')

  console.log(reservations)

  useEffect(() => {
    setLoading(true)
    handleApiCall({
      variant: 'userDashboard',
      urlType: 'getReservations',
      setLoading,
      urlParams: `?from=${from}&to=${to}`,
      auth: true,
      cb: (res, status) => {
        if (status === 200) {
          const updatedObj = {}
          for (const key in res) {
            const newKey = dayjs(key).format('DD')
            updatedObj[newKey] = res[key]
          }
          setReservations(updatedObj)
        }
      }
    })
    return () => {}
  }, [from, to])

  return (
    <div className='h-full flex'>
      <LoadingAnimation loading={loading}>
        <CommonCalender
          getListData={getListData}
          headerText='My bookings in this month'
        />
      </LoadingAnimation>
    </div>
  )
}

export default UserBookings
