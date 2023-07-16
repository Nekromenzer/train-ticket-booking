import { CommonCalender } from '../../components'

const UserBookings = () => {
  const getListData = value => {
    const eventData = {
      8: [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' }
      ],
      10: [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' }
      ],
      15: [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event' }
      ]
    }

    return eventData[value.date()] || []
  }
  return (
    <div className='h-full flex'>
      <CommonCalender
        getListData={getListData}
        headerText='My bookings in this month'
      />
    </div>
  )
}

export default UserBookings
