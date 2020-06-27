import { positions_request, positions_success, positions_failure } from './types'

const positions_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const positions_reducer = (state = positions_state, action) => {
  switch (action.type) {
    case positions_request:
      return {
        ...state,
        isloading: true
      }
    case positions_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case positions_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default positions_reducer
