import { CommonForm } from '../../components'
import CommonCharts from '../../components/common/CommonCharts'
import data from '../../data/pages/admin'

const AdminStatisticsCompare = () => {
  const sampleData = [
    {
      month: 'Jan',
      value: 3,
      count: 10
    },
    {
      month: 'Feb',
      value: 4,
      count: 4
    },
    {
      month: 'Mar',
      value: 3.5,
      count: 5
    },
    {
      month: 'Apr',
      value: 5,
      count: 5
    },
    {
      month: 'May',
      value: 4.9,
      count: 4.9
    },
    {
      month: 'Jun',
      value: 6,
      count: 35
    },
    {
      month: 'Jul',
      value: 7,
      count: 7
    },
    {
      month: 'Aug',
      value: 9,
      count: 1
    }
  ]
  return (
    <div className='w-full flex items-center flex-wrap lg:pt-4'>
      <div className='w-full lg:w-4/5 lg:py-2 lg:pr-8'>
        <CommonCharts
          type='duelLine'
          data={sampleData}
          xField='month'
          yField={['value', 'count']}
        />
      </div>
      <div className='w-full lg:w-1/5'>
        <h4 className='text-xl mb-4'>Compare statistics</h4>
        <CommonForm
          fields={data.filterForm}
          requiredMark={false}
          noSubmitBtn
          className='flex flex-wrap gap-2'
        />
      </div>
    </div>
  )
}

export default AdminStatisticsCompare
