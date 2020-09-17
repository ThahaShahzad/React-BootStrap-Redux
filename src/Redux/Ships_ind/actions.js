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

export const shipsIndPTShipRequest = () => {
  return {
    type: types.ships_ind_PTShip_request
  }
}
export const shipsIndPTShipSuccess = (data) => {
  return {
    type: types.ships_ind_PTShip_success,
    payload: data
  }
}
export const shipsIndPTShipFailure = (error) => {
  return {
    type: types.ships_ind_PTShip_failure,
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
    type: types.ships_ind_smhGaps_failure,
    payload: error
  }
}

export const shipsIndSmhGapsRequest = () => {
  return {
    type: types.ships_ind_smhGaps_request
  }
}
export const shipsIndSmhGapsSuccess = (data) => {
  return {
    type: types.ships_ind_smhGaps_success,
    payload: data
  }
}
export const shipsIndSmhGapsFailure = (error) => {
  return {
    type: types.ships_ind_smhGaps_failure,
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
  let host = process.env.REACT_APP_LOCALHOST
  if (process.env.NODE_ENV==='production') {
      host = process.env.REACT_APP_LOCALHOST_BI
  }
  let url = `${host}bi/?path=api/v1/sis/${params}`
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
  let host = process.env.REACT_APP_LOCALHOST
  if (process.env.NODE_ENV==='production') {
      host = process.env.REACT_APP_LOCALHOST_BI
  }
  console.log(host)
  const shipMovement = axios.get(`${host}bi/?path=api/v1/ship_movement/&imo_id=${imo_id}`)
  const mmsiHistory = axios.get(`${host}bi/?path=api/v1/mmsi_history/&imo_id=${imo_id}`)
  const portInspection = axios.get(`${host}bi/?path=api/v1/inspections/&imo_id=${imo_id}`)
  const Ais = axios.get(`${host}bi/?path=api/v1/ais_status/&imo_id=${imo_id}`)
  const Psp = axios.get(`${host}bi/?path=api/v1/psp_ships/&imo_id=${imo_id}`)
  const purpleTrac = axios.get(`${host}bi/?path=api/v1/pt/&imo_id=${imo_id}`)
  const Smh = axios.get(`${host}bi/?path=api/v1/smh/&imo_id=${imo_id}`)
  const SmhVisits = axios.get(`${host}bi/?path=api/v1/smh_visits/&imo_id=${imo_id}`)
  const SmhGaps = axios.get(`${host}bi/?path=api/v1/smh_gaps/&imo_id=${imo_id}`)
  const portVisits = axios.get(`${host}bi/?path=api/v1/port_visits/&imo_id=${imo_id}`)
  const Sga = axios.get(`${host}bi/?path=api/v1/sga/&imo_id=${imo_id}`)
  const ptShipData = axios.get(`${host}bi/?path=api/v1/pt_ship_history/&imo_id=${imo_id}`)
  return (dispatch) => {
    dispatch(shipsIndIHSMovmentRequest())
    dispatch(shipsIndMmsiHistoryRequest())
    dispatch(shipsIndPortIspecRequest())
    dispatch(shipsIndAISRequest())
    dispatch(shipsIndPSPRequest())
    dispatch(shipsIndPurpleTracRequest())
    dispatch(shipsIndSMHRequest())
    dispatch(shipsIndSmhVisitsRequest())
    dispatch(shipsIndSmhGapsRequest())
    dispatch(shipsIndPortVisitsRequest())
    dispatch(shipsIndSGARequest())
    dispatch(shipsIndPTShipRequest())

    axios
      .all([shipMovement, Psp, purpleTrac,
          Smh,  portVisits, Sga, ptShipData])
      .then(
        axios.spread((...responses) => {
          const shipMovementResponse = responses[0].data
          dispatch(shipsIndIHSMovmentSuccess(shipMovementResponse))
          const PspResponse = responses[1].data
          dispatch(shipsIndPSPSuccess(PspResponse))
          const purpleTracResponse = responses[2].data
          dispatch(shipsIndPurpleTracSuccess(purpleTracResponse))
          const SmhResponse = responses[3].data
          dispatch(shipsIndSMHSuccess(SmhResponse))
          const portVisitsResponse = responses[4].data
          dispatch(shipsIndSmhVisitsSuccess(portVisitsResponse))
          const SgaResponse = responses[5].data
          dispatch(shipsIndSGASuccess(SgaResponse))
          const PTShipResponse = responses[6].data
          dispatch(shipsIndPTShipSuccess(PTShipResponse))
        })
      )
      .catch((errors) => {
        dispatch(shipsIndIHSMovmentFailure(errors.message))
        dispatch(shipsIndPSPFailure(errors.message))
        dispatch(shipsIndPurpleTracFailure(errors.message))
        dispatch(shipsIndSMHFailure(errors.message))
        dispatch(shipsIndSmhVisitsFailure(errors.message))
        dispatch(shipsIndSGAFailure(errors.message))
        dispatch(shipsIndPTShipFailure(errors.message))
      })

    axios
      .all([mmsiHistory, portInspection, Ais, SmhVisits, SmhGaps, portVisits])
      .then(
        axios.spread((...responses) => {
          const mmsiHistoryResponse = responses[0].data
          dispatch(shipsIndMmsiHistorySuccess(mmsiHistoryResponse))
          const portInspectionResponse = responses[1].data
          dispatch(shipsIndPortIspecSuccess(portInspectionResponse))
          const AisResponse = responses[2].data
          dispatch(shipsIndAISSuccess(AisResponse))
          const SmhVisitsResponse = responses[3].data
          dispatch(shipsIndSmhVisitsSuccess(SmhVisitsResponse))
          const SmhGapsResponse = responses[4].data
          dispatch(shipsIndSmhGapsSuccess(SmhGapsResponse))
          const portVisitsResponse = responses[5].data
          dispatch(shipsIndPortVisitsSuccess(portVisitsResponse))
        })
      )
      .catch((errors) => {
        dispatch(shipsIndMmsiHistoryFailure(errors.message))
        dispatch(shipsIndPortIspecFailure(errors.message))
        dispatch(shipsIndAISFailure(errors.message))
        dispatch(shipsIndSmhVisitsFailure(errors.message))
        dispatch(shipsIndSmhGapsFailure(errors.message))
        dispatch(shipsIndPortVisitsFailure(errors.message))

      })
  }
}
