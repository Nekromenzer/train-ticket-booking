import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

const nicRegex = /^(?:\d{9}(?:V|v)|\d{12})$/

function validateNIC (nicNumber) {
  return nicRegex.test(nicNumber)
}

const data = {
  title: 'TrackTicket',
  signInText: 'Sign In',
  signUpText: 'Sign Up',
  name: 'login',
  layout: 'vertical',
  className: 'mt-[1rem] md:mt-[3rem]',
  signInLoadingText: 'Logging user...',
  signUpLoadingText: 'Signing user...',
  fields: [
    {
      label: 'Full name',
      name: 'fullName',
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
            return Promise.reject(
              new Error('Enter valied NIC number')
            )
          }
        })
      ],
      type: 'text',
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '000000000V'
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
    },
    {
      label: 'Password',
      name: 'password',
      rules: [
        { required: true, message: 'Please enter your password!' },
        { min: 6, message: 'Password must be minimum 5 characters.' },
        { max: 20, message: 'Password must be maximum 20 characters.' }
      ],
      type: 'password',
      hasFeedback: true,
      autoComplete: 'on',
      placeholder: '********'
    },
    {
      label: 'Confirm Password',
      name: 'confirm-password',
      type: 'password',
      dependencies: ['password'],
      rules: [
        {
          required: true,
          message: "Passwords don't match"
        },
        ({ getFieldValue }) => ({
          validator (_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve()
            }
            return Promise.reject(
              new Error('The two passwords that you entered do not match!')
            )
          }
        })
      ],
      autoComplete: 'on',
      hasFeedback: true,
      placeholder: '********'
    }
  ],
  loginWithSocialText: 'login with social account',
  socialLogins: [
    {
      name: 'facebook',
      icon: <BsFacebook className='fill-[#3b5998] text-3xl' />,
      onclick: () => console.log('facebook login')
    },
    {
      name: 'google',
      icon: <FcGoogle className='text-3xl' />,
      onclick: () => console.log('google login')
    }
  ]
}

export default data
