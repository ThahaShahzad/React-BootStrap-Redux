import { models_get_request, models_get_success, models_get_failure } from './types'
import axios from 'axios'

export const modelsGetRequest = () => {
  return {
    type: models_get_request
  }
}
export const modelsGetSuccess = (data) => {
  return {
    type: models_get_success,
    payload: data
  }
}
export const modelGetFailure = (error) => {
  return {
    type: models_get_failure,
    payload: error
  }
}

export const getModels = () => {
  let host = process.env.REACT_APP_LOCALHOST
  if (process.env.NODE_ENV==='production') {
      host = process.env.REACT_APP_LOCALHOST_BI
  }
  let url = host + 'models'
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(modelsGetRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(modelsGetSuccess(data))
      })
      .catch((error) => {
        dispatch(modelGetFailure(error.message))
      })
  }
}
