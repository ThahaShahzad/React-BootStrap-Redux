import * as types from './types'

const ships_state = {
  data: [],
  isloading: false,
  loaded: false,
  error: '',

  IHSMovement: [],
  movementLoading: false,
  movementLoaded: false,
  movementError: '',

  MmsiHistory: [],
  mmsiLoading: false,
  mmsiLoaded: false,
  mmsiError: '',

  portInspection: [],
  portInspecLoading: false,
  portInspecLoaded: false,
  portInspecError: '',

  Ais: [],
  AisLoading: false,
  AisLoaded: false,
  AisError: '',

  Psp: [],
  PspLoading: false,
  PspLoaded: false,
  PspError: '',

  purpleTrac: [],
  purpleTracLoading: false,
  purpleTracLoaded: false,
  purpleTracError: '',

  Smh: [],
  SmhLoading: false,
  SmhLoaded: false,
  SmhError: '',

  SmhVisits: [],
  SmhVisitsLoading: false,
  SmhVisitsLoaded: false,
  SmhVisitsError: '',

  SmhGaps: [],
  SmhGapsLoading: false,
  SmhGapsLoaded: false,
  SmhGapsError: '',

  portVisits: [],
  portVisitsLoading: false,
  portVisitsLoaded: false,
  portVisitsError: '',

  Sga: [],
  SgaLoading: false,
  SgaLoaded: false,
  SgaError: ''
}

const ships_ind_reducer = (state = ships_state, action) => {
  switch (action.type) {
    case types.ships_ind_request:
      return {
        ...state,
        isloading: true
      }
    case types.ships_ind_success:
      return {
        ...state,
        loaded: true,
        isloading: false,
        data: action.payload
      }
    case types.ships_ind_failure:
      return {
        ...state,
        data: [],
        error: action.payload
      }
    case types.ships_ind_IHSMovment_request:
      return {
        ...state,
        movemntLoading: true
      }
    case types.ships_ind_IHSMovment_success:
      return {
        ...state,
        movementLoaded: true,
        movementLoading: false,
        IHSMovement: action.payload
      }
    case types.ships_ind_IHSMovment_failure:
      return {
        ...state,
        IHSMovement: [],
        movementError: action.payload
      }
    case types.ships_ind_mmsiHistory_request:
      return {
        ...state,
        mmsiLoading: true
      }
    case types.ships_ind_mmsiHistory_success:
      return {
        ...state,
        mmsiLoaded: true,
        mmsiLoading: false,
        MmsiHistory: action.payload,
        mmsiError: ''
      }
    case types.ships_ind_mmsiHistory_failure:
      return {
        ...state,
        MmsiHistory: [],
        mmsiError: action.payload
      }

    case types.ships_ind_portIspec_request:
      return {
        ...state,
        mmsiLoading: true
      }
    case types.ships_ind_portIspec_success:
      return {
        ...state,
        portInspecLoaded: true,
        portInspecLoading: false,
        portInspection: action.payload,
        portInspecError: ''
      }
    case types.ships_ind_portIspec_failure:
      return {
        ...state,
        portInspection: [],
        portInspecError: action.payload
      }

    case types.ships_ind_AIS_request:
      return {
        ...state,
        AisLoading: true
      }
    case types.ships_ind_AIS_success:
      return {
        ...state,
        AisLoaded: true,
        AisLoading: false,
        Ais: action.payload,
        AisError: ''
      }
    case types.ships_ind_AIS_failure:
      return {
        ...state,
        Ais: [],
        AisError: action.payload
      }

    case types.ships_ind_PSP_request:
      return {
        ...state,
        PspLoading: true
      }
    case types.ships_ind_PSP_success:
      return {
        ...state,
        PspLoaded: true,
        PspLoading: false,
        Psp: action.payload,
        PspError: ''
      }
    case types.ships_ind_PSP_failure:
      return {
        ...state,
        Psp: [],
        PspError: action.payload
      }

    case types.ships_ind_PurpleTrac_request:
      return {
        ...state,
        purpleTracLoading: true
      }
    case types.ships_ind_PurpleTrac_success:
      return {
        ...state,
        purpleTracLoaded: true,
        purpleTracLoading: false,
        purpleTrac: action.payload,
        purpleTracError: ''
      }
    case types.ships_ind_PurpleTrac_failure:
      return {
        ...state,
        purpleTrac: [],
        purpleTracError: action.payload
      }

    case types.ships_ind_PTShip_request:
      return {
        ...state,
        ptShipLoading: true
      }
    case types.ships_ind_PTShip_success:
      return {
        ...state,
        ptShipLoaded: true,
        ptShipLoading: false,
        ptShipData: action.payload,
        ptShipError: ''
      }
    case types.ships_ind_PTShip_failure:
      return {
        ...state,
        ptShipData: [],
        ptShipError: action.payload
      }

    case types.ships_ind_SMH_request:
      return {
        ...state,
        SmhLoading: true
      }
    case types.ships_ind_SMH_success:
      return {
        ...state,
        SmhLoaded: true,
        SmhLoading: false,
        Smh: action.payload,
        SmhError: ''
      }
    case types.ships_ind_SMH_failure:
      return {
        ...state,
        Smh: [],
        SmhError: action.payload
      }

    case types.ships_ind_smhVisits_request:
      return {
        ...state,
        SmhVisitsLoading: true
      }
    case types.ships_ind_smhVisits_success:
      return {
        ...state,
        SmhVisitsLoaded: true,
        SmhVisitsLoading: false,
        SmhVisits: action.payload,
        SmhVisitsError: ''
      }
    case types.ships_ind_smhVisits_failure:
      return {
        ...state,
        SmhVisits: [],
        SmhVisitsError: action.payload
      }

    case types.ships_ind_smhGaps_request:
      return {
        ...state,
        SmhGapsLoading: true
      }
    case types.ships_ind_smhGaps_success:
      return {
        ...state,
        SmhGapsLoaded: true,
        SmhGapsLoading: false,
        SmhGaps: action.payload,
        SmhgapsError: ''
      }
    case types.ships_ind_smhGaps_failure:
      return {
        ...state,
        SmhGaps: [],
        SmhGapsError: action.payload
      }

    case types.ships_ind_portVisits_request:
      return {
        ...state,
        portVisitsLoading: true
      }
    case types.ships_ind_portVisits_success:
      return {
        ...state,
        portVisitsLoaded: true,
        portVisitsLoading: false,
        portVisits: action.payload,
        portVisitsError: ''
      }
    case types.ships_ind_portVisits_failure:
      return {
        ...state,
        portVisits: [],
        portVisitsError: action.payload
      }

    case types.ships_ind_SGA_request:
      return {
        ...state,
        SgaLoading: true
      }
    case types.ships_ind_SGA_success:
      return {
        ...state,
        SgaLoaded: true,
        SgaLoading: false,
        Sga: action.payload,
        SgaError: ''
      }
    case types.ships_ind_SGA_failure:
      return {
        ...state,
        Sga: [],
        SgaError: action.payload
      }

    default:
      return state
  }
}

export default ships_ind_reducer
