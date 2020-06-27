import { combineReducers } from 'redux'
import models_reducer from './Models/reducer'
import channels_reducer from './Channels/reducer'
import comms_reducer from './Comms/reducer'
import endpoints_reducer from './Endpoints/reducer'
import positions_reducer from './Positions_ind/reducer'
import subs_reducer from './Subs_ind/reducer'
import commands_reducer from './Commands_ind/reducer'

const root_reducer = combineReducers({
  models: models_reducer,
  channels: channels_reducer,
  comms: comms_reducer,
  endpoints: endpoints_reducer,
  positions: positions_reducer,
  subs: subs_reducer,
  commands: commands_reducer
})

export default root_reducer