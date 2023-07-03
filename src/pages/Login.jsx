import { useState, useRef } from 'react'
import { Typography, Switch } from 'antd'
import data from '../data/pages/login'
import { CommonForm } from '../components'

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const { Title, Paragraph } = Typography

  const formRef = useRef(null)

  return (
    <div className='h-screen'>
      <div className='flex flex-row items-start justify-center h-full'>
        <div className='w-full lg:w-1/3 md:w-1/2 pt-[5rem]'>
          <div className='p-5 md:p-20 mx-2'>
            <Title level={1} className='text-center'>
              {isLoginForm ? data.signInText : data.signUpText}
            </Title>

            <div className='w-fit mx-auto'>
              <Switch
                defaultChecked
                checkedChildren={data.signUpText}
                unCheckedChildren={data.signInText}
                checked={isLoginForm}
                onChange={() => {
                  setIsLoginForm(!isLoginForm)
                  formRef?.current?.resetFields()
                }}
                loading={false}
                className='bg-blue-600 hover:bg-blue-600'
              />
            </div>

            {/* form */}
            <CommonForm
              {...data}
              type={isLoginForm ? 'signIn' : 'signUp'}
              requiredMark={false}
              ref={formRef}
            />

            {/* social login */}
            <Title
              level={4}
              className='text-center text-slate-800 font-bold mt-[3rem]'
            >
              or
            </Title>

            <Paragraph className='text-center text-slate-500 mt-[2rem]'>
              {data.loginWithSocialText}
            </Paragraph>

            <div className='flex items-center justify-center gap-5'>
              {data.socialLogins.map((item, idx) => (
                <div
                  key={`social_login_${idx}`}
                  onClick={item.onclick}
                  className='cursor-pointer'
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-2/3 hidden md:block bg-login h-screen'>
          <Title className='text-center pt-[8rem] login-title'>
            {data.title}
          </Title>
        </div>
      </div>
    </div>
  )
}

export default Login
