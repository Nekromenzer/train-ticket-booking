import { FiLogOut } from 'react-icons/fi'
import {
  BsFillClipboard2CheckFill,
  BsFillHouseFill,
  BsFileEarmarkBarGraphFill,
  BsTrainFrontFill
} from 'react-icons/bs'

import { FaQuestionCircle, FaUsers, FaListAlt, FaUserCog } from 'react-icons/fa'
import { Modal } from 'antd'
import handleApiCall from '../../api/handleApiCall'

const { confirm } = Modal

const nicRegex = /^(?:\d{9}(?:V|v)|\d{12})$/
function validateNIC (nicNumber) {
  return nicRegex.test(nicNumber)
}


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
      type: 'edit-profile',
      title: 'Edit Profile',
      icon: active => (
        <FaUserCog
          className={`text-[1.2rem] ${
            active ? 'text-yellow-400' : ' text-white'
          }`}
        />
      ),
      onClick: setOpenEdit => {
        setOpenEdit(true)
      }
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
  fields: [
    {
      label: 'Full name',
      name: 'name',
      rules: [{ required: true, message: 'Please enter your full name' }],
      type: 'text',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'Jane doe'
    },
    {
      label: 'NIC',
      name: 'nic',
      rules: [
        { required: true, message: 'Please enter your NIC number' },
        () => ({
          validator (_, value) {
            if (!value || validateNIC(value)) {
              return Promise.resolve()
            }
            return Promise.reject(new Error('Enter valied NIC number'))
          }
        })
      ],
      type: 'text',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '000000000V'
    },
    {
      label: 'Phone number',
      name: 'phone_no',
      rules: [
        { required: true, message: 'Please enter your phone number!' },
        {
          pattern: /^0[0-9]{9}$/,
          message: 'Please enter valid phone number!'
        }
      ],
      type: 'text',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '0771234567'
    },
    {
      label: 'Email',
      name: 'email',
      rules: [
        { required: true, message: 'Please enter your email!' },
        {
          type: 'email',
          message: 'Please enter valid E-mail!'
        }
      ],
      type: 'text',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: 'janeDoe@gmail.com'
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
      title: 'Reservations',
      icon: active => (
        <FaListAlt
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
