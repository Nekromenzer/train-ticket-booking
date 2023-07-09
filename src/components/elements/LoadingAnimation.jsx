import { Spin } from 'antd'

const LoadingAnimation = ({
  children,
  tip = 'Loading...',
  size = 'large',
  loading
}) => {
  return (
    <Spin tip={tip} size={size} spinning={loading}>
      {children}
    </Spin>
  )
}

export default LoadingAnimation
