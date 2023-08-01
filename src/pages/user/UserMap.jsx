import { useEffect, useState } from 'react'
import handleApiCall from '../../api/handleApiCall'
import LoadingAnimation from '../../components/elements/LoadingAnimation'
import { FaLocationArrow } from 'react-icons/fa'

const UserMap = () => {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchLocation = () => {
    handleApiCall({
      variant: 'userDashboard',
      urlType: 'currentLocation',
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
    }, 5 * 60 * 1000)

    return () => {
      return () => {
        clearInterval(interval) // Clear the interval on component unmount
      }
    }
  }, [])

  return (
    <LoadingAnimation loading={loading} tip='Getting live locations...'>
      <div className='rounded-xl h-[16rem] p-2 lg:p-3  backdrop-blur-[0.5px] flex overflow-y-auto  flex-col gap-4 w-fit'>
        <div className='flex gap-3  bg-green-500/90 h-fit px-2 py-1 items-center rounded-md '>
          <div className='text-base antialiased font-normal leading-relaxed'>
            Udarata manike
          </div>
          <FaLocationArrow className='fill-blue-800 animate-ping' />
          <div className='text-base antialiased font-normal leading-relaxed'>
            kandy
          </div>
        </div>
        <div className='flex gap-3 bg-white/80 h-fit px-2 py-1 items-center rounded-md'>
          <div className='text-base antialiased font-normal leading-relaxed'>
            Udarata manike
          </div>
          <FaLocationArrow className='fill-blue-800' />
          <div className='text-base antialiased font-normal leading-relaxed'>
            kandy
          </div>
        </div>
      </div>
    </LoadingAnimation>
  )
}

export default UserMap
