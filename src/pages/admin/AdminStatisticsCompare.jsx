import { CommonForm } from '../../components'
import CommonCharts from '../../components/common/CommonCharts'
import data from '../../data/pages/admin'

const AdminStatisticsCompare = () => {
  return (
    <div className='w-full flex items-center flex-wrap '>
      <div className='w-full lg:w-2/3'>
        <CommonCharts type='line' />
      </div>
      <div className='w-full lg:w-1/3 '>
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
