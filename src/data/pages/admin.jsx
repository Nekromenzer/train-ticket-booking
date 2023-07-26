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
      description: 'Top classes in last two months',
      tags: ({ destinations = [] }) => destinations,
      type: 'common-tags'
    },
    {
      header: 'Revenue Increment',
      description: 'Revenue Increase compare to last month',
      type: 'liq-chart',
      props: ({ percentage = 0 }) => ({
        percent: percentage,
        height: 20
      })
    },
    {
      header: 'System',
      description: 'System status',
      //   need to be changed
      stats: [
        { name: 'Total Users', color: 'red', amount: 89 },
        { name: 'Total schedules', color: 'green', amount: 30 },
        { name: 'Total bookings', color: 'blue', amount: 439 }
      ],
      class: 'min-h-[13rem]',
      type: 'stats',
      imgUrl: 'https://img.icons8.com/color-glass/100/restart--v2.png'
    }
  ]
}

export default data
