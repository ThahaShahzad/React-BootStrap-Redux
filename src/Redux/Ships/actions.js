import { ships_request, ships_success, ships_failure } from './types'
import axios from 'axios'

export const shipsRequest = () => {
  return {
    type: ships_request
  }
}
export const shipsSuccess = (data) => {
  return {
    type: ships_success,
    payload: data
  }
}
export const shipsFailure = (error) => {
  return {
    type: ships_failure,
    payload: error
  }
}

export const getShips = () => {
  let url = process.env.REACT_APP_LOCALHOST + 'ship_filters'
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(shipsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(shipsSuccess(data))
      })
      .catch((error) => {
        dispatch(shipsFailure(error.message))
      })
  }
}
