import './App.css'
import 'react-clock/dist/Clock.css'
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
import AdminHome from './pages/admin/AdminHome'
import HandleAdminRedirect from './auth/HandleAdminRedirect'

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route element={<HandleAuthRedirect />}>
          <Route index element={<Home />} errorElement={<Error />} />
          <Route element={<HandleAdminRedirect />}>
            <Route
              path='/admin'
              element={<AdminHome />}
              errorElement={<Error />}
            />
          </Route>
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
