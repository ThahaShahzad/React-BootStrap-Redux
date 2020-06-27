import { subs_request, subs_success, subs_failure } from './types'

const subs_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const subs_reducer = (state = subs_state, action) => {
  switch (action.type) {
    case subs_request:
      return {
        ...state,
        isloading: true
      }
    case subs_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case subs_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default subs_reducer
