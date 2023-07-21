import { Collapse } from 'antd'
import data from '../../data/pages/faqSection'

const FaqSection = () => {
  const { Panel } = Collapse
  return (
    <div className='p-2 rounded-lg lg:px-8'>
      <h2 className='text-2xl mt-2 mb-8 text-black'>{data.header}</h2>
      <div className='lg:max-h-[85vh] overflow-y-auto'>
        {data.faq.map((item, idx) => (
          <Collapse
            accordion
            className='border-sky-900 bg-blue-50 shadow-sm mb-6 mr-5'
            key={idx}
          >
            <Panel header={item.question} key={idx}>
              <p className=' antialiased '>{item.answer}</p>
            </Panel>
          </Collapse>
        ))}
      </div>
    </div>
  )
}

export default FaqSection
