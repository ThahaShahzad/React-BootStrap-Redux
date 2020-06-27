import { endpoints_request, endpoints_success, endpoints_failure } from './types'

const endpoints_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const endpoints_reducer = (state = endpoints_state, action) => {
  switch (action.type) {
    case endpoints_request:
      return {
        ...state,
        isloading: true
      }
    case endpoints_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case endpoints_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default endpoints_reducer
