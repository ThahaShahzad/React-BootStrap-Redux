import { models_get_request, models_get_success, models_get_failure } from './types'

const models_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: ''
}

const models_reducer = (state = models_state, action) => {
  switch (action.type) {
    case models_get_request:
      return {
        ...state,
        isloading: true
      }
    case models_get_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload,
        error: ''
      }
    case models_get_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default models_reducer
