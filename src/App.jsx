import './App.css'
import { ConfigProvider } from 'antd'
import { antThemeConfig } from '../antThemeConfig'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import { Error, Home, Login } from './pages'
import HandleAuthRedirect from './auth/HandleAuthRedirect'
import Dashboard from './components/Dashboard'

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Dashboard />}>
        <Route element={<HandleAuthRedirect />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Route>
    )
  )
  return (
    <ConfigProvider theme={antThemeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
