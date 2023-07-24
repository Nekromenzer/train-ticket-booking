import { useContext } from 'react'
import { PiTrainFill } from 'react-icons/pi'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import data from '../../data/components/sideBar'
import appDataContext from '../../context/AppDataContext'
import AnalogClock from './AnalogClock'

const SideBar = ({ isCollapse, setIsCollapse, isAdmin }) => {
  const [activeTabIndex, setActiveTabIndex] = useContext(appDataContext)

  const menuItems = isAdmin ? data.adminMenu : data.menu
  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center ${
        isCollapse ? 'w-[5rem]' : 'w-[15rem]'
      } ease-in-out duration-200`}
    >
      <div className='bg-[#001F30] w-full h-screen flex lg:flex-col gap-3 shadow-lg'>
        <div
          className={`w-full h-10 flex items-center ${
            isCollapse ? 'justify-center' : 'justify-center'
          } gap-2 p-2 pt-8 pb-12`}
        >
          <PiTrainFill className='fill-white text-[2.2rem]' />
          {!isCollapse && (
            <span className='subpixel-antialiased text-xl font-semibold leading-loose text-white text-left hover:text-sky-400 ease-in-out duration-200'>
              TrackTrain
            </span>
          )}
        </div>

        {!isCollapse && !isAdmin && (
          <div className='flex w-full justify-center items-center h-20  mb-12 '>
            <AnalogClock />
          </div>
        )}

        {menuItems?.map((item, idx) => (
          <div
            className={`w-full h-10 flex items-center ${
              isCollapse ? 'justify-center' : 'justify-start pl-6'
            } gap-5  shadow-sm hover:shadow-md ease-in duration-200 p-2 ${
              item?.type === 'logout'
                ? 'mt-auto hover:bg-red-500'
                : 'hover:bg-sky-600'
            } ${activeTabIndex === idx + 1 && 'bg-sky-800'}`}
            key={idx}
            onClick={() =>
              item?.type !== 'logout'
                ? setActiveTabIndex(idx + 1)
                : item.onClick()
            }
          >
            {item.icon(activeTabIndex === idx + 1)}
            {!isCollapse && (
              <span
                className={`subpixel-antialiased text-[0.8rem] font-normal tracking-wider text-white text-left ${
                  activeTabIndex === idx + 1 && 'text-yellow-200'
                }`}
              >
                {item.title}
              </span>
            )}
          </div>
        ))}
      </div>
      {/* expand collapse */}
      <div
        className='bg-[#001F30] h-10 flex items-center justify-center w-8 rounded-r-lg pr-1 shadow-lg'
        onClick={() => setIsCollapse(s => !s)}
      >
        {isCollapse ? (
          <BiRightArrow className='fill-white text-xl hover:fill-sky-200 hover' />
        ) : (
          <BiLeftArrow className='fill-white text-xl hover:fill-sky-200' />
        )}
      </div>
    </div>
  )
}

export default SideBar
