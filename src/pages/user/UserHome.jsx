import { useState } from 'react'
import { Typography } from 'antd'
import { CommonForm } from '../../components'
import data from '../../data/pages/bookingForm'
import CommonTable from '../../components/common/CommonTable'
import LoadingAnimation from '../../components/elements/LoadingAnimation'
import Steps from '../../components/elements/Steps'
import UserLevel from './UserLevel'
import SeatBooking from './SeatBooking'

const UserHome = () => {
  const { Title } = Typography
  const [isLoading, setIsLoading] = useState(false)
  const [bookingState, setBookingState] = useState(1)
  // temp data
  const trainSchedule = [
    {
      key: '1',
      trainName: '1030 Intercity Express - Kandy to Colombo',
      departs: '6.16 AM',
      arrives: '9.30 AM',
      trainClass: [
        { id: 1, seats: 18 }, // first class
        { id: 2, seats: 24 }, // second class
        { id: 3, seats: 36 } // third class
      ],
      availableSeats: [
        { id: 1, seats: 2 },
        { id: 2, seats: 20 },
        { id: 3, seats: 6 }
      ],
      price: [
        { id: 1, price: 3000 },
        { id: 2, price: 2000 },
        { id: 3, price: 1000 }
      ]
    },
    {
      key: '2',
      trainName: 'John',
      departs: 'Kandy',
      arrives: 'Badulla',
      trainClass: [
        { id: 1, seats: 12 }, // first class
        { id: 2, seats: 120 }, // second class
        { id: 3, seats: 50 } // third class
      ],
      availableSeats: [
        { id: 1, seats: 12 },
        { id: 2, seats: 70 },
        { id: 3, seats: 20 }
      ],
      price: [
        { id: 1, price: 3000 },
        { id: 2, price: 2000 },
        { id: 3, price: 1000 }
      ]
    },
    {
      key: '3',
      trainName: 'Sarah',
      departs: 'Colombo',
      arrives: 'Galle',
      trainClass: [
        { id: 1, seats: 30 }, // first class
        { id: 2, seats: 80 }, // second class
        { id: 3, seats: 130 } // third class
      ],
      availableSeats: [
        { id: 1, seats: 2 },
        { id: 2, seats: 70 },
        { id: 3, seats: 60 }
      ],
      price: [
        { id: 1, price: 5000 },
        { id: 2, price: 2500 },
        { id: 3, price: 800 }
      ]
    },
    {
      key: '4',
      trainName: 'David',
      departs: 'Jaffna',
      arrives: 'Colombo',
      trainClass: [
        { id: 1, seats: 18 }, // first class
        { id: 2, seats: 24 }, // second class
        { id: 3, seats: 36 } // third class
      ],
      availableSeats: [
        { id: 1, seats: 2 },
        { id: 2, seats: 20 },
        { id: 3, seats: 6 }
      ],
      price: [
        { id: 1, price: 3000 },
        { id: 2, price: 2000 },
        { id: 3, price: 1000 }
      ]
    }
  ]

  const RenderComponent = () => {
    if (bookingState === 0)
      return (
        <CommonForm
          fields={data.fields}
          onSubmit={val => {
            console.log(val)
            setIsLoading(true)
            // manipulate api call here
            setTimeout(() => {
              setBookingState(1)
              setIsLoading(false)
            }, 2000)
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
          columns={data.tableColumns(setBookingState)}
          loading={false}
          onChange={(pagination, filters, sorter, extra) => {
            console.log('params', pagination, filters, sorter, extra)
          }}
          yScroll='42vh'
        />
      )
    } else if (bookingState === 2) {
      return (
        <div className='h-[52vh] max-h-[52vh] bg-red-200 overflow-y-auto '>
          <SeatBooking />
        </div>
      )
    }
  }

  return (
    <div className='flex flex-col flex-wrap lg:flex-row items-center justify-center'>
      <div className='w-full lg:w-3/4 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-slate-50 border border-slate-300 h-screen lg:h-[60vh] backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md overflow-auto'>
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
        <div className='rounded-xl p-2 lg:p-4 bg-slate-50 border border-slate-300 w-full h-screen lg:h-[60vh] backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          <UserLevel level={1} />
        </div>
      </div>

      <div className='w-full lg:w-1/3 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-red-500 h-screen lg:h-auto backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          test
        </div>
      </div>

      <div className='w-full lg:w-2/3 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-ful h-screen lg:h-full backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          test
        </div>
      </div>
    </div>
  )
}

export default UserHome
