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

const SeatBooking = ({ noOfPassengers, selectedTrain }) => {
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

  const windowSeats = [1, 4, 5, 8, 9, 12, 13, 16, 17, 20]

  const onChange = e => {
    if (seatCheckedList.length <= noOfPassengers) {
      setSeatCheckedList(
        e.target.checked
          ? [...seatCheckedList, e.target.id]
          : seatCheckedList.filter(item => item !== e.target.id)
      )
    }
  }

  const CompTitle = ({ children }) => {
    return (
      <div className='px-1'>
        <p className='text-base mb-4 antialiased '>{children}</p>
      </div>
    )
  }

  const renderTrainClasses = () => {
    const getClassImage = id => {
      if (id === 1) return firstClassSeat
      if (id === 2) return secondClassSeat
      if (id === 3) return thirdClassSeat
    }
    return (
      <>
        <CompTitle>Select train class</CompTitle>
        <div className='w-fit flex flex-col justify-between gap-5 flex-grow'>
          {selectedTrain?.trainClass?.map((item, idx) => {
            return (
              <div
                key={idx}
                className='w-full'
                onClick={() => setSelectedClass(item?.id)}
              >
                <div
                  className={`h-32 flex flex-col justify-between bg-white w-full min-w-full rounded-lg shadow-sm border-2 border-sky-200 cursor-pointer p-2  hover:border-sky-400 hover:shadow-md ${
                    item?.id === selectedClass &&
                    'border-2 border-sky-700 bg-blue-100'
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
        </div>
      </>
    )
  }

  const renderSelectedSeats = () => {
    return (
      <>
        <CompTitle>Select seats & placement</CompTitle>
        <span className='text-sm antialiased text-slate-600'>
          You can select{' '}
          <span className='text-red-400'>
            {noOfPassengers - seatCheckedList.length}
          </span>{' '}
          seats
        </span>
        <div className='flex gap-4'>
          <div className='px-2 py-4 flex flex-wrap w-[10.2rem] gap-3 gap-y-8 bg-sky-50 shadow-md  border-blue-950 rounded-lg mt-4'>
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
          <div className='mt-6'>
            <div className='flex flex-col gap-5'>
              {seatCheckedList.map((seat, idx) => (
                <div key={idx} className='flex gap-2 items-center'>
                  <img
                    width='20'
                    height='20'
                    src='https://img.icons8.com/external-goofy-color-kerismaker/20/external-Seat-car-auto-parts-goofy-color-kerismaker.png'
                    alt='airplane-window-open'
                  />
                  <span className='text-sm font-roboto font-normal'>
                    Seat no -{' '}
                  </span>
                  <div className='flex items-center'>
                    <div className='w-6 font-mono text-base'>{seat}</div>
                    {windowSeats.includes(seat) && (
                      <img
                        width='20'
                        height='20'
                        src='https://img.icons8.com/ultraviolet/20/airplane-window-open.png'
                        alt='airplane-window-open'
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='flex gap-2 p-2'>
      <div className='w-full lg:w-1/3'>
        {/* note - render as func instead of comp to prevent rerender when data flow */}
        {renderTrainClasses()}
      </div>
      <div className='w-full lg:w-1/3'>
        {/* note - render as func instead of comp to prevent rerender when data flow */}
        {renderSelectedSeats()}
      </div>
      <div className='w-full lg:w-1/3'></div>
    </div>
  )
}

export default SeatBooking
