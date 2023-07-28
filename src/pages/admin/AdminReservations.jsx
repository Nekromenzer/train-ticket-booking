import { useState } from 'react'
import CommonTable from '../../components/common/CommonTable'
import data from '../../data/pages/adminReservations'

const AdminReservations = ({ reservations, getReservations, loading }) => {
  const [loadingTable, setLoadingTable] = useState(false)
  return (
    <CommonTable
      dataSource={reservations.data}
      loading={loading || loadingTable}
      columns={data.tableColumns}
      onChange={(pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra)
      }}
    />
  )
}

export default AdminReservations
