import dayjs from 'dayjs'
import { BiSolidSelectMultiple } from 'react-icons/bi'

const stations = [
  { value: 'Colombo Fort' },
  { value: 'Gampaha' },
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
const formattedDate = date => dayjs(date).format('YYYY-MM-DD')
const formatDateForValidate = date => {
  if (date === undefined) {
    return -1
  }
  return Number(dayjs(date).format('YYYYMMDD'))
}
const formattedTime = dayjs(todayDate).format('HH:mm')

const data = {
  formHeader: 'Search Train',
  formBtnText: 'Search',
  steps: [
    {
      title: 'Back to Search'
    },
    {
      title: 'Select Train'
    },
    {
      title: 'Select Seat'
    },
    {
      title: 'Payment'
    }
  ],
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
        { required: true, message: 'Please enter your departure station!' },
        ({ getFieldValue }) => ({
          validator (_, value) {
            if (!value || getFieldValue('from') !== value) {
              return Promise.resolve()
            }
            return Promise.reject(
              new Error('Please select a different station!')
            )
          }
        })
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
      name: 'departureDate',
      rules: [
        { required: true, message: 'Please enter valid date!' },
        { type: 'date', message: 'Please enter valid date!' }
      ],
      type: 'date',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: formattedDate(todayDate),
      allowClear: true,
      autoFocus: false,
      showToday: true,
      disabledDate: current => {
        let customDate = dayjs().format('YYYY-MM-DD')
        return current && current < dayjs(customDate, 'YYYY-MM-DD')
      }
    },
    {
      label: 'Start & End Time',
      name: 'time',
      type: 'timeRange',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: formattedTime,
      allowClear: true,
      autoFocus: false,
      format: 'HH:mm',
      minuteStep: 30
    },
    {
      label: 'Return',
      name: 'return',
      type: 'switch',
      checkedChildren: 'Return train',
      unCheckedChildren: 'One way train',
      valuePropName: 'checked'
    },
    {
      label: 'No of Passengers',
      name: 'passengers',
      rules: [{ required: true, message: 'Please enter number of Passengers' }],
      type: 'number',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '1',
      allowClear: true,
      autoFocus: false,
      showToday: true,
      min: 1,
      max: 5,
      tooltip: true,
      tooltipText: (
        <span className='break-keep text-[0.8rem] w-20 text-blue-500 cursor-help '>
          more info
        </span>
      ),
      tooltipTitle: 'Only allowed passengers  in between 1 to 5 per booking'
    },
    {
      label: 'Return Date',
      name: 'returnDate',
      rules: [
        { required: false, message: 'Please enter valid date!' },
        { type: 'date', message: 'Please enter valid date!' },
        ({ getFieldValue }) => ({
          validator (_, value) {
            if (
              formatDateForValidate(getFieldValue('departureDate')) <
              formatDateForValidate(value)
            ) {
              return Promise.resolve()
            }
            return Promise.reject(
              new Error(
                'Return date should be higher date than departure date!'
              )
            )
          }
        })
      ],
      type: 'date',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: formattedDate(todayDate),
      allowClear: false,
      autoFocus: false,
      showToday: true,
      disabledDate: current => {
        let customDate = dayjs().format('YYYY-MM-DD')
        return current && current < dayjs(customDate, 'YYYY-MM-DD')
      }
    }
  ],
  tableColumns: [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: true,
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Action',
      key: 'action',
      render: row => (
        <div
          className='flex items-center justify-start gap-4'
          onClick={() => console.log(row, 'table row ')}
        >
          <span className='text-sky-500'>Select</span>
          <BiSolidSelectMultiple className='text-sky-600' />
        </div>
      )
    }
  ]
}

export default data
