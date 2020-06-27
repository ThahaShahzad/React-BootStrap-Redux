import { commands_request, commands_success, commands_failure } from './types'

const commands_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const commands_reducer = (state = commands_state, action) => {
  switch (action.type) {
    case commands_request:
      return {
        ...state,
        isloading: true
      }
    case commands_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case commands_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default commands_reducer
