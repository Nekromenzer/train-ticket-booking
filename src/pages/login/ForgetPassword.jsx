import { Modal, notification } from 'antd'
import { useState } from 'react'
import { CommonForm } from '../../components'
import data from '../../data/pages/login'
import LoadingAnimation from '../../components/elements/LoadingAnimation'
import handleApiCall from '../../api/handleApiCall'
import { SmileOutlined, MehOutlined } from '@ant-design/icons'

const ForgetPassword = () => {
  const { forgetPassword } = data
  const [modalVisible, setModalVisible] = useState(false)
  const [api, contextHolder] = notification.useNotification()
  const [stepTwo, setStepTwo] = useState(false)
  const [loading, setLoading] = useState(false)
  const [verifyToken, setVerifyToken] = useState('')

  const openNotification = ({ message, description, type }) => {
    api.open({
      message: message,
      description: description,
      role: 'status',
      icon:
        type !== 'error' ? (
          <SmileOutlined
            style={{
              color: '#108ee9'
            }}
          />
        ) : (
          <MehOutlined
            style={{
              color: 'red'
            }}
          />
        )
    })
  }

  return (
    <div>
      <Modal
        title={forgetPassword.subTitle}
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false)
          setStepTwo(false)
        }}
        maskStyle={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
        okButtonProps={{
          className: 'bg-blue-500 shadow-none'
        }}
        footer={null}
        maskClosable={false}
      >
        {contextHolder}
        <LoadingAnimation
          loading={loading}
          tip={
            stepTwo
              ? forgetPassword.stepTwoLoadingText
              : forgetPassword.stepOneLoadingText
          }
        >
          <CommonForm
            fields={forgetPassword.fields({ emailDisabled: stepTwo })}
            type={stepTwo ? ' ' : 'signIn'}
            requiredMark={false}
            onSubmit={val => {
              setLoading(true)
              // send verification code
              if (!stepTwo) {
                handleApiCall({
                  urlType: 'forgetPassword',
                  data: val,
                  setLoading,
                  cb: res => {
                    if (res.request.status === 200) {
                      setStepTwo(true)
                      openNotification({
                        type: 'success',
                        message: 'Enter new password',
                        description: 'Enter new password to reset your password'
                      })
                      // need to check
                      setVerifyToken(res?.token)
                    } else {
                      openNotification({
                        type: 'error',
                        message: 'Something went wrong',
                        description: 'Please try again later!'
                      })
                    }
                  }
                })
                // get verification code
              } else {
                handleApiCall({
                  urlType: 'resetPassword',
                  data: {
                    email: val.email,
                    password: val.passwordForget,
                    token: verifyToken
                  },
                  setLoading,
                  cb: (res, state) => {
                    if (state === 200) {
                      handleApiCall({
                        urlType: 'verifyToken',
                        data: { email: val.email },
                        cb: (res, state) => {
                          if (state === 200) {
                            setModalVisible(false)
                            setStepTwo(false)
                            openNotification({
                              type: 'success',
                              message: 'Login now',
                              description: 'Login now with your new password'
                            })
                          }
                        }
                      })
                    } else {
                      openNotification({
                        type: 'error',
                        message: 'Something went wrong',
                        description: 'Please try again later!'
                      })
                    }
                  }
                })
              }
            }}
            itemClassName='mb-2'
            formBtnText={
              stepTwo
                ? forgetPassword.stepTwoFormBtnText
                : forgetPassword.stepOneFormBtnText
            }
          />
        </LoadingAnimation>
      </Modal>
      <div
        className='text-right text-[0.8rem] text-blue-700 cursor-pointer hover:text-blue-900'
        onClick={() => setModalVisible(true)}
      >
        {forgetPassword.title}
      </div>
    </div>
  )
}

export default ForgetPassword
