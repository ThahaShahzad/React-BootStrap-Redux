import React from 'react'
import './App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/Home Page/home_page'
import Header from './Components/Header/header'
import CommunicatorAdminPage from './Components/Communicator Admin Page/communicator_admin_page'
import Error from './Components/Error Page/error'
import ModelsTablePage from './Components/Models Table Page/models_table_page'
import ChannelsTablePage from './Components/Channels Table Page/channels_table_page'
import EndpointsTablePage from './Components/Endpoints Table Page/endpoints_table_page'
import ShipsPage from './Components/Ships Page/ships_page'
import ShipAdminPage from './Components/Ship Admin Page/ship_admin_page'
import CommsPage from './Components/Comms Page/comms_page'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/searchcoms' component={CommsPage} exact />
          <Route path='/searchships' component={ShipsPage} exact />
          <Route path='/searchmodels' component={ModelsTablePage} exact />
          <Route path='/searchchannels' component={ChannelsTablePage} exact />
          <Route path='/searchendpoints' component={EndpointsTablePage} exact />
          <Route path='/comAdmin/:id' component={CommunicatorAdminPage} />
          <Route path='/shipAdmin/:id' component={ShipAdminPage} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
