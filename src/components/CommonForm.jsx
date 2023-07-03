import React from 'react'
import { Form, Input } from 'antd'

const CommonForm = props => {
  const { fields, name, layout, className } = props

  const renderInput = type => {
    if (type === 'password') {
      return <Input.Password />
    }
    return <Input />
  }

  console.log(props)
  return (
    <Form name={name} layout={layout} className={className}>
      {fields.map((item, idx) => (
        <Form.Item
          key={`form_${name}_${idx}`}
          label={item.label}
          name={item.name}
          rules={item.rules}
        >
          {renderInput(item.type)}
        </Form.Item>
      ))}
    </Form>
  )
}

export default CommonForm
