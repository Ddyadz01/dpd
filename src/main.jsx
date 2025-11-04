import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router/dom'

import routes from './router/router'

import './index.css'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
