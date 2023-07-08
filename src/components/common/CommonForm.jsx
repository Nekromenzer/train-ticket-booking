import { forwardRef, useImperativeHandle } from 'react'
import { Form, Input } from 'antd'
import CommonBtn from './CommonBtn'

const CommonForm = forwardRef((props, ref) => {
  const {
    fields,
    name,
    layout = 'vertical',
    className,
    type,
    signInText,
    signUpText,
    formBtnText,
    onSubmit = val => {
      console.log(val)
    },
    preserve = false,
    requiredMark
  } = props

  const [form] = Form.useForm()

  const renderInput = (fieldType, placeholder, autoComplete) => {
    return fieldType === 'password' ? (
      <Input.Password placeholder={placeholder} autoComplete={autoComplete} />
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
      {renderInput(item.type, item.placeholder, item.autoComplete)}
    </Form.Item>
  ))

  const onFinish = values => {
    onSubmit(values)
  }

  const resetFields = () => {
    form.resetFields()
  }

  useImperativeHandle(ref, () => ({
    resetFields
  }))

  return (
    <Form
      name={name}
      layout={layout}
      className={className}
      form={form}
      onFinish={onFinish}
      preserve={preserve}
      requiredMark={requiredMark}
    >
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
})

export default CommonForm
