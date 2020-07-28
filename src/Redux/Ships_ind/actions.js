import * as types from './types'
import axios from 'axios'

export const shipsIndRequest = () => {
  return {
    type: types.ships_ind_request
  }
}
export const shipsIndSuccess = (data) => {
  return {
    type: types.ships_ind_success,
    payload: data
  }
}
export const shipsIndFailure = (error) => {
  return {
    type: types.ships_ind_failure,
    payload: error
  }
}

export const shipsIndIHSMovmentRequest = () => {
  return {
    type: types.ships_ind_IHSMovment_request
  }
}
export const shipsIndIHSMovmentSuccess = (data) => {
  return {
    type: types.ships_ind_IHSMovment_success,
    payload: data
  }
}
export const shipsIndIHSMovmentFailure = (error) => {
  return {
    type: types.ships_ind_IHSMovment_failure,
    payload: error
  }
}

export const shipsIndMmsiHistoryRequest = () => {
  return {
    type: types.ships_ind_mmsiHistory_request
  }
}
export const shipsIndMmsiHistorySuccess = (data) => {
  return {
    type: types.ships_ind_mmsiHistory_success,
    payload: data
  }
}
export const shipsIndMmsiHistoryFailure = (error) => {
  return {
    type: types.ships_ind_IHSMovment_failure,
    payload: error
  }
}

export const shipsIndPortIspecRequest = () => {
  return {
    type: types.ships_ind_portIspec_request
  }
}
export const shipsIndPortIspecSuccess = (data) => {
  return {
    type: types.ships_ind_portIspec_success,
    payload: data
  }
}
export const shipsIndPortIspecFailure = (error) => {
  return {
    type: types.ships_ind_portIspec_failure,
    payload: error
  }
}

export const shipsIndAISRequest = () => {
  return {
    type: types.ships_ind_AIS_request
  }
}
export const shipsIndAISSuccess = (data) => {
  return {
    type: types.ships_ind_AIS_success,
    payload: data
  }
}
export const shipsIndAISFailure = (error) => {
  return {
    type: types.ships_ind_AIS_failure,
    payload: error
  }
}

export const shipsIndPSPRequest = () => {
  return {
    type: types.ships_ind_PSP_request
  }
}
export const shipsIndPSPSuccess = (data) => {
  return {
    type: types.ships_ind_PSP_success,
    payload: data
  }
}
export const shipsIndPSPFailure = (error) => {
  return {
    type: types.ships_ind_PSP_failure,
    payload: error
  }
}

export const shipsIndPurpleTracRequest = () => {
  return {
    type: types.ships_ind_PurpleTrac_request
  }
}
export const shipsIndPurpleTracSuccess = (data) => {
  return {
    type: types.ships_ind_PurpleTrac_success,
    payload: data
  }
}
export const shipsIndPurpleTracFailure = (error) => {
  return {
    type: types.ships_ind_PurpleTrac_failure,
    payload: error
  }
}

export const shipsIndSMHRequest = () => {
  return {
    type: types.ships_ind_SMH_request
  }
}
export const shipsIndSMHSuccess = (data) => {
  return {
    type: types.ships_ind_SMH_success,
    payload: data
  }
}
export const shipsIndSMHFailure = (error) => {
  return {
    type: types.ships_ind_SMH_failure,
    payload: error
  }
}

export const shipsIndSmhVisitsRequest = () => {
  return {
    type: types.ships_ind_smhVisits_request
  }
}
export const shipsIndSmhVisitsSuccess = (data) => {
  return {
    type: types.ships_ind_smhVisits_success,
    payload: data
  }
}
export const shipsIndSmhVisitsFailure = (error) => {
  return {
    type: types.ships_ind_smhVisits_failure,
    payload: error
  }
}

export const shipsIndPortVisitsRequest = () => {
  return {
    type: types.ships_ind_portVisits_request
  }
}
export const shipsIndPortVisitsSuccess = (data) => {
  return {
    type: types.ships_ind_portVisits_success,
    payload: data
  }
}
export const shipsIndPortVisitsFailure = (error) => {
  return {
    type: types.ships_ind_portVisits_failure,
    payload: error
  }
}

export const shipsIndSGARequest = () => {
  return {
    type: types.ships_ind_SGA_request
  }
}
export const shipsIndSGASuccess = (data) => {
  return {
    type: types.ships_ind_SGA_success,
    payload: data
  }
}
export const shipsIndSGAFailure = (error) => {
  return {
    type: types.ships_ind_SGA_failure,
    payload: error
  }
}

export const getShipsInd = (params) => {
  let url = `${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/sis/${params}`
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

export const getShipsIndData = (imo_id) => {
  const shipMovement = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/ship_movement/&imo_id=${imo_id}`)
  const mmsiHistory = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/mmsi_history/&imo_id=${imo_id}`)
  const portInspection = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/inspections/&imo_id=${imo_id}`)
  const Ais = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/ais_status/&imo_id=${imo_id}`)
  const Psp = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/psp_ships/&imo_id=${imo_id}`)
  const purpleTrac = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/pt/&imo_id=${imo_id}`)
  const Smh = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/smh/&imo_id=${imo_id}`)
  const SmhVisits = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/smh_visits/&imo_id=${imo_id}`)
  const portVisits = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/port_visits/&imo_id=${imo_id}`)
  const Sga = axios.get(`${process.env.REACT_APP_LOCALHOST}bi/?path=api/v1/sga/&imo_id=${imo_id}`)
  return (dispatch) => {
    dispatch(shipsIndIHSMovmentRequest())
    dispatch(shipsIndMmsiHistoryRequest())
    dispatch(shipsIndPortIspecRequest())
    dispatch(shipsIndAISRequest())
    dispatch(shipsIndPSPRequest())
    dispatch(shipsIndPurpleTracRequest())
    dispatch(shipsIndSMHRequest())
    dispatch(shipsIndSmhVisitsRequest())
    dispatch(shipsIndPortVisitsRequest())
    dispatch(shipsIndSGARequest())
    axios
      .all([shipMovement, mmsiHistory, portInspection, Ais, Psp, purpleTrac, Smh, SmhVisits, portVisits, Sga])
      .then(
        axios.spread((...responses) => {
          const shipMovementResponse = responses[0].data
          dispatch(shipsIndIHSMovmentSuccess(shipMovementResponse))
          const mmsiHistoryResponse = responses[1].data
          dispatch(shipsIndMmsiHistorySuccess(mmsiHistoryResponse))
          const portInspectionResponse = responses[2].data
          dispatch(shipsIndPortIspecSuccess(portInspectionResponse))
          const AisResponse = responses[3].data
          dispatch(shipsIndAISSuccess(AisResponse))
          const PspResponse = responses[4].data
          dispatch(shipsIndPSPSuccess(PspResponse))
          const purpleTracResponse = responses[5].data
          dispatch(shipsIndPurpleTracSuccess(purpleTracResponse))
          const SmhResponse = responses[6].data
          dispatch(shipsIndSMHSuccess(SmhResponse))
          const SmhVisitsResponse = responses[7].data
          dispatch(shipsIndSmhVisitsSuccess(SmhVisitsResponse))
          const portVisitsResponse = responses[8].data
          dispatch(shipsIndPortVisitsSuccess(portVisitsResponse))
          const SgaResponse = responses[9].data
          dispatch(shipsIndSGASuccess(SgaResponse))
        })
      )
      .catch((errors) => {
        dispatch(shipsIndIHSMovmentFailure(errors.message))
        dispatch(shipsIndMmsiHistoryFailure(errors.message))
        dispatch(shipsIndPortIspecFailure(errors.message))
        dispatch(shipsIndAISFailure(errors.message))
        dispatch(shipsIndPSPFailure(errors.message))
        dispatch(shipsIndPurpleTracFailure(errors.message))
        dispatch(shipsIndSMHFailure(errors.message))
        dispatch(shipsIndSmhVisitsFailure(errors.message))
        dispatch(shipsIndPortVisitsFailure(errors.message))
        dispatch(shipsIndSGAFailure(errors.message))
      })
  }
}
