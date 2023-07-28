import { useRef, useState, useEffect } from 'react'
import data from '../../data/pages/adminUsers'
import CommonTable from '../../components/common/CommonTable'
import { Drawer } from 'antd'
import { CommonForm } from '../../components'
import handleApiCall from '../../api/handleApiCall'
import LoadingAnimation from '../../components/elements/LoadingAnimation'

const AdminUsers = ({ users, loading, fetchUsers }) => {
  const [selectedUser, setSelectedUser] = useState({})
  const [loadingTable, setLoadingTable] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const formRef = useRef(null)

  const handleEdit = row => {
    setOpenEdit(row)
    const fields = [{ name: ['name'], value: row.name }]
    formRef?.current?.form.setFields(fields)
  }

  const handleDeleteUser = id => {
    if (id) {
      handleApiCall({
        variant: 'admin',
        urlType: 'deleteUser',
        auth: true,
        urlParams: `/${id}`,
        cb: (res, state) => {
          if (state === 200) {
            fetchUsers({ loading: setLoadingTable })
          }
        }
      })
    }
  }

  useEffect(() => {
    const fields = [
      { name: ['name'], value: selectedUser.name, ValidityState: true },
      { name: ['email'], value: selectedUser.email, ValidityState: true },
      { name: ['phone_number'], value: selectedUser.phone_no },
      { name: ['nic'], value: selectedUser.nic }
    ]
    formRef?.current?.form.setFields(fields)
    formRef?.current?.form.validateFields(fields)
  }, [selectedUser])

  return (
    <>
      <Drawer
        title={`Edit ${selectedUser.name}`}
        placement='right'
        onClose={() => {
          setOpenEdit(false)
          formRef.current.resetFields()
        }}
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
        loading={loading || loadingTable}
        columns={data.tableColumns({
          setUserData: setSelectedUser,
          setOpenEdit: handleEdit,
          handleDeleteUser
        })}
        onChange={(pagination, filters, sorter, extra) => {
          console.log('params', pagination, filters, sorter, extra)
        }}
      />
    </>
  )
}

export default AdminUsers
