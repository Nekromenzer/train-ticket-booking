/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useContext, useEffect } from 'react'
import { Typography, Switch } from 'antd'
import data from '../data/pages/login'
import { CommonForm } from '../components'
import handleApiCall from '../api/handleApiCall'
import LoadingAnimation from '../components/elements/LoadingAnimation'
import { useNavigate } from 'react-router-dom'
import authContext from '../context/AuthContext'

const loggedUserEmail = localStorage.getItem('train_user_email')
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
const isAdmin = adminEmail === loggedUserEmail

const Login = () => {
  const [isAuthenticated, setIsAuthenticated, setIsSystemAdmin] =
    useContext(authContext)
  const navigate = useNavigate()
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [loading, setLoading] = useState(false)
  const { Title } = Typography

  const formRef = useRef(null)
  const handleLogin = formVal => {
    localStorage.setItem('train_user_email', formVal.email)
    handleApiCall({
      urlType: 'login',
      data: formVal,
      setLoading,
      cb: (res, status) => {
        if (status === 200) {
          // redirection
          console.log(res, 'success')
        }
        // for test
        if (status == 'Network Error') {
          setIsAuthenticated(true)
          const userTkn = 'dsabuydgbuays-213213213-123123bhisdubfibsdfbis'
          localStorage.setItem('userToken', userTkn)
          if (formVal.email === adminEmail) {
            setIsSystemAdmin(true)
            return navigate('/admin', { replace: true })
          } else return navigate('/', { replace: true })
        }
      }
    })
  }

  useEffect(() => {
    if (isAuthenticated) {
      if (isAdmin) {
        navigate('/admin', { replace: true })
      } else {
        navigate('/', { replace: true })
      }
    }
    return
  }, [isAdmin, isAuthenticated, navigate])

  return (
    <div className='h-screen'>
      <div className='flex flex-row items-start justify-center h-full'>
        <div className='w-full lg:w-1/3 xl:w-1/3 pt-[3rem] md:pt-[1rem] lg:pt-[8rem] bg-loginMobile lg:bg-none h-screen bg-contain bg-no-repeat bg-bottom '>
          <LoadingAnimation
            loading={loading}
            tip={isLoginForm ? data.signInLoadingText : data.signUpLoadingText}
          >
            <Title className='text-center lg:hidden py-[2rem] md:pt-[1rem] md:pb-0 track-wider login-title-mobile decoration-sky-500 underline whitespace-nowrap'>
              {data.title}
            </Title>
            <div className='p-5 lg:p-8 xl:p-12 2xl:p-20 mx-2'>
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
                  disabled={loading}
                />
              </div>

              {/* form */}
              <CommonForm
                {...data}
                type={isLoginForm ? 'signIn' : 'signUp'}
                requiredMark={false}
                ref={formRef}
                onSubmit={handleLogin}
              />

              {/* social login */}
              {/* <Title
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
            </div> */}
            </div>
          </LoadingAnimation>
        </div>
        <div className='w-full lg:w-2/3 xl:w-2/3 hidden lg:block bg-login h-screen'>
          <Title className='text-center xl:pt-[10rem] 2xl:pt-[12rem] lg:pt-[18rem] lg:lg-login-title xl:xl-login-title 2xl:login-title'>
            {data.title}
          </Title>
        </div>
      </div>
    </div>
  )
}

export default Login
