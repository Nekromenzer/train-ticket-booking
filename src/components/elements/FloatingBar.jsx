import { FloatButton } from 'antd'
import { PiTrainFill } from 'react-icons/pi'

const FloatingBar = ({ trigger = 'click', type = 'primary', className }) => {
  return (
    <div className={className}>
      <FloatButton.Group
        trigger={trigger}
        type={type}
        style={{
          right: 24
        }}
        icon={<PiTrainFill className='fill-white' />}
      >
        <FloatButton />
        {/* <FloatButton icon={<CommentOutlined />} /> */}
      </FloatButton.Group>
    </div>
  )
}

export default FloatingBar
