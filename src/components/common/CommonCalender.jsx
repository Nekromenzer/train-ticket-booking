import { Calendar, Badge, Select, Space } from 'antd'

const CommonCalender = ({ getListData, headerText }) => {
  const dateCellRender = value => {
    const listData = getListData(value)
    return (
      <ul className='events'>
        {listData.map(item => (
          <li key={item.content}>
            <Badge
              status={item.type}
              text={
                <span className='text-[0.8rem] subpixel-antialiased '>
                  {item.content}
                </span>
              }
              size='small'
            />
          </li>
        ))}
      </ul>
    )
  }

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current)
    return info.originNode
  }

  return (
    <Calendar
      cellRender={cellRender}
      mode='month'
      headerRender={() => <h3 className='text-xl mb-16 mt-4 font-bold '>{headerText}</h3>}
    />
  )
}

export default CommonCalender
