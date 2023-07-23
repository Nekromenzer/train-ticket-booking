import data from '../../data/pages/userLevel'
import { Badge } from 'antd'

const UserLevel = ({ level }) => {
  const getUserLevelData = data?.levels[level - 1]
  return (
    <div className='flex flex-col pt-6 px-3 '>
      <div className='flex flex-col items-center justify-center gap-5'>
        <img src={getUserLevelData?.badge} alt='badge' width={80} height={80} />
        <h1 className='text-2xl font-bold text-center'>
          {getUserLevelData?.name} Member
        </h1>
      </div>
      <div className='mt-6 lg:mt-12 flex flex-col gap-6'>
        <Badge.Ribbon
          text={`${getUserLevelData?.discount}%`}
          placement='end'
          className='mt-[-1rem] animate-bounce'
          color='red'
        >
          <div className='text-base bg-red-200 p-2 rounded-md font-monts font-bold border border-red-600'>
            Discount on current level
          </div>
        </Badge.Ribbon>
        {level !== 4 && (
          <Badge.Ribbon
            text={`${data?.levels[level]?.discount}%`}
            placement='end'
            className='mt-[-1rem] '
          >
            <div className='text-base bg-sky-200 p-2 rounded-md font-monts font-bold border border-sky-600'>
              Discount on next level
            </div>
          </Badge.Ribbon>
        )}
      </div>

      <div className='mt-12'>
        <div className='text-base text-justify text-white'>
          {getUserLevelData?.description}
        </div>
      </div>
    </div>
  )
}

export default UserLevel
