import dayjs from 'dayjs'
import { MdDeleteSweep } from 'react-icons/md'

const data = {
  tableColumns: ({ stations, routes, trains, handleDeleteSchedule }) => [
    {
      title: 'Train',
      dataIndex: 'train_id',
      key: 'train_id',
      render: (_, { id }) => {
        const routeName = trains.map(({ label, value }) =>
          value === id ? label : null
        )
        return routeName
      }
    },
    {
      title: 'Route',
      dataIndex: 'routes_id',
      key: 'routes_id',
      render: (_, { routes_id }) => {
        const routeName = routes.map(({ label, value }) => {
          return value === routes_id && label
        })
        return routeName
      }
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
      render: (_, { from }) => {
        const getStationName = stations.map(({ label, value }) =>
          value === from ? label : null
        )
        return getStationName
      }
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
      render: (_, { to }) => {
        const getStationName = stations.map(({ label, value }) =>
          value === to ? label : null
        )
        return getStationName
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
    },
    {
      title: 'Date',
      dataIndex: 'arrival_time',
      render: (_, { arrival_time }) => {
        return dayjs(arrival_time).format('YYYY-MM-DD')
      }
    },
    {
      title: '',
      key: 'delete',
      render: row => (
        <div
          className='flex items-center justify-start gap-4'
          onClick={() => {
            handleDeleteSchedule(row.id)
          }}
        >
          <MdDeleteSweep className='text-[1.5rem] fill-red-500' />
        </div>
      )
    }
  ],
  fields: ({ stations, routes, trains }) => [
    {
      label: 'Train',
      name: 'train_id',
      rules: [{ required: true, message: 'Please select train!' }],
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
      label: 'Route',
      name: 'routes_id',
      rules: [
        { required: true, message: 'Please enter your arrival station!' }
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
      label: 'Departure time',
      name: 'departure_time',
      rules: [{ required: true, message: 'Please enter valid time!' }],
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
      rules: [{ required: true, message: 'Please enter valid time!' }],
      type: 'time',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '04.30 PM',
      allowClear: true,
      autoFocus: false,
      showToday: true,
      format: 'HH:mm'
    },
    {
      label: '1st Class Price',
      name: 'first_class_price',
      rules: [
        ({ getFieldValue }) => ({
          validator (_, value) {
            if (
              (!value &&
                (getFieldValue('second_class_price') ||
                  getFieldValue('third_class_price'))) ||
              value
            ) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('Please add at least one price!'))
          }
        })
      ],
      type: 'number',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '100.00',
      allowClear: true,
      autoFocus: false,
      className: 'lg:!w-[31%]',
      prefix: 'LKR'
    },
    {
      label: '2nd Class Price',
      name: 'second_class_price',
      rules: [
        ({ getFieldValue }) => ({
          validator (_, value) {
            if (
              (!value &&
                (getFieldValue('first_class_price') ||
                  getFieldValue('third_class_price'))) ||
              value
            ) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('Please add at least one price!'))
          }
        })
      ],
      type: 'number',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '100.00',
      allowClear: true,
      autoFocus: false,
      className: 'lg:!w-[31%]',
      prefix: 'LKR'
    },
    {
      label: '3rd Class Price',
      name: 'third_class_price',
      rules: [
        ({ getFieldValue }) => ({
          validator (_, value) {
            if (
              (!value &&
                (getFieldValue('first_class_price') ||
                  getFieldValue('second_class_price'))) ||
              value
            ) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('Please add at least one price!'))
          }
        })
      ],
      type: 'number',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '100.00',
      allowClear: true,
      autoFocus: false,
      className: 'lg:!w-[31%]',
      prefix: 'LKR'
    }
  ]
}

export default data
