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
  let url = process.env.REACT_APP_LOCALHOST + 'subs/' + id
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
