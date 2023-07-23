import { Calendar, Badge, Drawer } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
import CommonTag from './CommonTag'

const CommonCalender = ({ getListData, headerText, originalData }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedData, setSelectedData] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')

  const dateCellRender = value => {
    const listData = getListData(value)
    return (
      <ul className='events'>
        {listData.map((item, idx) => (
          <li key={idx}>
            <Badge
              status='success'
              text={
                <span className='text-[0.7rem] subpixel-antialiased '>
                  {item.train} -{' '}
                  <span className=' italic '>
                    {item.train_schedule.location?.name} to{' '}
                    {item.train_schedule.location_to?.name}
                  </span>
                </span>
              }
              size='small'
            />
          </li>
        ))}
      </ul>
    )
  }

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current)
    return info.originNode
  }

  const handleClickDate = date => {
    setDrawerOpen(true)
    const formatDate = [dayjs(date).format('DD')]
    const selectedData = originalData[formatDate]
    setSelectedDate(date)
    setSelectedData(selectedData)
    console.log(selectedData)
  }

  return (
    <>
      <Drawer
        title={`Bookings on ${dayjs(selectedDate).format('DD MMMM YYYY')}`}
        placement='right'
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        headerStyle={{ backgroundColor: '#f0f2f5' }}
        maskStyle={{ backgroundColor: 'black', opacity: '0.8' }}
        size='large'
      >
        <div className='flex flex-row gap-6 flex-wrap'>
          {selectedData !== null &&
            selectedData?.map((item, idx) => (
              <div
                key={idx}
                className='flex justify-between items-center bg-sky-100 rounded-lg px-3 py-2 w-full shadow-md flex-wrap gap-3'
              >
                <h3 className='text-base font-bold'>
                  {idx + 1}.{''} {item.train}
                </h3>
                <p className='text-sm'>
                  {item.train_schedule.location?.name} to{' '}
                  {item.train_schedule.location_to?.name}
                </p>

                <div className='w-full bg-sky-50 p-2 rounded-md flex flex-col gap-2'>
                  <div className='text-sm antialiased flex'>
                    <span className='w-[9rem] text-sm'>Departure date: </span>
                    <span className='text-sm'>
                      {dayjs(item.train_schedule.departure_time).format(
                        'YYYY-MM-DD'
                      )}
                    </span>
                  </div>

                  <div className='antialiased flex '>
                    <span className='w-[9rem] text-sm'>Arrival date:</span>{' '}
                    <span className='text-sm'>
                      {dayjs(item.train_schedule.arrival_time).format(
                        'YYYY-MM-DD'
                      )}
                    </span>
                  </div>

                  <div className='antialiased flex '>
                    <CommonTag
                      item={{id:item.class_id}}
                      type='class'
                      customClassnames='mr-0'
                      seatCount={item.reservation_seats.length}
                      seatNameTag={false}
                    />
                  </div>
                </div>

                <p className='text-[0.8rem] ml-auto text-sky-600'>
                  Last updated :{' '}
                  {dayjs(item.updated_at).format('YYYY/MM/DD - h:mm A')}
                </p>
              </div>
            ))}
        </div>
      </Drawer>
      <Calendar
        cellRender={cellRender}
        mode='month'
        onSelect={value => handleClickDate(value)}
        headerRender={() => (
          <h3 className='text-xl mb-16 mt-4 font-bold '>{headerText}</h3>
        )}
      />
    </>
  )
}

export default CommonCalender
