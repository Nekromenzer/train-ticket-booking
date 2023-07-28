import dayjs from 'dayjs'
const todayDate = new Date()
const formattedTime = date => dayjs(date).format('HH:MM A')

const data = {
  tableColumns: ({ stations, routes, trains }) => [
    {
      title: 'Train',
      dataIndex: 'train_id',
      key: 'train_id'
    },
    {
      title: 'Route',
      dataIndex: 'routes_id',
      key: 'routes_id'
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from'
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
      render: (_, { to }) => {
        return 'sadasd'
      }
    },
    {
      title: 'Departure Time',
      dataIndex: 'date',
      key: 'departure_time',
      render: (_, { departure_time }) => {
        return dayjs(departure_time).format('hh:mm A')
      }
    },
    {
      title: 'Arrival Time',
      dataIndex: 'arrival_time',
      key: 'arrival_time',
      render: (_, { arrival_time }) => {
        return dayjs(arrival_time).format('hh:mm A')
      }
    }
    // {
    //   title: 'Prices',
    //   dataIndex: 'prices',
    //   key: 'prices'
    // }
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
      showArrow: false
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
      type: 'time',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '02.00 PM',
      allowClear: true,
      autoFocus: false,
      showToday: true,
      format: 'HH:mm'
    },
    {
      label: 'Arrival time',
      name: 'arrival_time',
      //   rules: [{ required: true, message: 'Please enter valid time!' }],
      type: 'time',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '04.30 PM',
      allowClear: true,
      autoFocus: false,
      showToday: true,
      format: 'HH:mm'
    }
  ]
}

export default data
