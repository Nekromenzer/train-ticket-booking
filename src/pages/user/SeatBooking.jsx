import { Checkbox } from 'antd'
import { useState } from 'react'

const SeatBooking = ({ noOfPassengers = 5, selectedTrain }) => {
  // selected class
  const [selectedClass, setSelectedClass] = useState(null)
  // selected seats
  const [seatCheckedList, setSeatCheckedList] = useState([])
  // selected price
  const [selectedPrice, setSelectedPrice] = useState(null)

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
  const onChange = e => {
    if (seatCheckedList.length <= noOfPassengers) {
      setSeatCheckedList(
        e.target.checked
          ? [...seatCheckedList, e.target.id]
          : seatCheckedList.filter(item => item !== e.target.id)
      )
    }
  }

  const RenderTrainClasses = () => {
    return (
      <>
        {selectedTrain?.trainClass?.map((item, idx) => {
          return (
            <div
              key={idx}
              className='w-1/3'
              onClick={() => setSelectedClass(item?.id)}
            >
              <div
                className={`h-32 bg-white w-full min-w-full rounded-lg shadow-sm  cursor-pointer p-1 px-2 hover:border hover:border-sky-400 hover:shadow-md ${
                  item?.id === selectedClass && 'border-2 border-sky-500'
                }`}
              >
                train calssees
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className='flex flex-wrap'>
      <div className='flex gap-4 items-start w-full bg-slate-200 flex-wrap p-2'>
        <div className='px-2 py-4 flex flex-wrap w-[10.2rem] gap-3 gap-y-8 bg-white shadow-sm border border-blue-950 rounded-lg'>
          {seats.map((seat, idx) => (
            <Checkbox
              value={seat.id}
              onChange={onChange}
              key={idx}
              className={`seat-checkbox ${
                [1, 5, 9, 13, 17].includes(idx) ? 'mr-[2rem] ' : 'mr-1'
              } ${
                !seatCheckedList.includes(seat.id) &&
                seatCheckedList.length >= noOfPassengers &&
                'pointer-events-none disabled-user-check'
              }`}
              id={seat.id}
              disabled={!seat.available}
            />
          ))}
        </div>
        <div className='bg-red w-auto flex gap-3 flex-grow'>
          <RenderTrainClasses />
        </div>
        {/* <div className='w-1/3 h-fit '>
          <span>Your selected seats are</span>
        </div> */}
      </div>
      {/* summary */}
      <div className='w-full lg:w-1/3 bg-red-400'>summary section</div>
    </div>
  )
}

export default SeatBooking
