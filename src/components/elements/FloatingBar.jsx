import { FloatButton } from 'antd'
import { PiTrainFill } from 'react-icons/pi'
import data from '../../data/components/sideBar'

const FloatingBar = ({
  trigger = 'click',
  type = 'primary',
  className,
  activeIndex
}) => {
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
        {data?.menu?.map((item, idx) => (
          <FloatButton
            icon={item.icon(activeIndex === idx + 1)}
            key={idx}
            type={type}
            onClick={item.onClick}
            tooltip={item.title}
          />
        ))}
      </FloatButton.Group>
    </div>
  )
}

export default FloatingBar
