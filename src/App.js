import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/Home Page/home_page'
import Header from './Components/Header/header'
import Initializer from './Components/initializer'
import CommunicatorAdminPage from './Components/Communicator Admin Page/communicator_admin_page'
import Error from './Components/Error Page/error'
import CommsTablePage from './Components/Comms Table Page/comms_table_page'
import Loader from 'react-loader-spinner'
import ModelsTablePage from './Components/Models Table Page/models_table_page'
import ChannelsTablePage from './Components/Channels Table Page/channels_table_page'
import EnpointsTablePage from './Components/Endpoints Table Page/enpoints_table_page'
import ShipsPage from './Components/Ships Page/ships_page'
import ShipAdminPage from './Components/Ship Admin Page/ship_admin_page'

function App() {
  const models_init = useSelector((state) => state.models.loaded)
  const models_error = useSelector((state) => state.models.error)
  return (
    <Router>
      <div className='App'>
        <Header />
        {!models_init && models_error === '' && (
          <>
            <Initializer /> <Loader />
          </>
        )}
        {models_init && (
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/searchcoms' component={CommsTablePage} exact />
            <Route path='/searchships' component={ShipsPage} exact />
            <Route path='/searchmodels' component={ModelsTablePage} exact />
            <Route path='/searchchannels' component={ChannelsTablePage} exact />
            <Route path='/searchenpoints' component={EnpointsTablePage} exact />
            <Route path='/comAdmin/:id' component={CommunicatorAdminPage} />
            <Route path='/shipAdmin/:id' component={ShipAdminPage} />
            <Route component={Error} />
          </Switch>
        )}
        {models_error !== '' && <h1>Init Error</h1>}
      </div>
    </Router>
  )
}

export default App
