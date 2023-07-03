import { FcGoogle } from 'react-icons/fc'

const data = {
  signInText: 'Sign In',
  signUpText: 'Sign Up',
  name: 'login',
  layout: 'vertical',
  className: 'mt-[1rem] md:mt-[3rem]',
  fields: [
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
      hasFeedback: true,
      placeholder: '********'
    }
  ],
  socialLogins: [
    {
      name: 'facebook',
      icon: 'facebook'
    },
    {
      name: 'google',
      icon: FcGoogle
    }
  ]
}

export default data
