import { Steps as AntdSteps } from 'antd'

const Steps = ({ current, setCurrent, items }) => {
  const onChange = value => {
    if (value <= current) {
      setCurrent(value)
    }
  }
  return (
    <AntdSteps
      size='small'
      current={current}
      items={items}
      onChange={onChange}
      rootClassName='mb-4'
    />
  )
}

export default Steps
