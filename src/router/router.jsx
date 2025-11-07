import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home'
import App from '../pages/App'
import Start from '../pages/Loading/Start'
import Intro from '../pages/Loading/Intro'
import Checking from '../pages/Loading/Checking/Checking'
import NotFound from '../pages/NotFound/NotFoundPage.jsx'
import { EmailPage } from '../pages/Loading/Email/Email.jsx'
import { DriverCheck } from './../pages/Loading/DriverCheck/DriverCheck'
import { Intercity } from '../pages/Loading/Intercity/Intercity.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: '*', Component: NotFound },
      {
        path: '/car-loading',
        Component: Start,
        children: [
          { index: true, Component: Intro },
          { path: 'checking', Component: Checking },
          { path: 'email', Component: EmailPage },
          { path: 'driver-check', Component: DriverCheck },
          { path: 'intercity', Component: Intercity },
        ],
      },
    ],
  },
])

export default routes
