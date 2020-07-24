import { ships_ind_request, ships_ind_success, ships_ind_failure } from './types'

const ships_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const ships_ind_reducer = (state = ships_state, action) => {
  switch (action.type) {
    case ships_ind_request:
      return {
        ...state,
        isloading: true
      }
    case ships_ind_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case ships_ind_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default ships_ind_reducer
