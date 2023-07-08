import dayjs from 'dayjs'

const stations = [
  { value: 'Colombo Fort' },
  { value: 'Gampaha' },
  { value: 'Veyangoda' },
  { value: 'Kurunegala' },
  { value: 'Maho Junction' },
  { value: 'Anuradhapura' },
  { value: 'Vavuniya' },
  { value: 'Mankulam' },
  { value: 'Kilinochchi' },
  { value: 'Pallai' },
  { value: 'Jaffna' },
  { value: 'Kandy' },
  { value: 'Mannar' },
  { value: 'Talaimannar' },
  { value: 'Puttalam' },
  { value: 'Chilaw' },
  { value: 'Negombo' },
  { value: 'Katunayake' },
  { value: 'Ragama' },
  { value: 'Veyangoda' },
  { value: 'Polgahawela' }
]

const todayDate = new Date()
const formattedDate = dayjs(todayDate).format('YYYY-MM-DD')
const formattedTime = dayjs(todayDate).format('HH:mm')

const data = {
  formBtnText: 'Search',
  fields: [
    {
      label: 'From',
      name: 'from',
      rules: [
        { required: true, message: 'Please enter your departure station!' }
      ],
      type: 'autocomplete',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Colombo Fort',
      options: stations,
      allowClear: true,
      autoFocus: true
    },
    {
      label: 'To',
      name: 'to',
      rules: [
        { required: true, message: 'Please enter your departure station!' }
      ],
      type: 'autocomplete',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Colombo Fort',
      options: stations,
      allowClear: true,
      autoFocus: false
    },
    {
      label: 'Date',
      name: 'date',
      rules: [
        { required: true, message: 'Please enter valid date!' },
        { type: 'date', message: 'Please enter valid date!' }
      ],
      type: 'date',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: formattedDate,
      options: stations,
      allowClear: true,
      autoFocus: false,
      showToday: true
    },
    {
      label: 'Time',
      name: 'time',
      rules: [
        { required: true, message: 'Please enter valid Time!' },
        { type: 'date', message: 'Please enter valid Time!' }
      ],
      type: 'time',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: formattedTime,
      options: stations,
      allowClear: true,
      autoFocus: false,
      format: 'HH:mm'
    }
  ]
}

export default data
