import React from 'react'
import { Steps as AntdSteps } from 'antd'

const Steps = ({ current, setCurrent }) => {
  const onChange = value => {
    console.log('onChange:', value)
    setCurrent(value)
  }
  return (
    <AntdSteps
      current={current}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.'
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
          subTitle: 'Left 00:00:08'
        },
        {
          title: 'Waiting',
          description: 'This is a description.'
        }
      ]}
      onChange={onChange}
    />
  )
}

export default Steps
