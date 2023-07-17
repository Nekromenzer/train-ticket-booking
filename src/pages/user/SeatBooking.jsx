import { Checkbox } from 'antd'
import { useState } from 'react'
import { CommonTag } from '../../components'
import { Statistic } from 'antd'
// images
import {
  firstClassSeat,
  secondClassSeat,
  thirdClassSeat
} from '../../../public/img'

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

  console.log(selectedTrain)
  const RenderTrainClasses = () => {
    const getClassImage = id => {
      if (id === 1) return firstClassSeat
      if (id === 2) return secondClassSeat
      if (id === 3) return thirdClassSeat
    }
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
                className={`h-32 flex flex-col justify-between bg-white w-full min-w-full rounded-lg shadow-sm border border-sky-100 cursor-pointer p-2 hover:border hover:border-sky-400 hover:shadow-md ${
                  item?.id === selectedClass &&
                  'border-2 border-sky-500 bg-sky-100 shadow-md'
                }`}
              >
                <CommonTag
                  item={item}
                  type='class'
                  customClassnames='mr-0'
                  seatCount={selectedTrain.availableSeats[idx].seats}
                  seatNameTag
                />
                <div className='flex item-center justify-between'>
                  <img src={getClassImage(item?.id)} height={64} width={64} />
                  <Statistic
                    title='Price per seat (LKR)'
                    value={selectedTrain.price[idx].price}
                    precision={2}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className='flex flex-wrap'>
      <div className='flex gap-4 items-start w-full  flex-wrap p-2'>
        <div className='px-2 py-4 flex flex-wrap w-[10.2rem] gap-3 gap-y-8 bg-white shadow-sm border border-blue-950 rounded-lg'>
          {seats.map((seat, idx) => (
            <Checkbox
              checked={seatCheckedList.includes(seat.id)}
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
