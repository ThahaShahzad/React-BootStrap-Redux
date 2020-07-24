import { comms_request, comms_success, comms_failure } from './types'
import axios from 'axios'

export const commsRequest = () => {
  return {
    type: comms_request
  }
}
export const commsSuccess = (data) => {
  return {
    type: comms_success,
    payload: data
  }
}
export const commsFailure = (error) => {
  return {
    type: comms_failure,
    payload: error
  }
}

export const getComms = () => {
  let url = process.env.REACT_APP_LOCALHOST + 'comms_filters'
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(commsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(commsSuccess(data))
      })
      .catch((error) => {
        dispatch(commsFailure(error.message))
      })
  }
}
