import { Form, Input } from 'antd'
import CommonBtn from './CommonBtn'

const CommonForm = props => {
  const {
    fields,
    name,
    layout = 'vertical',
    className,
    type,
    signInText,
    signUpText,
    formBtnText
  } = props

  const renderInput = (fieldType, placeholder) => {
    return fieldType === 'password' ? (
      <Input.Password placeholder={placeholder} />
    ) : (
      <Input placeholder={placeholder} />
    )
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
      hasFeedback={item.hasFeedback}
      className='my-8'
    >
      {renderInput(item.type, item.placeholder)}
    </Form.Item>
  ))

  return (
    <Form name={name} layout={layout} className={className}>
      {formItems}
      <Form.Item>
        <CommonBtn
          type='primary'
          htmlType='submit'
          classNames='w-full mt-4 bg-blue-400 font-bold'
        >
          {name === 'login'
            ? type === 'signIn'
              ? signInText
              : signUpText
            : formBtnText}
        </CommonBtn>
      </Form.Item>
    </Form>
  )
}

export default CommonForm
