import { FiLogOut } from 'react-icons/fi'
import { BsFillClipboard2CheckFill, BsFillHouseFill } from 'react-icons/bs'
import { BiSolidHomeHeart } from 'react-icons/bi'

const isAdmin = false

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
      ),
      onClick: () => console.log('Home')
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
      ),
      onClick: () => console.log('my bookings')
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
      onClick: () => console.log('sign out')
    }
  ]
}

export default data
