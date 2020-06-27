import { channels_request, channels_success, channels_failure } from './types'

const channels_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const channels_reducer = (state = channels_state, action) => {
  switch (action.type) {
    case channels_request:
      return {
        ...state,
        isloading: true
      }
    case channels_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case channels_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default channels_reducer
