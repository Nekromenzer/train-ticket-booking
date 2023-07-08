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
//context provider
import AppDataProvider from './context/provider/AppDataProvider'

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route element={<HandleAuthRedirect />}>
          <Route index element={<Home />} errorElement={<Error />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Route>
    )
  )
  return (
    <ConfigProvider theme={antThemeConfig}>
      <AppDataProvider>
        <RouterProvider router={router} />
      </AppDataProvider>
    </ConfigProvider>
  )
}

export default App
