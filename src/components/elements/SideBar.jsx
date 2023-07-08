import { PiTrainFill } from 'react-icons/pi'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import data from '../../data/components/sideBar'

const SideBar = ({ isCollapse, setIsCollapse, activeIndex }) => {

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center ${
        isCollapse ? 'w-[5rem]' : 'w-[15rem]'
      }`}
    >
      <div className='bg-sky-900 w-full h-screen flex lg:flex-col gap-3 shadow-lg'>
        <div
          className={`w-full h-10 flex items-center ${
            isCollapse ? 'justify-center' : 'justify-center'
          } gap-2 p-2 pt-6 pb-12`}
        >
          <PiTrainFill className='fill-white text-[2.2rem]' />
          {!isCollapse && (
            <span className='subpixel-antialiased text-xl font-semibold leading-loose text-white text-left hover:text-sky-400 ease-in-out duration-200'>
              TrackTrain
            </span>
          )}
        </div>

        {data?.menu?.map((item, idx) => (
          <div
            className={`w-full h-10 flex items-center ${
              isCollapse ? 'justify-center' : 'justify-start pl-6'
            } gap-5  shadow-sm hover:shadow-md ease-in duration-200 p-2 ${
              item?.type === 'logout'
                ? 'mt-auto hover:bg-red-500'
                : 'hover:bg-sky-600'
            } ${activeIndex === idx + 1 && 'bg-sky-950'}`}
            key={idx}
            onClick={item.onClick}
          >
            {item.icon(activeIndex === idx + 1)}
            {!isCollapse && (
              <span
                className={`subpixel-antialiased text-[0.8rem] font-normal tracking-wider text-white text-left ${
                  activeIndex === idx + 1 && 'text-yellow-200'
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
        className='bg-sky-900 h-10 flex items-center justify-center w-8 rounded-r-lg pr-1 shadow-lg'
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
