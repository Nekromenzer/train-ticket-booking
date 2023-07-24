import CommonCharts from '../../components/common/CommonCharts'
import { Badge, Tag, Space } from 'antd'

const AdminStatistics = () => {
  const Header = ({ children }) => (
    <div className='text-[1.2rem] font-monts mb-0 text-left text-white'>
      {children}
    </div>
  )

  const Description = ({ children }) => (
    <div className='text-[0.8rem]  mb-2 text-left text-slate-400'>
      {children}
    </div>
  )

  return (
    <div className='flex flex-wrap gap-3 items-start justify-between'>
      <div className='w-full lg:w-1/3 group'>
        <Badge.Ribbon
          text='Total bookings per month'
          placement='start'
          className='mt-[-0.5rem] rounded-sm'
          color='black'
        >
          <div className='w-full rounded-lg shadow-md border-2 border-sky-500 px-4 pt-12 pb-4 cursor-pointer bg-slate-50 hover:border-sky-700'>
            <CommonCharts type='col' />
          </div>
        </Badge.Ribbon>
      </div>
      <div className='w-full lg:w-1/3 group'>
        <Badge.Ribbon
          text='Total revenue per month'
          placement='start'
          className='mt-[-0.5rem] rounded-sm'
          color='black'
        >
          <div className='w-full rounded-lg shadow-md border-2 border-sky-500 px-4 pt-12 pb-4 cursor-pointer bg-slate-50 hover:border-sky-700'>
            <CommonCharts type='area' color='#16a34a' />
          </div>
        </Badge.Ribbon>
      </div>
      <div className='bg-white rounded-md shadow-lg w-full lg:w-1/4 h-auto lg:h-[calc(100vh-3rem)] border border-black/10 p-3 flex flex-col  gap-6'>
        <div className='w-full h-[7rem] p-2 rounded-lg bg-neutral-800 border-2 hover:border-yellow-500 hover:shadow-md duration-500 cursor-pointer '>
          <Header>Top 3 routes</Header>
          <Description>Most used routes all the time</Description>
          <div className='flex justify-start items-center gap-2'>
            <Tag color='green'>Kandy - Badulla</Tag>
            <Tag color='red'>Colombo - Kandy</Tag>
            <Tag color='blue'>Badulla - Ella</Tag>
          </div>
        </div>

        <div className='w-full h-[7rem] p-2 rounded-lg bg-neutral-800 border-2 hover:border-yellow-500 hover:shadow-md duration-500 cursor-pointer '>
          <Header>Top 3 Destinations</Header>
          <Description>Most famous destination</Description>
          <div className='flex justify-start items-center gap-4'>
            <Tag color='green'>Kandy</Tag>
            <Tag color='red'>Colombo</Tag>
            <Tag color='blue'>Galle</Tag>
          </div>
        </div>

        <div className='w-full h-[25rem] p-2 rounded-lg bg-neutral-800 border-2 hover:border-yellow-500 hover:shadow-md duration-500 cursor-pointer '>
          <Header>Progress</Header>
          <Description>Revenue Increase compare to last month</Description>
          <CommonCharts type='progress-liquid' percent={0.45} height={20} />
        </div>
      </div>
    </div>
  )
}

export default AdminStatistics
