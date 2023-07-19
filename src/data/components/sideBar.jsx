import { FiLogOut } from 'react-icons/fi'
import { BsFillClipboard2CheckFill, BsFillHouseFill } from 'react-icons/bs'
import { FaQuestionCircle } from 'react-icons/fa'
import { Modal } from 'antd'

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
            return window.location.reload()
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
