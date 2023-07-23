import { useState } from 'react'
import { Typography } from 'antd'
import { CommonForm } from '../../components'
import data from '../../data/pages/bookingForm'
import dayjs from 'dayjs'
import CommonTable from '../../components/common/CommonTable'
import LoadingAnimation from '../../components/elements/LoadingAnimation'
import Steps from '../../components/elements/Steps'
import UserLevel from './UserLevel'
import SeatBooking from './SeatBooking'
import Payment from './Payment'
import handleApiCall from '../../api/handleApiCall'
import NewsSections from './NewsSections'

const UserHome = ({ stations }) => {
  const { Title } = Typography
  const [searchVal, setSearchVal] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [bookingState, setBookingState] = useState(1)
  // selected train
  const [selectedTrain, setSelectedTrain] = useState(null)
  // user level
  const [userLevel, setUserLevel] = useState(2)
  // temp data
  const trainSchedule1 = [
    {
      key: 1,
      train_id: 2,
      from: 'Kandy',
      to: 'Badulla',
      routes_id: 1,
      departure_time: '2023-07-30 19:36:47',
      arrival_time: '2023-07-30 20:53:15',
      train_name: 'Podi Menike',
      schedule_price: [
        {
          id: 1,
          schedule_id: 1,
          class_id: 1,
          price: 1384
        },
        {
          id: 2,
          schedule_id: 1,
          class_id: 2,
          price: 544
        },
        {
          id: 3,
          schedule_id: 1,
          class_id: 3,
          price: 144
        }
      ],
      schedule_seats: [
        {
          id: 1,
          schedule_id: 1,
          class_id: 1,
          available_count: 15
        },
        {
          id: 2,
          schedule_id: 1,
          class_id: 2,
          available_count: 20
        },
        {
          id: 3,
          schedule_id: 1,
          class_id: 3,
          available_count: 20
        }
      ]
    }
  ]
  // train schedule table
  const [trainSchedule, setTrainSchedule] = useState(trainSchedule1)

  const RenderComponent = () => {
    if (bookingState === 0)
      return (
        <CommonForm
          fields={data.fields(stations)}
          onSubmit={val => {
            setSearchVal(val)
            setIsLoading(true)
            handleApiCall({
              variant: 'userDashboard',
              urlType: 'search',
              data: {
                from: val.from,
                to: val.to,
                date: dayjs(val.departureDate).format('YYYY-MM-DD')
              },
              setLoading: setIsLoading,
              cb: (data, state) => {
                if (state === 200) {
                  const mappedTableData = data?.map(item => ({
                    key: item.id,
                    ...item
                  }))

                  setTrainSchedule(mappedTableData)
                  setBookingState(1)
                }
              }
            })
          }}
          formItemClassName='w-full lg:w-1/2 p-2 booking-form-item lg:h-[5.5rem]'
          className='flex lg:flex-row flex-wrap items-center justify-between'
          name='booking-form'
          formBtnText={data.formBtnText}
          btnWrapperClassName='w-full lg:w-1/2 item-end lg:ml-auto lg:h-22 lg:h-[5.5rem] booking-form-item lg:pt-[1.93rem] px-2'
          btnClassName='lg:mt-auto'
        />
      )
    else if (bookingState === 1) {
      return (
        <CommonTable
          dataSource={trainSchedule}
          columns={data.tableColumns(setBookingState, setSelectedTrain)}
          loading={false}
          onChange={(pagination, filters, sorter, extra) => {
            console.log('params', pagination, filters, sorter, extra)
          }}
          yScroll='42vh'
        />
      )
    } else if (bookingState === 2) {
      return (
        <div className='h-[54vh] max-h-[54vh] overflow-y-auto '>
          <SeatBooking
            selectedTrain={selectedTrain}
            noOfPassengers={searchVal?.passengers}
            level={userLevel}
            setBookingState={setBookingState}
          />
        </div>
      )
    } else if (bookingState === 3) {
      return (
        <div className='h-[52vh] max-h-[52vh] overflow-y-auto '>
          <Payment setBookingState={setBookingState} searchVal={searchVal} />
        </div>
      )
    }
  }

  return (
    <div className='flex flex-col flex-wrap lg:flex-row items-center justify-center'>
      <div className='w-full lg:w-3/4 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-slate-50 border border-slate-300 h-screen lg:h-[62vh] backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md overflow-auto'>
          {bookingState === 0 ? (
            <Title level={3}>{data.formHeader}</Title>
          ) : (
            <Steps
              current={bookingState}
              setCurrent={setBookingState}
              items={data.steps}
            />
          )}
          <LoadingAnimation
            loading={isLoading}
            tip={bookingState === 0 ? 'Searching train....' : 'Loading'}
          >
            <RenderComponent />
          </LoadingAnimation>
        </div>
      </div>

      <div className='w-full lg:w-1/4 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-gradient-to-r from-blue-500 to-sky-500 w-full h-screen lg:h-[60vh] backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          <UserLevel level={userLevel} />
        </div>
      </div>

      <div className='w-full lg:w-1/3 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-red-500 h-screen lg:h-auto backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          test
        </div>
      </div>

      <div className='w-full lg:w-2/3 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 w-full h-screen lg:h-full shadow '>
          <NewsSections />
        </div>
      </div>
    </div>
  )
}

export default UserHome
