import { CommonForm } from '../../components'
import data from '../../data/pages/bookingForm'

const UserHome = () => {
  return (
    <div className='flex flex-col flex-wrap lg:flex-row items-center justify-center'>
      <div className=' w-full lg:w-2/3 lg:p-4 p-2'>
        <div className='rounded-lg p-2 lg:p-4 bg-red w-full bg-white h-screen lg:h-[50vh] backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          <CommonForm
            fields={data.fields}
            onSubmit={val => console.log(val)}
            formItemClassName='w-full lg:w-1/2 p-2 booking-form-item lg:h-22'
            className='flex lg:flex-row flex-wrap items-center justify-between'
            name='booking-form'
            formBtnText={data.formBtnText}
            btnWrapperClassName='w-full lg:w-1/2 item-end lg:ml-auto lg:h-22 booking-form-item lg:mt-[1.8rem] px-2'
            btnClassName='lg:mt-auto'
          />
        </div>
      </div>
      <div className='bg-green-400 w-full lg:w-1/3 lg:p-4 p-2'>
        <div className='rounded-lg p-2 lg:p-4 bg-red w-full bg-white h-screen lg:h-[50vh] backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          test
        </div>
      </div>
      <div className='bg-blue-400 w-full lg:p-4 p-2'>
        <div className='rounded-lg p-2 lg:p-4 bg-red w-full bg-white h-screen lg:h-full backdrop-blur-lg backdrop-opacity-50 shadow drop-shadow-md'>
          test
        </div>
      </div>
    </div>
  )
}

export default UserHome
