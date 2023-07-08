import { TwoColSideBar } from '../components'

const Home = () => {
  return (
    <TwoColSideBar
      sideBar
      content={<div className='bg-red-400'>home page content</div>}
    />
  )
}

export default Home
