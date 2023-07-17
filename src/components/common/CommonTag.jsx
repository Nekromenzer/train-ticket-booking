import { Tag } from 'antd'

const CommonTag = ({
  item,
  type,
  customClassnames,
  seatCount,
  seatNameTag
}) => {
  const getTrainClassStyleProps = (type, id) => {
    if (type === 'color') {
      if (id === 1) {
        return '#001F30'
      }
      if (id === 2) {
        return '#005078'
      }
      if (id === 3) {
        return '#008EB5'
      }
    }

    if (type === 'name') {
      if (id === 1) {
        return seatNameTag
          ? 'Air conditioned saloon available seats'
          : 'Air conditioned saloon'
      }
      if (id === 2) {
        return seatNameTag
          ? ' 2nd Class available seats'
          : '2nd Class reserved seats'
      }
      if (id === 3) {
        return seatNameTag
          ? ' 3rd Class available seats'
          : '3rd Class reserved seats'
      }
    }
  }
  return (
    <Tag
      key={item.id}
      color={getTrainClassStyleProps('color', item.id)}
      className={`bg-${getTrainClassStyleProps('color', item.id)} ${
        type === 'class' && 'min-w-[7rem]'
      } text-white w-auto border-none flex items-center justify-between py-[0.8rem] px-2 gap-2 h-5 antialiased tracking-wide font-[400] ${customClassnames}`}
    >
      {type === 'class' && getTrainClassStyleProps('name', item.id)}
      <div
        className={` h-5 flex items-center justify-center rounded-md antialiased ${
          type === 'class' && 'bg-white text-black'
        } ${type === 'price' ? 'w-[5rem]' : 'w-6'}`}
      >
        {type === 'price' ? ` Rs.${item.price}.00` : seatCount || item.seats}
      </div>
    </Tag>
  )
}

export default CommonTag
