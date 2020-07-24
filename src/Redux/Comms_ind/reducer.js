import { comms_ind_request, comms_ind_success, comms_ind_failure } from './types'

const comms_ind_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const comms_ind_reducer = (state = comms_ind_state, action) => {
  switch (action.type) {
    case comms_ind_request:
      return {
        ...state,
        isloading: true
      }
    case comms_ind_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case comms_ind_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default comms_ind_reducer
