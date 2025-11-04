import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home'
import App from '../pages/App'
import Start from '../pages/Loading/Start'
import Intro from '../pages/Loading/Intro'
import Checking from '../pages/Loading/Checking/Checking'

const routes = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: '/car-loading',
        Component: Start,
        children: [
          { index: true, Component: Intro },
          { path: 'checking', Component: Checking },
        ],
      },
    ],
  },
])

export default routes
