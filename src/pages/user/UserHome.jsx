import { Typography } from 'antd'
import { CommonForm } from '../../components'
import data from '../../data/pages/bookingForm'

const UserHome = () => {
  const { Title } = Typography
  return (
    <div className='flex flex-col flex-wrap lg:flex-row items-center justify-center'>
      <div className=' w-full lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-sky-100/30 h-screen lg:h-auto lg:max-h-[50vh] backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          <Title level={3}>{data.formHeader}</Title>
          <CommonForm
            fields={data.fields}
            onSubmit={val => console.log(val)}
            formItemClassName='w-full lg:w-1/2 p-2 booking-form-item lg:h-[5.5rem]'
            className='flex lg:flex-row flex-wrap items-center justify-between'
            name='booking-form'
            formBtnText={data.formBtnText}
            btnWrapperClassName='w-full lg:w-1/2 item-end lg:ml-auto lg:h-22 lg:h-[5.5rem] booking-form-item lg:pt-[2.3rem] px-2'
            btnClassName='lg:mt-auto'
          />
        </div>
      </div>
      <div className='w-full lg:w-1/3 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-red-500 h-screen lg:h-auto backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          test
        </div>
      </div>
      <div className='w-full lg:w-2/3 lg:p-4 p-2'>
        <div className='rounded-xl p-2 lg:p-4 bg-red w-full bg-blue-500 h-screen lg:h-full backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          test
        </div>
      </div>
    </div>
  )
}

export default UserHome
