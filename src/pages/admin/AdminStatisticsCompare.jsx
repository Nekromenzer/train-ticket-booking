import { useState } from 'react'
import { CommonForm } from '../../components'
import CommonCharts from '../../components/common/CommonCharts'
import data from '../../data/pages/admin'
import dayjs from 'dayjs'

const AdminStatisticsCompare = ({ revenueData, bookingData }) => {
  const [formData, setFormData] = useState({
    firstMonth: 1,
    secondMonth: 8,
    revenue: true,
    bookings: true
  })

    // Filter revenue data for the specified months
    const filteredRevenue = revenueData?.filter((item) => {
      const month = new Date(item.month).getMonth() + 1; // Extract the month number from the date
      return month >= formData?.firstMonth && month <= formData?.secondMonth;
    });
  
    // Filter bookings data for the specified months
    const filteredBookings = bookingData.filter((item) => {
      const month = new Date(item.month).getMonth() + 1; // Extract the month number from the date
      return month >= formData?.firstMonth && month <= formData?.secondMonth;
    });

  const mergedData = filteredRevenue?.map(revenueItem => {
    const bookingItem = filteredBookings?.find(
      booking => booking.month === revenueItem.month
    )
    if (!formData.revenue) {
      return {
        month: dayjs(revenueItem.month).format('MMM'),
        bookings: bookingItem ? bookingItem.count : 0
      }
    }
    if (!formData.bookings) {
      return {
        month: dayjs(revenueItem.month).format('MMM'),
        revenue: revenueItem.total
      }
    }
    return {
      month: dayjs(revenueItem.month).format('MMM'),
      revenue: revenueItem.total,
      bookings: bookingItem ? bookingItem.count : 0
    }
  })

  return (
    <div className='w-full flex items-center flex-wrap lg:pt-4'>
      <div className='w-full lg:w-4/5 lg:py-2 lg:pr-8'>
        <CommonCharts
          type='duelLine'
          data={mergedData}
          xField='month'
          yField={['revenue', 'bookings']}
          firstLineOpacity={formData.revenue ? 1 : 0}
          secondLineOpacity={formData.bookings ? 0.5 : 0}
        />
      </div>
      <div className='w-full lg:w-1/5'>
        <h4 className='text-xl mb-4'>Compare statistics</h4>
        <CommonForm
          fields={data.filterForm}
          requiredMark={false}
          noSubmitBtn
          className='flex flex-wrap gap-2'
          initialValues={formData}
          onValChangeCallback={changedValues => {
            setFormData({ ...formData, ...changedValues })
          }}
        />
      </div>
    </div>
  )
}

export default AdminStatisticsCompare
