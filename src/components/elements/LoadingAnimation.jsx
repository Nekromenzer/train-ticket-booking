import { Spin } from 'antd'

const LoadingAnimation = ({ children, tip = 'Loading...', size = 'large' }) => {
  return (
    <Spin tip={tip} size={size}>
      {children}
    </Spin>
  )
}

export default LoadingAnimation
