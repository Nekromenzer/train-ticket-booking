import { Checkbox, Badge } from 'antd'
import { useEffect, useState } from 'react'
import { CommonTag } from '../../components'
import { Statistic } from 'antd'
import { GiPriceTag } from 'react-icons/gi'
// images
import {
  firstClassSeat,
  secondClassSeat,
  thirdClassSeat
} from '../../../public/img'
import { BsArrowRight } from 'react-icons/bs'
import data from '../../data/pages/userLevel'

const SeatBooking = ({
  noOfPassengers,
  selectedTrain,
  level,
  setBookingState
}) => {
  // selected class
  const [selectedClass, setSelectedClass] = useState(null)
  // selected seats
  const [seatCheckedList, setSeatCheckedList] = useState([])
  // selected price
  const [selectedPrice, setSelectedPrice] = useState(0)

  const getUserLevelData = data?.levels[level - 1]

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
  console.log(selectedTrain)
  const windowSeats = [1, 4, 5, 8, 9, 12, 13, 16, 17, 20]

  const summaryObj = [
    { name: 'Train Name & No', val: selectedTrain?.trainName },
    { name: 'Start Station', val: 'Colombo' },
    { name: 'End Station', val: 'Kandy' },
    { name: 'Departure Date', val: '2012/07/22' },
    {
      name: 'Time Start -> End',
      val: `${selectedTrain?.departs} - ${selectedTrain?.arrives}`
    },
    { name: 'No of Passengers', val: `${noOfPassengers} Passengers` },
    {
      name: 'Train Class Selected',
      val:
        selectedClass !== null
          ? `${selectedClass}${
              selectedClass === 1
                ? 'st'
                : selectedClass === 2
                ? 'nd'
                : selectedClass === 2
                ? 'rd'
                : 'th'
            } Class`
          : ''
    },
    {
      name: 'Price One Person',
      val: selectedTrain?.price[selectedClass - 1]?.price
    }
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

  const CompTitle = ({ children, summary }) => {
    return (
      <div className='px-1'>
        <p
          className={`${
            summary && 'font-bold text-sky-700'
          } text-base mb-4 antialiased`}
        >
          {children}
        </p>
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
                  className={`h-32 flex flex-col justify-between  w-full min-w-full rounded-lg shadow-sm border-2 border-sky-200 cursor-pointer p-2  hover:border-sky-400 hover:shadow-md ${
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

  const renderSummaryStats = () => {
    return (
      <div className='flex flex-col items-center'>
        <CompTitle summary>Summary</CompTitle>
        <div className='w-full bg-sky-100 h-fit rounded-md px-3 py-4 shadow-md flex flex-col gap-2 border-2 border-sky-800'>
          {summaryObj.map((item, idx) => (
            <div className='flex items-center gap-3' key={idx}>
              <div className='font-semibold antialiased min-w-[8rem]'>
                {item.name}
              </div>
              <BsArrowRight className='w-6 ' />
              <div className='font-normal antialiased text-left'>
                {item.val}
              </div>
            </div>
          ))}
          <Badge.Ribbon
            text={`${getUserLevelData?.discount}%`}
            placement='end'
            className='mt-[-1rem]'
            color='#de263b'
          >
            <div className='flex items-center justify-between gap-3 bg-gray-900 p-2 text-white tracking-wide rounded-md'>
              <GiPriceTag className='text-white' />
              <div className='flex items-center justify-end gap-3'>
                <div className='tracking-wide font-mono text-base'>
                  Total Price ={' '}
                </div>
                <div className='tracking-wide font-mono w-[6rem] text-base'>
                  {selectedPrice} LKR
                </div>
              </div>
            </div>
          </Badge.Ribbon>
          <div
            className={`${
              (seatCheckedList.length !== noOfPassengers ||
                selectedClass === null) &&
              'seat-booking-disable-btn'
            } bg-sky-500 mt-3 tracking-wide group rounded-md p-1 text-base text-white font-semi-bold font-monts subpixel-antialiased flex items-center justify-center gap-4 cursor-pointer hover:bg-sky-800 hover:ease-linear hover:duration-200`}
            onClick={() => setBookingState(3)}
          >
            Proceed to Payment
            <img
              width='25'
              height='25'
              src='https://img.icons8.com/color/25/card-in-use.png'
              alt='card-in-use'
              className='group-hover:animate-pulse group-hover:ml-10 group-hover:ease-in-out group-hover:duration-500'
            />
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const totalPrice =
      selectedTrain?.price[selectedClass - 1]?.price * noOfPassengers
    const getDiscount = totalPrice * (getUserLevelData?.discount / 100)

    if (selectedClass === null) {
      setSelectedPrice(0)
    } else {
      setSelectedPrice(totalPrice - getDiscount)
    }
  }, [
    selectedClass,
    noOfPassengers,
    selectedTrain?.price,
    getUserLevelData?.discount
  ])

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
      <div className='w-full lg:w-1/3'>
        {/* note - render as func instead of comp to prevent rerender when data flow */}
        {renderSummaryStats()}
      </div>
    </div>
  )
}

export default SeatBooking
