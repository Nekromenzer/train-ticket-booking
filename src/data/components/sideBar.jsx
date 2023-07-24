import { FiLogOut } from 'react-icons/fi'
import {
  BsFillClipboard2CheckFill,
  BsFillHouseFill,
  BsFileEarmarkBarGraphFill,
  BsTrainFrontFill
} from 'react-icons/bs'
import { FaQuestionCircle, FaUsers } from 'react-icons/fa'
import { Modal } from 'antd'
import handleApiCall from '../../api/handleApiCall'

const { confirm } = Modal

const data = {
  menu: [
    {
      type: '',
      title: 'Home',
      icon: active => (
        <BsFillHouseFill
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      )
    },
    {
      type: '',
      title: 'My bookings',
      icon: active => (
        <BsFillClipboard2CheckFill
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      )
    },
    {
      type: '',
      title: 'Faq',
      icon: active => (
        <FaQuestionCircle
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      )
    },
    {
      type: 'logout',
      title: 'Sign out',
      icon: active => (
        <FiLogOut
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      ),
      onClick: () => {
        confirm({
          title: 'Do you want to logout?',
          // icon: <BsExclamationCircleFill className='text-yellow-400' />,
          content: 'This may cause you to lose your unsaved data!',
          okText: 'Sign out',
          okButtonProps: {
            className: 'bg-red-500 shadow-none btn-delete'
          },
          mask: true,
          maskStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          onOk () {
            localStorage.removeItem('userToken')
            window.location.reload()
            return handleApiCall({
              urlType: 'logout',
              setLoading: () => {},
              cb: (res, status) => {
                console.log(res, status, 'logout')
              }
            })
          },
          onCancel () {
            console.log('Cancel')
          },
          confirmLoading: false
        })
      }
    }
  ],
  adminMenu: [
    {
      type: '',
      title: 'Statistics',
      icon: active => (
        <BsFileEarmarkBarGraphFill
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      )
    },
    {
      type: '',
      title: 'Users',
      icon: active => (
        <FaUsers
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      )
    },
    {
      type: '',
      title: 'Schedule',
      icon: active => (
        <BsTrainFrontFill
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      )
    },
    {
      type: 'logout',
      title: 'Sign out',
      icon: active => (
        <FiLogOut
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      ),
      onClick: () => {
        confirm({
          title: 'Do you want to logout?',
          // icon: <BsExclamationCircleFill className='text-yellow-400' />,
          content: 'This may cause you to lose your unsaved data!',
          okText: 'Sign out',
          okButtonProps: {
            className: 'bg-red-500 shadow-none btn-delete'
          },
          mask: true,
          maskStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          onOk () {
            localStorage.removeItem('userToken')
            window.location.reload()
            return handleApiCall({
              urlType: 'logout',
              setLoading: () => {},
              cb: (res, status) => {
                console.log(res, status, 'logout')
              }
            })
          },
          onCancel () {
            console.log('Cancel')
          },
          confirmLoading: false
        })
      }
    }
  ]
}

export default data
