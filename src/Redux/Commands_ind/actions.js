import { commands_request, commands_success, commands_failure } from './types'
import axios from 'axios'

export const commandsRequest = () => {
  return {
    type: commands_request
  }
}
export const commandsSuccess = (data) => {
  return {
    type: commands_success,
    payload: data
  }
}
export const commandsFailure = (error) => {
  return {
    type: commands_failure,
    payload: error
  }
}

export const getCommands = (id) => {
  let url = 'http://localhost:5001/commands/' + id
  console.log(url)
  const options = {
    method: 'GET',
    url: url
  }
  return (dispatch) => {
    dispatch(commandsRequest())
    axios(options)
      .then((response) => {
        const data = response.data
        dispatch(commandsSuccess(data))
      })
      .catch((error) => {
        dispatch(commandsFailure(error.message))
      })
  }
}
