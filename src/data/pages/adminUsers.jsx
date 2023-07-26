import { VscVerifiedFilled, VscUnverified } from 'react-icons/vsc'
import { MdDeleteSweep, MdEditSquare } from 'react-icons/md'

const nicRegex = /^(?:\d{9}(?:V|v)|\d{12})$/

function validateNIC (nicNumber) {
  return nicRegex.test(nicNumber)
}

const data = {
  tableColumns: ({ setUserData, setOpenEdit }) => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone',
      dataIndex: 'phone_no',
      key: 'phone_no'
    },
    {
      title: 'NIC',
      dataIndex: 'nic',
      key: 'nic'
    },
    {
      title: 'Verified',
      dataIndex: 'email_verified_at',
      key: 'email_verified_at',
      render: (_, { email_verified_at }) => {
        return (
          <div>
            {email_verified_at !== null ? (
              <VscVerifiedFilled className='text-[1.5rem] fill-green-500' />
            ) : (
              <VscUnverified className='text-[1.5rem] fill-red-500' />
            )}
          </div>
        )
      }
    },
    {
      title: '',
      key: 'action',
      render: row => (
        <div
          className='flex items-center justify-start gap-4'
          onClick={() => {
            if (setUserData) {
              setUserData(row)
              setOpenEdit(true)
            }
          }}
        >
          <MdEditSquare className='text-[1.3rem] fill-blue-500' />
        </div>
      )
    },
    {
      title: '',
      key: 'delete',
      render: row => (
        <div
          className='flex items-center justify-start gap-4'
          onClick={() => {
            console.log(row.id, 'delete')
          }}
        >
          <MdDeleteSweep className='text-[1.5rem] fill-red-500' />
        </div>
      )
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
      name: 'phone_number',
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
  ]
}

export default data
