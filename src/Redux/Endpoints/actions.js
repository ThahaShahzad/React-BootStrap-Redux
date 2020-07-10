import { endpoints_request, endpoints_success, endpoints_failure } from './types'
import axios from 'axios'

export const endpointsRequest = () => {
  return {
    type: endpoints_request
  }
}
export const endpointsSuccess = (data) => {
  return {
    type: endpoints_success,
    payload: data
  }
}
export const endpointsFailure = (error) => {
  return {
    type: endpoints_failure,
    payload: error
  }
}

export const getEndpoints = () => {
  let url = process.env.REACT_APP_LOCALHOST + 'endpoints'
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(endpointsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(endpointsSuccess(data))
      })
      .catch((error) => {
        dispatch(endpointsFailure(error.message))
      })
  }
}
