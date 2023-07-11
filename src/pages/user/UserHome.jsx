import { useState } from 'react'
import { Typography } from 'antd'
import { CommonForm } from '../../components'
import data from '../../data/pages/bookingForm'
import CommonTable from '../../components/common/CommonTable'
import LoadingAnimation from '../../components/elements/LoadingAnimation'
import Steps from '../../components/elements/Steps'

const UserHome = () => {
  const { Title } = Typography
  const [isLoading, setIsLoading] = useState(false)
  const [bookingState, setBookingState] = useState(0)
  // temp data
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    },
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    },
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    },
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    },
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    },
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    },
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    },
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
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
          btnWrapperClassName='w-full lg:w-1/2 item-end lg:ml-auto lg:h-22 lg:h-[5.5rem] booking-form-item lg:pt-[2.3rem] px-2'
          btnClassName='lg:mt-auto'
        />
      )
    else if (bookingState === 1) {
      return (
        <CommonTable
          dataSource={dataSource}
          columns={data.tableColumns}
          loading={false}
          onChange={(pagination, filters, sorter, extra) => {
            console.log('params', pagination, filters, sorter, extra)
          }}
        />
      )
    }
  }

  return (
    <div className='flex flex-col flex-wrap lg:flex-row items-center justify-center'>
      <div className='w-full lg:w-3/4 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-slate-50 h-screen lg:h-[60vh] backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md overflow-auto'>
          {bookingState === 0 ? (
            <Title level={3}>{data.formHeader}</Title>
          ) : (
            <Steps
              current={bookingState}
              setCurrent={setBookingState}
              items={data.steps}
            />
          )}
          <LoadingAnimation loading={isLoading}>
            <RenderComponent />
          </LoadingAnimation>
        </div>
      </div>

      <div className='w-full lg:w-1/4 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-red-500 h-screen lg:h-auto backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          test
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
