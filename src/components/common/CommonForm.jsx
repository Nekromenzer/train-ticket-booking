import { forwardRef, useImperativeHandle, useState } from 'react'
import {
  Form,
  Input,
  AutoComplete,
  DatePicker,
  TimePicker,
  InputNumber,
  Switch,
  Tooltip,
  Radio,
  Select,
  Checkbox 
} from 'antd'
import CommonBtn from './CommonBtn'

const CommonForm = forwardRef((props, ref) => {
  const {
    fields,
    name,
    layout = 'vertical',
    className,
    type = 'other',
    formBtnText,
    onSubmit = val => {
      console.log(val)
    },
    preserve = false,
    requiredMark,
    formItemClassName = 'my-4',
    inputClassName = 'w-full',
    btnClassName,
    btnWrapperClassName,
    itemClassName,
    onValChangeCallback = () => {},
    customComponent,
    noSubmitBtn
  } = props

  const [form] = Form.useForm()
  const [checked, setChecked] = useState(false)
  const [radioGroupValue, setRadioGroupValue] = useState(1)

  const renderInput = (item, className) => {
    const {
      type,
      placeholder,
      autoComplete,
      options,
      allowClear,
      autoFocus,
      format,
      showToday,
      minuteStep,
      min,
      max,
      disabledDate,
      defaultChecked,
      unCheckedChildren,
      checkedChildren,
      defaultValue,
      optionType,
      formatter,
      disabled,
      showArrow,
      prefix
    } = item

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
          defaultValue={defaultValue}
          value={defaultValue}
          disabled={disabled}
        />
      )
    }
    if (type === 'select') {
      return (
        <Select
          showSearch
          options={options}
          placeholder={placeholder}
          allowClear={allowClear}
          autoFocus={autoFocus}
          className={className}
          defaultValue={defaultValue}
          value={defaultValue}
          disabled={disabled}
          showArrow={showArrow}
          filterOption={(inputValue, option) =>
            option.label
              .toString()
              .toLowerCase()
              .includes(inputValue.toLowerCase())
          }
        />
      )
    }
    if (type === 'date') {
      return (
        <DatePicker
          placeholder={placeholder}
          className={className}
          allowClear={allowClear}
          autoFocus={autoFocus}
          format={format}
          showToday={showToday}
          disabledDate={disabledDate}
        />
      )
    }
    if (type === 'time') {
      return (
        <TimePicker
          placeholder={placeholder}
          className={className}
          allowClear={allowClear}
          autoFocus={autoFocus}
          format={format}
          minuteStep={minuteStep}
          use12Hours
        />
      )
    }
    if (type === 'timeRange') {
      return (
        <TimePicker.RangePicker
          placeholder={placeholder}
          className={className}
          allowClear={allowClear}
          autoFocus={autoFocus}
          format={format}
          minuteStep={minuteStep}
          popupClassName='time-range-picker-popup'
          use12Hours
        />
      )
    }
    if (type === 'number') {
      return (
        <InputNumber
          placeholder={placeholder}
          autoComplete={autoComplete}
          min={min}
          max={max}
          className='w-full'
          formatter={formatter}
          addonAfter={prefix}
        />
      )
    }
    if (type === 'switch') {
      return (
        <Switch
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
          defaultChecked={defaultChecked}
          className={`bg-sky-500 ${className}`}
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      )
    }
    if (type === 'switchWithoutVal') {
      return (
        <Switch
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
          defaultChecked={defaultChecked}
          className={`bg-sky-500 ${className}`}
          onClick={() => setChecked(!checked)}
        />
      )
    }
    if (type === 'radioGroup') {
      return (
        <Radio.Group
          options={options}
          value={radioGroupValue}
          optionType={optionType}
          defaultValue={defaultValue}
          onChange={({ target: { value } }) => setRadioGroupValue(value)}
        />
      )
    }
    if (type === 'text') {
      return (
        <Input
          placeholder={placeholder}
          className={className}
          autoFocus={autoFocus}
          min={min}
          max={max}
          autoComplete={autoComplete}
          disabled={disabled}
        />
      )
    }
    if (type === 'checkbox') {
      return <Checkbox.Group options={options} />
    }
    return null
  }

  const renderItemsInArray = () => {
    if (type === 'signIn') {
      return ['email', 'password']
    }

    return []
  }

  const formItems = fields
    ?.filter(item =>
      type === 'signIn' ? renderItemsInArray().includes(item.name) : item
    )
    .map((item, idx) => (
      <div
        key={idx}
        className={`flex items-center gap-1 ${formItemClassName} ${item.className}`}
      >
        {!checked && item.name === 'returnDate' ? null : (
          <>
            <Form.Item
              key={`form_${name}_${idx}`}
              label={item.label}
              name={item.name}
              rules={item.rules}
              hasFeedback={item.hasFeedback}
              valuePropName={item.valuePropName}
              className={`w-full ${itemClassName}`}
            >
              {renderInput(item, inputClassName)}
            </Form.Item>
            {item.tooltip && (
              <Tooltip title={item.tooltipTitle}>{item.tooltipText}</Tooltip>
            )}
          </>
        )}
      </div>
    ))

  const onFinish = values => {
    onSubmit(values)
  }

  const resetFields = () => {
    form.resetFields()
  }

  useImperativeHandle(ref, () => ({
    resetFields,
    form: form
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
      onValuesChange={(changedValues, allValues) => {
        onValChangeCallback(changedValues, allValues)
      }}
    >
      {formItems}
      {!noSubmitBtn && (
        <Form.Item className={btnWrapperClassName}>
          {customComponent}
          <CommonBtn
            type='primary'
            htmlType='submit'
            classNames={`w-full mt-4 bg-blue-400 font-bold ${btnClassName}`}
          >
            {formBtnText}
          </CommonBtn>
        </Form.Item>
      )}
    </Form>
  )
})

export default CommonForm
