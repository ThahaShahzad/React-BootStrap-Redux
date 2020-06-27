import { comms_request, comms_success, comms_failure } from './types'

const comms_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const comms_reducer = (state = comms_state, action) => {
  switch (action.type) {
    case comms_request:
      return {
        ...state,
        isloading: true
      }
    case comms_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case comms_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default comms_reducer
