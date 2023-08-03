import { useEffect, useState } from 'react'
import handleApiCall from '../../api/handleApiCall'
import LoadingAnimation from '../../components/elements/LoadingAnimation'
import { FaLocationArrow } from 'react-icons/fa'
import dayjs from 'dayjs'

const UserMap = () => {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchLocation = () => {
    handleApiCall({
      variant: 'userDashboard',
      urlType: 'tracking',
      auth: true,
      setLoading: setLoading,
      cb: (res, sate) => {
        if (sate === 200) {
          setCurrentLocation(res)
        }
      }
    })
  }

  useEffect(() => {
    fetchLocation()
    const interval = setInterval(() => {
      fetchLocation() // API call every 5 minutes
    }, 200000)

    return () => {
      return () => {
        clearInterval(interval) // Clear the interval on component unmount
      }
    }
  }, [])

  return (
    <LoadingAnimation loading={loading} tip='Getting live locations...'>
      <div className='rounded-xl h-[16rem] p-2 lg:p-3  backdrop-blur-[0.5px] flex overflow-y-auto  flex-col gap-4 w-fit'>
        {currentLocation?.length ? (
          currentLocation.map((item, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${
                idx === 0 ? 'bg-green-500/90' : 'bg-white-500/90'
              } h-fit px-2 py-1 items-center rounded-md`}
            >
              <div className='text-base antialiased font-normal leading-relaxed'>
                {item.route}
              </div>
              <div className='text-base antialiased font-normal leading-relaxed'>
                {dayjs(item.departure_time).format('MM/DD hh:mm')} -{' '}
                {dayjs(item.departure_time).format('MM/DD hh:mm')}
              </div>
              <FaLocationArrow className='fill-blue-800 animate-ping' />
              <div className='text-base antialiased leading-relaxed font-bold'>
                {item.current_location}
              </div>
            </div>
          ))
        ) : (
          <div className='text-base antialiased font-normal text-white leading-relaxed text-center bg-red-500/90 h-fit px-2 py-1 rounded-md'>
            No live locations available
          </div>
        )}
      </div>
    </LoadingAnimation>
  )
}

export default UserMap
