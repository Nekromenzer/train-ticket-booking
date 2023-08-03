import { useRef, useState, useEffect } from 'react'
import data from '../../data/pages/adminUsers'
import CommonTable from '../../components/common/CommonTable'
import { Drawer, Modal } from 'antd'
import { CommonForm } from '../../components'
import handleApiCall from '../../api/handleApiCall'
import LoadingAnimation from '../../components/elements/LoadingAnimation'

const AdminUsers = ({ users, loading, fetchUsers }) => {
  const [selectedUser, setSelectedUser] = useState({})
  const [loadingTable, setLoadingTable] = useState(false)
  const [loadingForm, setLoadingForm] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const formRef = useRef(null)
  const { confirm } = Modal

  const handleEdit = row => {
    setOpenEdit(row)
    const fields = [{ name: ['name'], value: row.name }]
    formRef?.current?.form.setFields(fields)
  }

  const handleDeleteUser = id => {
    confirm({
      title: (
        <div>
          Do you want to Delete user
          {/* <span className='text-red-500'></span>? */}
        </div>
      ),
      // icon: <BsExclamationCircleFill className='text-yellow-400' />,
      content: 'This action cannot be undone',
      okText: 'Delete user',
      okButtonProps: {
        className: 'bg-red-500 shadow-none btn-delete'
      },
      mask: true,
      maskStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      onOk () {
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
      },
      onCancel () {
        console.log('Cancel')
      },
      confirmLoading: false
    })
  }

  const handleEditUser = values => {
    if (values) {
      setLoadingForm(true)
      handleApiCall({
        variant: 'admin',
        urlType: 'editUser',
        auth: true,
        setLoading: setLoadingForm,
        data: { ...values, user_id: String(selectedUser.id) },
        cb: (res, state) => {
          if (state === 200) {
            fetchUsers({ loading: setLoadingTable })
            setOpenEdit(false)
          } else {
            setOpenEdit(false)
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
        title={`Edit user`}
        placement='right'
        onClose={() => {
          if (!loadingForm) {
            setOpenEdit(false)
            formRef.current.resetFields()
          }
        }}
        open={openEdit}
        headerStyle={{ backgroundColor: '#f0f2f5' }}
        maskStyle={{ backgroundColor: 'black', opacity: '0.8' }}
        size='large'
        maskClosable={!loadingForm}
      >
        <LoadingAnimation loading={loadingForm} tip='Editing user....'>
          <CommonForm
            fields={data.fields}
            formBtnText='Edit user'
            ref={formRef}
            onSubmit={handleEditUser}
          />
        </LoadingAnimation>
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
