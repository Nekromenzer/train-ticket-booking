import { useState } from 'react'
import { Typography } from 'antd'
import { loginBg } from '../assets/img'
import data from '../data/pages/login'
import { CommonForm } from '../components'

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(false)
  const { Title } = Typography
  return (
    <div className='h-screen'>
      <div className='flex flex-row items-center justify-center h-full'>
        <div className='w-full md:w-1/3'>
          <div className='bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2'>
            <Title level={1} className='text-center'>
              {isLoginForm ? data.signInText : data.signUpText}
            </Title>
            <CommonForm {...data} type={isLoginForm ? 'signIn' : 'signUp'} />
            <div className='flex items-center justify-between gap-3'></div>
          </div>
        </div>
        <div className='w-full md:w-2/3 hidden md:block'>
          <img
            src={loginBg}
            alt='login background'
            className='object-cover w-full h-screen blur-[2px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Login
