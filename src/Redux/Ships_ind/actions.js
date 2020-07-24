import { ships_ind_request, ships_ind_success, ships_ind_failure } from './types'
import axios from 'axios'

export const shipsIndRequest = () => {
  return {
    type: ships_ind_request
  }
}
export const shipsIndSuccess = (data) => {
  return {
    type: ships_ind_success,
    payload: data
  }
}
export const shipsIndFailure = (error) => {
  return {
    type: ships_ind_failure,
    payload: error
  }
}

export const getShipsInd = (params) => {
  let url = `${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/sis/${params}`
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(shipsIndRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(shipsIndSuccess(data))
      })
      .catch((error) => {
        dispatch(shipsIndFailure(error.message))
      })
  }
}
