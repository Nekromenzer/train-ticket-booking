import { useState, useRef } from 'react'
import CommonTable from '../../components/common/CommonTable'
import data from '../../data/pages/adminSchedules'
import { CommonForm } from '../../components'
import { Drawer, Modal } from 'antd'
import dayjs from 'dayjs'
import handleApiCall from '../../api/handleApiCall'
import LoadingAnimation from '../../components/elements/LoadingAnimation'

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
  const [loadingForm, setLoadingForm] = useState(false)

  const formRef = useRef(null)

  const dataWithKey = schedules?.map(item => {
    return {
      key: item.id,
      ...item
    }
  })

  const { confirm } = Modal

  const handleDeleteSchedule = id => {
    confirm({
      title: <div>Do you want to delete Schedule</div>,
      // icon: <BsExclamationCircleFill className='text-yellow-400' />,
      content: 'This action cannot be undone',
      okText: 'Delete Schedule',
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
            urlType: 'deleteSchedule',
            auth: true,
            urlParams: `/${id}`,
            cb: (res, state) => {
              if (state === 200) {
                handleApiCall({
                  variant: 'admin',
                  urlType: 'getSchedules',
                  auth: true,
                  setLoading: setLoadingTable,
                  cb: (res, state) => {
                    console.log('ok')
                  }
                })
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

  return (
    <>
      <Drawer
        title='Add new schedule'
        placement='right'
        onClose={() => {
          if (!loadingForm) {
            setBtnClicked(false)
            formRef.current.resetFields()
          }
        }}
        open={btnClicked}
        headerStyle={{ backgroundColor: '#f0f2f5' }}
        maskStyle={{ backgroundColor: 'black', opacity: '0.8' }}
        size='large'
        maskClosable={!loadingForm}
      >
        <LoadingAnimation loading={loadingForm} tip='Adding schedule....'>
          <CommonForm
            fields={data.fields({
              stations: stations,
              routes: routes,
              trains: trains
            })}
            formBtnText='Add schedule'
            ref={formRef}
            className='w-full flex flex-wrap gap-5'
            formItemClassName='w-full lg:w-[48%]'
            btnWrapperClassName='w-full'
            onSubmit={values => {
              const classFormat = {
                class: [
                  {
                    id: 1,
                    price: values.first_class_price || 0
                  },
                  {
                    id: 2,
                    price: values.second_class_price || 0
                  },
                  {
                    id: 3,
                    price: values.third_class_price || 0
                  }
                ]
              }

              const dataObj = {
                departure_time: dayjs(values.departure_time).format(
                  'YYYY-MM-DD HH:mm'
                ),
                arrival_time: dayjs(values.arrival_time).format(
                  'YYYY-MM-DD HH:mm'
                ),
                prices: JSON.stringify(classFormat),
                train_id: values.train_id,
                routes_id: values.routes_id,
                from_id: values.from_id,
                to_id: values.to_id
              }

              handleApiCall({
                variant: 'admin',
                urlType: 'addNewSchedule',
                auth: true,
                data: dataObj,
                setLoading: setLoadingForm,
                cb: (res, state) => {
                  if (state === 200) {
                    setTimeout(() => {
                      getTrainSchedules({ loading: setLoadingTable })
                    }, 500)
                    setBtnClicked(false)
                  }
                }
              })
            }}
          />
        </LoadingAnimation>
      </Drawer>

      <CommonTable
        dataSource={dataWithKey}
        loading={loading || loadingTable}
        columns={data.tableColumns({
          stations: stations,
          routes: routes,
          trains: trains,
          handleDeleteSchedule
        })}
        onChange={(pagination, filters, sorter, extra) => {
          console.log('params', pagination, filters, sorter, extra)
        }}
      />
    </>
  )
}

export default AdminSchedules
