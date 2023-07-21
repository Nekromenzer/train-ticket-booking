/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useContext, useEffect } from 'react'
import { Typography, Switch } from 'antd'
import data from '../data/pages/login'
import { CommonForm } from '../components'
import handleApiCall from '../api/handleApiCall'
import LoadingAnimation from '../components/elements/LoadingAnimation'
import { useNavigate } from 'react-router-dom'
import authContext from '../context/AuthContext'
import ForgetPassword from './login/ForgetPassword'

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
      urlType: isLoginForm ? 'login' : 'register',
      data: formVal,
      setLoading,
      cb: (res, status) => {
        if (status === 201) {
          // redirection
          setIsAuthenticated(true)
          const userTkn = res.token
          const userData = res.user
          localStorage.setItem('userToken', userTkn)
          localStorage.setItem('userData', JSON.stringify(userData))

          if (formVal.email !== adminEmail) {
            setIsSystemAdmin(true)
            console.log(formVal.email === adminEmail, 'admin')
            return navigate('/', { replace: true })
          }
          return navigate('/admin', { replace: true })
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
        <div
          className={`w-full lg:w-1/3 xl:w-1/3 pt-[3rem] md:pt-[1rem] ${
            isLoginForm ? 'lg:pt-[8rem]' : 'lg:pt-[1rem]'
          } bg-loginMobile lg:bg-none h-screen bg-contain bg-no-repeat bg-bottom  transition-all `}
        >
          <LoadingAnimation
            loading={loading}
            tip={isLoginForm ? data.signInLoadingText : data.signUpLoadingText}
          >
            <Title className='text-center lg:hidden py-[2rem] md:pt-[1rem] md:pb-0 track-wider login-title-mobile decoration-sky-500 underline whitespace-nowrap'>
              {data.title}
            </Title>
            <div className='p-5 lg:p-8 xl:p-12  2xl:px-20 2xl:py-6 mx-2'>
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
                fields={data.fields}
                formBtnText={isLoginForm ? data.signInText : data.signUpText}
                type={isLoginForm ? 'signIn' : 'signUp'}
                requiredMark={false}
                ref={formRef}
                onSubmit={handleLogin}
                itemClassName='mb-2'
                customComponent={isLoginForm && <ForgetPassword />}
              />
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
