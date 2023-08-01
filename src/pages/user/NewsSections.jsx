import  { useState } from 'react'
import { Segmented } from 'antd'
import data from '../../data/components/news'

const NewsSections = () => {
  const [value, setValue] = useState('All')
  return (
    <>
      <h3 className='mb-2 text-blue-900'>{data.header}</h3>
      <Segmented
        options={data.newsCategories}
        value={value}
        onChange={setValue}
        size='small'
      />
      <div className='overflow-y-auto h-auto lg:h-[19.5vh] scroll-smooth snap-y scroll-pt-2'>
        <div className='mt-4 flex flex-col gap-3'>
          {data.newsData
            .filter(item => (value === 'All' ? item : item.category === value))
            .map((item, idx) => (
              <div
                key={idx}
                className='flex flex-col gap-1 bg-gradient-to-l from-slate-50 via-emerald-50 to-cyan-50 py-1 px-3 mx-3 rounded-md cursor-pointer border hover:border-sky-500 hover:shadow-sm snap-start'
              >
                <span className='text-slate-700 text-base w-full'>
                  {item.title} -{' '}
                  <span className='text-[0.8rem] text-left'>{item.date}</span>
                </span>
                <span className='text-sm text-gray-400 font-[400]my-1'>
                  {item.content}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default NewsSections
