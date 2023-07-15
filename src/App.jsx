import './App.css'
import 'react-clock/dist/Clock.css'
import { ConfigProvider } from 'antd'
import { antThemeConfig } from '../antThemeConfig'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes
} from 'react-router-dom'
import { Error, Home, Login, AdminHome } from './pages'
// redirect components
import HandleAuthRedirect from './auth/HandleAuthRedirect'
import HandleAdminRedirect from './auth/HandleAdminRedirect'
//context provider
import AppDataProvider from './context/provider/AppDataProvider'
import AuthProvider from './context/provider/AuthProvider'

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<HandleAuthRedirect />}>
          <Route path='/' element={<Home />} errorElement={<Error />} />
        </Route>
        <Route element={<HandleAuthRedirect />}>
          <Route
            path='/admin'
            element={<AdminHome />}
            errorElement={<Error />}
          />
        </Route>
        <Route path='/login' element={<Login />} />
      </Route>
    )
  )
  return (
    <ConfigProvider theme={antThemeConfig}>
      <AppDataProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </AppDataProvider>
    </ConfigProvider>
  )
}

export default App
