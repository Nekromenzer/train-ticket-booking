import { useState, useEffect } from 'react'
import Clock from 'react-clock'

const AnalogClock = () => {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <Clock
      className='bg-white rounded-full'
      value={value}
      size={120}
    />
  )
}

export default AnalogClock
