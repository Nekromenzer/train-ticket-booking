const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 }
]

const data = {
  mainCharts: ({ bookingData = [], revenueData = [] }) => [
    {
      header: 'Total bookings per month',
      type: 'col',
      data: bookingData,
      xField: 'month',
      yField: 'count'
    },
    {
      header: 'Total revenue per month',
      type: 'area',
      color: '#16a34a',
      data: revenueData,
      xField: 'month',
      yField: 'total'
    }
  ],
  rightPanel: [
    {
      header: 'Top 3 routes',
      description: 'Most used routes all the time',
      //   need to be changed
      tags: ({ routes = [] }) => routes,
      type: 'tags',
      color: 'red'
    },
    {
      header: 'Top Classes',
      description: 'Top classes in last months',
      tags: ({ destinations = [] }) => destinations,
      type: 'common-tags',
      class: 'bg-rose-900'
    },
    {
      header: 'Revenue Increment',
      description: 'Revenue Increase compare to last month',
      type: 'liq-chart',
      props: ({ percentage = 0 }) => ({
        percent: percentage,
        height: 15
      })
    },
    {
      header: 'System',
      description: 'System status',
      //   need to be changed
      stats: ({ users, schedules, bookings }) => [
        { name: 'Total Users', color: 'red', amount: users },
        { name: 'Total schedules', color: 'green', amount: schedules },
        { name: 'Total bookings', color: 'blue', amount: bookings }
      ],
      class: 'min-h-[13rem]',
      type: 'stats',
      imgUrl: 'https://img.icons8.com/color-glass/100/restart--v2.png'
    }
  ],
  filterForm: [
    {
      label: 'Month 1',
      name: 'firstMonth',
      rules: [{ required: true, message: 'Select month!' }],
      type: 'select',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Colombo Fort',
      options: months,
      allowClear: true,
      autoFocus: false,
      disabled: !months?.length,
      showArrow: false,
      defaultValue: 1,
      className: '!w-full !my-0'
    },
    {
      label: 'Month 2',
      name: 'secondMonth',
      rules: [{ required: true, message: 'Select month!' }],
      type: 'select',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Colombo Fort',
      options: months,
      allowClear: true,
      autoFocus: false,
      disabled: !months?.length,
      showArrow: false,
      defaultValue: 8,
      className: '!w-full !my-0'
    },
    {
      label: 'Revenue',
      type: 'switchWithoutVal',
      name: 'revenue',
      checkedChildren: 'With Revenue',
      unCheckedChildren: 'Without Revenue',
      defaultChecked: true,
      className: '!my-0'
    },
    {
      label: 'Bookings',
      type: 'switchWithoutVal',
      name: 'bookings',
      checkedChildren: 'With Bookings',
      unCheckedChildren: 'Without Bookings',
      defaultChecked: true,
      className: '!my-0'
    }
  ]
}

export default data
