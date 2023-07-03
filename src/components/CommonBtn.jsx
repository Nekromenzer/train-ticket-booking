import { Button } from 'antd'

const CommonBtn = ({
  children,
  classNames,
  type = 'primary',
  htmlType = 'button'
}) => {
  return (
    <Button
      type={type}
      htmlType={htmlType}
      className={`font-monts shadow-none  ${classNames}`}
    >
      {children}
    </Button>
  )
}

export default CommonBtn
