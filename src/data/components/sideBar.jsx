import { FiLogOut } from 'react-icons/fi'
import { BsFillClipboard2CheckFill, BsFillHouseFill } from 'react-icons/bs'
import { BiSolidHomeHeart } from 'react-icons/bi'

const isAdmin = false

const data = {
  menu: [
    {
      type: '',
      title: 'Home',
      icon: <BsFillHouseFill className='text-[1.2rem] text-white' />,
      onClick: () => console.log('Home')
    },
    {
      type: '',
      title: 'My bookings',
      icon: <BsFillClipboard2CheckFill className='text-[1.2rem] text-white' />,
      onClick: () => console.log('my bookings')
    },
    {
      type: 'logout',
      title: 'Sign out',
      icon: <FiLogOut className='text-[1.2rem] text-white' />,
      onClick: () => console.log('sign out')
    }
  ]
}

export default data
