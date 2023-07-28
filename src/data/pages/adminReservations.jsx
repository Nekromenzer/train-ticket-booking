import dayjs from 'dayjs'

const data = {
  tableColumns: [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'User Name',
      dataIndex: 'user_name',
      key: 'user_name'
    },
    {
      title: 'Train Name',
      dataIndex: 'train_name',
      key: 'train_name'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (_, { date }) => {
        return dayjs(date).format('YYYY-MM-DD')
      }
    }
  ]
}

export default data
