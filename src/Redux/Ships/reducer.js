import { ships_request, ships_success, ships_failure } from './types'

const ships_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const ships_reducer = (state = ships_state, action) => {
  switch (action.type) {
    case ships_request:
      return {
        ...state,
        isloading: true
      }
    case ships_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case ships_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default ships_reducer
