import { forwardRef, useImperativeHandle } from 'react'
import { notification } from 'antd'
import { SmileOutlined, MehOutlined } from '@ant-design/icons'

const CommonNotification = forwardRef(({ children }, ref) => {
  const [api, contextHolder] = notification.useNotification()
  const openNotification = ({ message, description, type }) => {
    api.open({
      message: message,
      description: description,
      role: 'status',
      placement: 'topRight',
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
  useImperativeHandle(ref, () => ({
    openNotification
  }))
  return (
    <>
      {children}
      {contextHolder}
    </>
  )
})

export default CommonNotification
