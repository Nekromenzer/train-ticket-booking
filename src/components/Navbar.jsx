import { Outlet } from 'react-router'
import { Avatar, Popconfirm, message } from 'antd'
import data from '../data/components/navigation'

const Navbar = () => {
  const confirm = e => {
    console.log(e)
       // aync one
    message.success('Click on Yes')
  }

  const cancel = e => {
    console.log(e)
    // aync one
    message.error('Click on No')
  }

  return (
    <>
      <div className='h-[3rem] w-full bg-blue-400 flex items-center justify-between px-4 shadow-sm'>
        <div className=' font-roboto font-bold tracking-wider text-blue-950 '>
          {data.appName}
        </div>
        <div className='cursor-pointer'>
          <Popconfirm
            title={data.popConfirm.title}
            description={data.popConfirm.description}
            onConfirm={confirm}
            onCancel={cancel}
            okText={data.popConfirm.okText}
            cancelText={data.popConfirm.cancelText}
            okButtonProps={{
              danger: true,
              type: 'dashed'
            }}
            cancelButtonProps={{
              className: 'bg-blue-500 shadow-none',
              type: 'primary'
            }}
          >
            <Avatar />
          </Popconfirm>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
