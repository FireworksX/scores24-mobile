import React from 'react'
import ReactDOM from 'react-dom'
import RootRoute from './routes/RootRoute/RootRoute'
import 'virtual:svg-icons-register'
import { configureRouter } from 'src/router/configureRouter'
import { RouterProvider } from 'react-router5'
import { Provider } from 'urql'
import { createApiClients } from './utils/createApiClients'

const router = configureRouter()
router.start()

const { urqlClient } = createApiClients('')

ReactDOM.render(
  <React.StrictMode>
    <Provider value={urqlClient}>
      <RouterProvider router={router}>
        <RootRoute />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
