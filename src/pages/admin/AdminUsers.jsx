import { useRef, useState,useEffect } from 'react'
import data from '../../data/pages/adminUsers'
import CommonTable from '../../components/common/CommonTable'
import { Drawer } from 'antd'
import { CommonForm } from '../../components'

const AdminUsers = ({ users, loading }) => {
  const [selectedUser, setSelectedUser] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const formRef = useRef(null)

  const handleEdit = row => {
    setOpenEdit(row)
    const fields = [{ name: ['name'], value: row.name }]
    formRef?.current?.form.setFields(fields)
  }

  useEffect(() => {
    const fields = [
        { name: ['name'], value: selectedUser.name },
        { name: ['email'], value: selectedUser.email },
        { name: ['phone_number'], value: selectedUser.phone_no },
        { name: ['nic'], value: selectedUser.nic }
]
    formRef?.current?.form.setFields(fields)
  }, [selectedUser]);

  return (
    <>
      <Drawer
        title={`Edit ${selectedUser.name}`}
        placement='right'
        onClose={() => setOpenEdit(false)}
        open={openEdit}
        headerStyle={{ backgroundColor: '#f0f2f5' }}
        maskStyle={{ backgroundColor: 'black', opacity: '0.8' }}
        size='large'
      >
        <CommonForm
          fields={data.fields}
          formBtnText='Edit user'
          ref={formRef}
        />
      </Drawer>
      <CommonTable
        dataSource={users.data}
        loading={loading}
        columns={data.tableColumns({
          setUserData: setSelectedUser,
          setOpenEdit: handleEdit
        })}
        onChange={(pagination, filters, sorter, extra) => {
          console.log('params', pagination, filters, sorter, extra)
        }}
      />
    </>
  )
}

export default AdminUsers
