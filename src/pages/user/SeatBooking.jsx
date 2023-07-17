import { useState } from 'react'
import { Checkbox } from 'antd'

const SeatBooking = ({}) => {
  const seats = [
    { id: 1, name: '', available: true },
    { id: 2, name: '', available: false },
    { id: 3, name: '', available: true },
    { id: 4, name: '', available: false },
    { id: 5, name: '', available: true },
    { id: 6, name: '', available: true },
    { id: 7, name: '', available: true },
    { id: 8, name: '', available: true },
    { id: 9, name: '', available: true },
    { id: 10, name: '', available: false },
    { id: 11, name: '', available: false },
    { id: 12, name: '', available: true },
    { id: 13, name: '', available: false },
    { id: 14, name: '', available: true },
    { id: 15, name: '', available: true },
    { id: 16, name: '', available: true },
    { id: 17, name: '', available: true },
    { id: 18, name: '', available: true },
    { id: 19, name: '', available: false },
    { id: 20, name: '', available: true }
  ]

  const [checkedList, setCheckedList] = useState([])
  console.log(checkedList)

  const noOfPassengers = 5
  const onChange = e => {
    if (checkedList.length <= noOfPassengers) {
      setCheckedList(
        e.target.checked
          ? [...checkedList, e.target.id]
          : checkedList.filter(item => item !== e.target.id)
      )
    }
  }

  return (
    <div>
      <div className='px-2 py-4 flex flex-wrap w-[10.2rem] gap-3 gap-y-8 bg-white shadow-sm border border-blue-950'>
        {seats.map((seat, idx) => (
          <Checkbox
            value={seat.id}
            onChange={onChange}
            key={idx}
            className={`seat-checkbox ${
              [1, 5, 9, 13, 17].includes(idx) ? 'mr-[2rem] ' : 'mr-1'
            } ${!checkedList.includes(seat.id) && checkedList.length >= noOfPassengers && 'pointer-events-none disabled-user-check'}`}
            id={seat.id}
            disabled={!seat.available}
          />
        ))}
      </div>
    </div>
  )
}

export default SeatBooking
