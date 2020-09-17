import { positions_request, positions_success, positions_failure } from './types'
import axios from 'axios'

export const positionsRequest = () => {
  return {
    type: positions_request
  }
}
export const positionsSuccess = (data) => {
  return {
    type: positions_success,
    payload: data
  }
}
export const positionsFailure = (error) => {
  return {
    type: positions_failure,
    payload: error
  }
}

export const getPositions = (id) => {
  let host = process.env.REACT_APP_LOCALHOST
  if (process.env.NODE_ENV==='production') {
      host = process.env.REACT_APP_LOCALHOST_BI
  }
  let url = host + 'positions/' + id
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(positionsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(positionsSuccess(data))
      })
      .catch((error) => {
        dispatch(positionsFailure(error.message))
      })
  }
}
