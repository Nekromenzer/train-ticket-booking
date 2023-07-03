import { Form, Input } from 'antd'

const CommonForm = props => {
  const { fields, name, layout = 'vertical', className, type } = props

  const renderInput = fieldType => {
    return fieldType === 'password' ? <Input.Password /> : <Input />
  }

  const renderItemsInArray = () => {
    return type === 'signIn' ? 2 : fields.length
  }

  const formItems = fields.slice(0, renderItemsInArray()).map((item, idx) => (
    <Form.Item
      key={`form_${name}_${idx}`}
      label={item.label}
      name={item.name}
      rules={item.rules}
    >
      {renderInput(item.type)}
    </Form.Item>
  ))

  return (
    <Form name={name} layout={layout} className={className}>
      {formItems}
    </Form>
  )
}

export default CommonForm
