import { useState } from 'react'
import appDataContext from '../AppDataContext'

const AppDataProvider = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  return (
    <appDataContext.Provider value={[activeTabIndex, setActiveTabIndex]}>
      {children}
    </appDataContext.Provider>
  )
}

export default AppDataProvider
