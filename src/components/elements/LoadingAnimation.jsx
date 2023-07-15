import { Spin } from 'antd'

const LoadingAnimation = ({
  children,
  tip = 'Loading...',
  size = 'large',
  loading,
  className
}) => {
  return (
    <Spin tip={tip} size={size} spinning={loading} wrapperClassName={className}>
      {children}
    </Spin>
  )
}

export default LoadingAnimation
