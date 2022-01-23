import React from 'react'
import ReactDOM from 'react-dom'
import RootRoute from './routes/RootRoute/RootRoute'
import 'virtual:svg-icons-register'
import { configureRouter } from 'src/router/configureRouter'
import { RouterProvider } from 'react-router5'

const router = configureRouter()
router.start()

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <RootRoute />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
