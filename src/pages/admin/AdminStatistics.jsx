import CommonCharts from '../../components/common/CommonCharts'
import { Badge, Tag } from 'antd'
import data from '../../data/pages/admin'

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

  const bookingData = []
  const revenueData = []

  return (
    <div className='flex flex-wrap-reverse lg:flex-wrap gap-3 items-start justify-between'>

      {data.mainCharts({ bookingData, revenueData }).map((item, idx) => (
        <div className='w-full lg:w-1/3' key={idx}>
          <Badge.Ribbon
            text={item.header}
            placement='start'
            className='mt-[-0.5rem] rounded-sm'
            color='black'
          >
            <div className='w-full rounded-lg shadow-md border-2 border-sky-500 px-4 pt-12 pb-4 cursor-pointer bg-slate-50 hover:border-sky-700'>
              <CommonCharts type={item.type} color={item.color} />
            </div>
          </Badge.Ribbon>
        </div>
      ))}

      <div className='w-full lg:w-1/4 h-auto lg:h-[calc(100vh-3rem)] p-3 flex flex-col gap-6'>
        {data.rightPanel.map((item, idx) => (
          <div
            className={`w-full ${
              item.type === 'liq-chart' ? 'h-[25rem]' : 'h-[8rem] lg:h-[7rem]'
            } p-2 rounded-lg bg-neutral-800 border-2 hover:border-yellow-500 hover:shadow-md duration-500 cursor-pointer`}
            key={idx}
          >
            <Header>{item.header}</Header>
            <Description>{item.description}</Description>

            {item.type === 'tags' && (
              <div className='flex justify-start items-center gap-2 flex-wrap'>
                {item.tags.map((tag, id) => (
                  <Tag color={tag.color} key={id}>
                    {tag.name}
                  </Tag>
                ))}
              </div>
            )}

            {item.type === 'liq-chart' && (
              <CommonCharts
                type='progress-liquid'
                percent={item.props.percent}
                height={item.props.height}
              />
            )}
          </div>
        ))}
      </div>
  
    </div>
  )
}

export default AdminStatistics