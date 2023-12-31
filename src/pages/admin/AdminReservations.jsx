import CommonTable from '../../components/common/CommonTable'
import data from '../../data/pages/adminReservations'

const AdminReservations = ({ reservations, loading }) => {
  const dataWithKey = reservations?.data.map(item => {
    return {
      key: item.id,
      ...item
    }
  })
  return (
    <CommonTable
      dataSource={dataWithKey}
      loading={loading}
      columns={data.tableColumns}
      onChange={(pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra)
      }}
    />
  )
}

export default AdminReservations
