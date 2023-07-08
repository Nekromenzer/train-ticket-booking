import { Button } from 'antd'

const CommonBtn = props => {
  const { children, classNames, type = 'primary', htmlType = 'button' } = props
  return (
    <Button
      type={type}
      htmlType={htmlType}
      className={`font-monts shadow-none  ${classNames}`}
      {...props}
    >
      {children}
    </Button>
  )
}

export default CommonBtn
