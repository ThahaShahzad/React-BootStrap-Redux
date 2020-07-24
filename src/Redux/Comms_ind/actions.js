import { comms_ind_request, comms_ind_success, comms_ind_failure } from './types'
import axios from 'axios'

export const commsIndRequest = () => {
  return {
    type: comms_ind_request
  }
}
export const commsIndSuccess = (data) => {
  return {
    type: comms_ind_success,
    payload: data
  }
}
export const commsIndFailure = (error) => {
  return {
    type: comms_ind_failure,
    payload: error
  }
}

export const getCommsInd = (params) => {
  let url = `${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/communicators/${params}`
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(commsIndRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(commsIndSuccess(data))
      })
      .catch((error) => {
        dispatch(commsIndFailure(error.message))
      })
  }
}
