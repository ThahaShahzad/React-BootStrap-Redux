import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getModels } from '../Redux/Models/actions'
import { getChannels } from '../Redux/Channels/actions'
import { getComms } from '../Redux/Comms/actions'
import { getEndpoints } from '../Redux/Endpoints/actions'
import { getShips } from '../Redux/Ships/actions'

function Initializer() {
  const models_init = useSelector((state) => state.models.loaded)
  const channels_init = useSelector((state) => state.channels.loaded)
  const comms_init = useSelector((state) => state.comms.loaded)
  const endpoints_init = useSelector((state) => state.endpoints.loaded)
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (!models_init && !channels_init && !comms_init && !endpoints_init) {
      dispatch(getModels())
      dispatch(getChannels())
      dispatch(getComms())
      dispatch(getEndpoints())
      dispatch(getShips())
    }
  }, [models_init, channels_init, comms_init, endpoints_init, dispatch])

  return <></>
}

export default Initializer
