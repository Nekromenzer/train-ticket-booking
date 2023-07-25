const data = {
  rightPanel: [
    {
      header: 'Top 3 routes',
      description: 'Most used routes all the time',
      //   need to be changed
      tags: [
        { name: 'Kandy - Badulla', color: 'red' },
        { name: 'Colombo - Kandy', color: 'green' },
        { name: 'Badulla - Ella', color: 'blue' }
      ],
      type: 'tags'
    },
    {
      header: 'Top 3 Destinations',
      description: 'Most famous destination',
      tags: [
        { name: 'Kandy', color: 'red' },
        { name: 'Badulla', color: 'green' },
        { name: 'Ella', color: 'blue' }
      ],
      type: 'tags'
    },
    {
      header: 'Revenue Increment',
      description: 'Revenue Increase compare to last month',
      type: 'liq-chart',
      props: {
        percent: 0.25,
        height: 20
      }
    }
  ]
}

export default data
