import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './Redux/store'
import { Provider } from 'react-redux'
import { getComms } from './Redux/Comms/actions'
import { getShips } from './Redux/Ships/actions'
import { getModels } from './Redux/Models/actions'
import { getEndpoints } from './Redux/Endpoints/actions'
import { getChannels } from './Redux/Channels/actions'

store.dispatch(getComms())
store.dispatch(getShips())
store.dispatch(getModels())
store.dispatch(getChannels())
store.dispatch(getEndpoints())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
