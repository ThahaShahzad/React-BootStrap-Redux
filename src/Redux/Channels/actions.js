import { channels_request, channels_success, channels_failure } from './types'
import axios from 'axios'

export const channelsRequest = () => {
  return {
    type: channels_request
  }
}
export const channelsSuccess = (data) => {
  return {
    type: channels_success,
    payload: data
  }
}
export const channelsFailure = (error) => {
  return {
    type: channels_failure,
    payload: error
  }
}

export const getChannels = () => {
  let url = process.env.REACT_APP_LOCALHOST + 'channels'
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(channelsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(channelsSuccess(data))
      })
      .catch((error) => {
        dispatch(channelsFailure(error.message))
      })
  }
}
