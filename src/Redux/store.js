import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import root_reducer from './root_reducer'

const store = createStore(root_reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
