import { useState } from 'react'
import SideBar from '../elements/SideBar'
import FloatingBar from '../elements/FloatingBar'

const TwoColSideBar = ({ sideBar, content }) => {
  const [isCollapse, setIsCollapse] = useState(false)
  return (
    <div className='flex lg:flex-row flex-col'>
      {sideBar && (
        <div className='h-screen lg:flex align-middle absolute cursor-pointer hidden'>
          <SideBar
            isCollapse={isCollapse}
            setIsCollapse={setIsCollapse}
          />
        </div>
      )}
      <FloatingBar className='lg:hidden' />
      <div
        className={`w-full h-screen p-5 ml-0 overflow-y-auto ${
          !isCollapse ? 'lg:ml-[13.5rem]' : 'lg:ml-[3.5rem]'
        }`}
      >
        {content}
      </div>
    </div>
  )
}

export default TwoColSideBar
