import CommonTable from '../../components/common/CommonTable'
import data from '../../data/pages/adminReservations'

const AdminReservations = ({ reservations, loading }) => {
  return (
    <CommonTable
      dataSource={reservations.data}
      loading={loading}
      columns={data.tableColumns}
      onChange={(pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra)
      }}
    />
  )
}

export default AdminReservations
