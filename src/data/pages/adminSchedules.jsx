import dayjs from 'dayjs'
const todayDate = new Date()
const formattedDate = date => dayjs(date).format('YYYY-MM-DD')

const data = {
  tableColumns: [
    {
      title: 'Train',
      dataIndex: 'train_id',
      key: 'train_id'
    },
    {
      title: 'Route',
      dataIndex: 'route_id',
      key: 'route_id'
    },
    {
      title: 'From',
      dataIndex: 'from_id',
      key: 'from_id'
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to_id'
    },
    {
      title: 'Departure Time',
      dataIndex: 'date',
      key: 'departure_time'
    },
    {
      title: 'Arrival Time',
      dataIndex: 'date',
      key: 'arrival_time'
    },
    {
      title: 'Prices',
      dataIndex: 'prices',
      key: 'prices'
    }
  ],
  fields: ({ stations, routes, trains }) => [
    {
      label: 'Train',
      name: 'train_id',
    //   rules: [{ required: true, message: 'Please select train!' }],
      type: 'select',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Colombo Fort',
      options: trains,
      allowClear: true,
      autoFocus: true,
      disabled: !trains?.length,
      showArrow: false
    },
    {
      label: 'From',
      name: 'from_id',
      rules: [
        { required: true, message: 'Please Select your departure station!' },
        ({ getFieldValue }) => ({
            validator (_, value) {
              if (!value || getFieldValue('to_id') !== value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error('Please select a different station!')
              )
            }
          })
      ],
      type: 'select',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Colombo Fort',
      options: stations,
      allowClear: true,
      autoFocus: true,
      disabled: !stations?.length,
      showArrow: false
    },
    {
      label: 'To',
      name: 'to_id',
      rules: [
        { required: true, message: 'Please enter your arrival station!' },
        ({ getFieldValue }) => ({
            validator (_, value) {
              if (!value || getFieldValue('from_id') !== value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error('Please select a different station!')
              )
            }
          })
      ],
      type: 'select',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Colombo Fort',
      options: stations,
      allowClear: true,
      autoFocus: true,
      disabled: !stations?.length,
      showArrow: false,
    },
    {
      label: 'Route',
      name: 'routes_id',
      rules: [
        // { required: true, message: 'Please enter your arrival station!' }
      ],
      type: 'select',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Colombo Fort',
      options: routes,
      allowClear: true,
      autoFocus: true,
      disabled: !routes.length,
      showArrow: false
    },
    {
      label: 'Departure time',
      name: 'departure_time',
    //   rules: [{ required: true, message: 'Please enter valid time!' }],
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
      label: 'Arrival time',
      name: 'arrival_time',
    //   rules: [{ required: true, message: 'Please enter valid time!' }],
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
    }
  ]
}

export default data
