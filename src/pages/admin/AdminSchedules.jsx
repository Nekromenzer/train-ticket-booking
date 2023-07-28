import { useState, useRef } from 'react'
import CommonTable from '../../components/common/CommonTable'
import data from '../../data/pages/adminSchedules'
import { CommonForm } from '../../components'
import { Drawer } from 'antd'

const AdminSchedules = ({
  loading,
  btnClicked,
  setBtnClicked,
  schedules,
  stations,
  routes,
  trains,
  getTrainSchedules
}) => {
  const [loadingTable, setLoadingTable] = useState(false)

  const formRef = useRef(null)

  return (
    <>
      <Drawer
        title='Add new schedule'
        placement='right'
        onClose={() => {
          setBtnClicked(false)
          formRef.current.resetFields()
        }}
        open={btnClicked}
        headerStyle={{ backgroundColor: '#f0f2f5' }}
        maskStyle={{ backgroundColor: 'black', opacity: '0.8' }}
        size='large'
      >
        <CommonForm
          fields={data.fields({
            stations: stations,
            routes: routes,
            trains: trains
          })}
          formBtnText='Add schedule'
          ref={formRef}
        />
      </Drawer>

      <CommonTable
        dataSource={schedules}
        loading={loading || loadingTable}
        columns={data.tableColumns({
          stations: stations,
          routes: routes,
          trains: trains
        })}
        onChange={(pagination, filters, sorter, extra) => {
          console.log('params', pagination, filters, sorter, extra)
        }}
      />
    </>
  )
}

export default AdminSchedules
