import './App.css'
import { ConfigProvider } from 'antd'
import Sample from './components/sample'
import { antThemeConfig } from '../antThemeConfig'

function App () {
  return (
    <ConfigProvider theme={antThemeConfig}>
      <div>
        <Sample />
      </div>
    </ConfigProvider>
  )
}

export default App
