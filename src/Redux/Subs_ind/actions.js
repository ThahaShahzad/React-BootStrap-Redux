import { subs_request, subs_success, subs_failure } from './types'
import axios from 'axios'

export const subsRequest = () => {
  return {
    type: subs_request
  }
}
export const subsSuccess = (data) => {
  return {
    type: subs_success,
    payload: data
  }
}
export const subsFailure = (error) => {
  return {
    type: subs_failure,
    payload: error
  }
}

export const getSubs = (id) => {
  let host = process.env.REACT_APP_LOCALHOST
  if (process.env.NODE_ENV==='production') {
      host = process.env.REACT_APP_LOCALHOST_BI
  }
  let url = host + 'subs/' + id
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(subsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(subsSuccess(data))
      })
      .catch((error) => {
        dispatch(subsFailure(error.message))
      })
  }
}
