function formatCreditCardNumber (creditCardNumber) {
  const cleanedNumber = creditCardNumber.replace(/\D/g, '')
  const formatGroups = [4, 4, 4, 4]
  let currentPosition = 0
  let formattedNumber = ''

  for (const group of formatGroups) {
    const digits = cleanedNumber.slice(currentPosition, currentPosition + group)
    if (digits) {
      formattedNumber += digits + ' '
    }
    currentPosition += group
  }
  return formattedNumber.trim()
}

function addSlashAfterTwoDigits (inputString) {
  const firstTwoDigits = inputString.slice(0, 2)
  const restOfString = inputString.slice(2)
  const formattedString = firstTwoDigits + '/' + restOfString
  return formattedString
}

const data = {
  formBtnText: 'Pay',
  fields: [
    {
      label: '',
      type: 'radioGroup',
      hasFeedback: true,
      options: [
        { label: 'Visa', value: 1 },
        { label: 'MasterCard', value: 2 }
      ],
      optionType: 'button'
    },
    {
      label: 'Name in card',
      name: 'fullName',
      rules: [{ required: true, message: 'Please enter name in your card' }],
      type: 'text',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Jane Doe',
      allowClear: false,
      autoFocus: true
    },
    {
      label: 'Card number',
      name: 'cardNumber',
      rules: [
        { required: true, message: 'Please enter card number' },
        () => ({
          validator (_, value) {
            if (!value || value.toString().length === 16) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('Enter valid card number'))
          }
        })
      ],
      formatter: value => {
        return formatCreditCardNumber(value)
      },
      type: 'number',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'XXXX XXXX XXXX XXXX',
      allowClear: false,
      autoFocus: false
    },
    {
      label: 'Expiry',
      name: 'expiry',
      rules: [
        { required: true, message: 'Please enter Expiry date' },
        () => ({
          validator (_, value) {
            if (!value || value.toString().length === 4) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('Enter valid date'))
          }
        })
      ],
      formatter: value => {
        return addSlashAfterTwoDigits(value)
      },
      type: 'number',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '12/07',
      allowClear: false,
      autoFocus: false,
      className: 'custom-payment-input-width'
    },
    {
      label: 'CVV',
      name: 'cvv',
      rules: [
        { required: true, message: 'Please enter card cvv' },
        () => ({
          validator (_, value) {
            if (!value || value.toString().length === 3) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('Enter valid cvv!'))
          }
        })
      ],
      type: 'password',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '000',
      allowClear: false,
      autoFocus: false,
      className: 'custom-payment-input-width'
    }
  ]
}

export default data
