import CommonCharts from '../../components/common/CommonCharts'
import { Badge, Tag } from 'antd'
import data from '../../data/pages/admin'
import CommonTag from '../../components/common/CommonTag'
import AdminStatisticsCompare from './AdminStatisticsCompare'

const AdminStatistics = ({
  statistics,
  totalUsers,
  totalSchedules,
  totalReservations
}) => {
  const Header = ({ children }) => (
    <div className='text-[1.2rem] mb-0 text-left text-white font-roboto'>
      {children}
    </div>
  )

  const Description = ({ children }) => (
    <div className='text-[0.8rem]  mb-2 text-left text-slate-400'>
      {children}
    </div>
  )

  const bookingData = statistics?.monthly_bookings
  const revenueData = statistics?.monthly_income

  const calculateRevenueIncreasePercentage = ({
    previousMonthRevenue,
    currentMonthRevenue
  }) => {
    if (
      previousMonthRevenue === 0 &&
      (!revenueData || revenueData.length === 0)
    ) {
      return '0'
    }
    const revenueIncrease = currentMonthRevenue - previousMonthRevenue
    const revenueIncreasePercentage =
      (revenueIncrease / previousMonthRevenue) * 100
    return revenueIncreasePercentage / 1000
  }

  const countSchedules = statistics?.most_used_schedule?.reduce(
    (acc, entry) => {
      acc[entry.schedule] = (acc[entry.schedule] || 0) + 1
      return acc
    },
    {}
  )

  const sortedSchedules =
    countSchedules &&
    Object?.entries(countSchedules)
      ?.sort((a, b) => b[1] - a[1])
      ?.map(entry => entry[0])
      .slice(0, 3)

      
  return (
    <div className='flex flex-wrap-reverse lg:flex-wrap items-start justify-between'>
      <div className='w-full lg:w-3/4 flex flex-wrap justify-between items-center gap-3'>
        {data.mainCharts({ bookingData, revenueData }).map((item, idx) => (
          <div className='w-full lg:w-[49%]' key={idx}>
            <Badge.Ribbon
              text={item.header}
              placement='start'
              className='mt-[-0.5rem] rounded-sm'
              color='black'
            >
              <div className='w-full rounded-lg shadow-md border-2 border-sky-500 px-4 pt-12 pb-4 cursor-pointer bg-slate-50 hover:border-sky-700'>
                <CommonCharts
                  type={item.type}
                  color={item.color}
                  data={item.data}
                  xField={item.xField}
                  yField={item.yField}
                />
              </div>
            </Badge.Ribbon>
          </div>
        ))}
        <div className='w-full  h-auto '>
          <AdminStatisticsCompare
            bookingData={bookingData}
            revenueData={revenueData}
          />
        </div>
      </div>

      <div className='w-full lg:w-1/4 h-auto lg:h-[calc(100vh-3rem)] p-3 flex flex-col gap-3'>
        {data?.rightPanel?.map((item, idx) => (
          <div
            className={`w-full ${
              item.type === 'liq-chart'
                ? 'h-[20rem]'
                : item.type === 'common-tags'
                ? 'h-[14rem]'
                : 'h-[8rem] lg:h-[7rem]'
            } p-2 rounded-lg bg-neutral-800 border-2 hover:border-yellow-500 hover:shadow-md duration-500 cursor-pointer ${
              item.class
            }`}
            key={idx}
          >
            <Header>{item.header}</Header>
            <Description>{item.description}</Description>

            {item.type === 'tags' && (
              <div className='flex justify-start items-center gap-2 flex-wrap'>
                {item
                  ?.tags({ routes: sortedSchedules, destinations: [] })
                  .map((tag, id) => (
                    <Tag color={item.color} key={id}>
                      {tag}
                    </Tag>
                  ))}
              </div>
            )}

            {item.type === 'common-tags' && (
              <div className='flex justify-start items-center gap-2 flex-wrap'>
                {item?.tags &&
                  item
                    ?.tags({
                      routes: sortedSchedules,
                      destinations:
                        statistics?.most_used_class &&
                        Object.entries(statistics?.most_used_class).map(
                          ([month, info]) => ({
                            month,
                            id: info.class_id,
                            available_count: info.no_of_bookings
                          })
                        )
                    })
                    ?.slice(-4)
                    .map((tag, id) => (
                      <div className='flex w-full gap-3' key={id}>
                        <span className='text-slate-50'>{tag.month}</span>
                        <CommonTag
                          key={id}
                          item={tag}
                          type='class'
                          onlyClassName
                        />
                      </div>
                    ))}
              </div>
            )}

            {item.type === 'liq-chart' && (
              <CommonCharts
                type='progress-liquid'
                percent={
                  item.props({
                    percentage: calculateRevenueIncreasePercentage({
                      previousMonthRevenue:
                        revenueData &&
                        revenueData[revenueData.length - 2]?.total,
                      currentMonthRevenue:
                        revenueData &&
                        revenueData[revenueData.length - 1]?.total
                    })
                  }).percent
                }
                height={item.props({}).height}
              />
            )}
            {item.type === 'stats' && (
              <div className='flex'>
                <div className='flex flex-col gap-3 w-2/3'>
                  {item
                    ?.stats({
                      users: totalUsers,
                      bookings: totalReservations,
                      schedules: totalSchedules
                    })
                    ?.map((stat, id) => (
                      <Badge
                        key={id}
                        count={stat.amount}
                        size='small'
                        overflowCount={999}
                        color={stat.color}
                      >
                        <div className='w-full min-w-[13rem] min-h-[2rem] rounded-md bg-white border-black/10 px-2 py-1 flex gap-2 items-center justify-between'>
                          <span className='text-[0.8rem]'>{stat.name}</span>
                        </div>
                      </Badge>
                    ))}
                </div>
                <div className='flex items-center justify-end lg:justify-center w-1/3'>
                  <img
                    src={item.imgUrl}
                    width={50}
                    height={50}
                    className='animate-spin motion-reduce:animate-spin delay-700 duration-1000'
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminStatistics
