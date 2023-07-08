import { forwardRef, useImperativeHandle } from 'react'
import { Form, Input, AutoComplete, DatePicker } from 'antd'
import CommonBtn from './CommonBtn'

const CommonForm = forwardRef((props, ref) => {
  const {
    fields,
    name,
    layout = 'vertical',
    className,
    type = 'other',
    signInText,
    signUpText,
    formBtnText,
    onSubmit = val => {
      console.log(val)
    },
    preserve = false,
    requiredMark,
    formItemClassName = 'my-8',
    inputClassName = 'w-full',
    btnClassName,
    btnWrapperClassName
  } = props

  const [form] = Form.useForm()

  const renderInput = (item, className) => {
    const { type, placeholder, autoComplete, options, allowClear, autoFocus } =
      item
    if (type === 'password') {
      return (
        <Input.Password placeholder={placeholder} autoComplete={autoComplete} />
      )
    }
    if (type === 'autocomplete') {
      return (
        <AutoComplete
          options={options}
          placeholder={placeholder}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          allowClear={allowClear}
          autoFocus={autoFocus}
          className={className}
        />
      )
    }
    if (type === 'date') {
      return <DatePicker placeholder={placeholder} className={className} />
    }
    return <Input placeholder={placeholder} className={className} />
  }

  const renderItemsInArray = () => {
    return type === 'signIn' ? 2 : fields.length
  }

  const formItems = fields?.slice(0, renderItemsInArray()).map((item, idx) => (
    <Form.Item
      key={`form_${name}_${idx}`}
      label={item.label}
      name={item.name}
      rules={item.rules}
      hasFeedback={item.hasFeedback}
      className={formItemClassName}
    >
      {renderInput(item, inputClassName)}
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
      <Form.Item className={btnWrapperClassName}>
        <CommonBtn
          type='primary'
          htmlType='submit'
          classNames={`w-full mt-4 bg-blue-400 font-bold ${btnClassName}`}
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
