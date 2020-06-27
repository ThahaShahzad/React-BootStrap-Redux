import React from 'react'
import MyList from '../Reuseable/my_list'
import timeSince from '../Reuseable/utils'
import ModelDataModal from '../Modals/model_data_modal'
import ChannelDataModal from '../Modals/channel_data_modal'
import CommsDataModal from '../Modals/comms_data_modal'

function CommsList({ comm_data, comm_id }) {
  const [commsmodalShow, setcommsModalShow] = React.useState(false)
  const [modelModalShow, setmodelModalShow] = React.useState(false)
  const [channelModalShow, setchannelModalShow] = React.useState(false)
  let list_data = comm_data && [
    {
      label: 'Comm ID',
      value: (
        <button type='button' className='link-button' onClick={() => setcommsModalShow(true)}>
          {comm_id}
        </button>
      )
    },
    { label: 'Serial Number', value: comm_data.serial_number },
    {
      label: 'Model',
      value: (
        <button type='button' className='link-button' onClick={() => setmodelModalShow(true)}>
          {comm_data.model_name ? comm_data.model_name : 'N/A'}
        </button>
      )
    },
    {
      label: 'Channel',
      value: (
        <button type='button' className='link-button' onClick={() => setchannelModalShow(true)}>
          {comm_data.channel_name ? comm_data.channel_name : 'N/A'}
        </button>
      )
    },
    { label: 'Reporting Rate', Value: comm_data.reporting_interval_minutes },
    {
      label: 'Last Postion',
      value:
        comm_data.last_position_latitude && comm_data.last_position_longitude
          ? `${parseFloat(comm_data.last_position_latitude).toFixed(5)} , ${parseFloat(
              comm_data.last_position_longitude
            ).toFixed(5)}`
          : 'None'
    },
    {
      label: 'Last Timestamp',
      value: `${comm_data.last_position_timestamp.substring(0, 19)} (${timeSince(
        Date.parse(comm_data.last_position_timestamp)
      )} ago) `
    }
  ]
  return (
    <>
      <MyList data={list_data} label_style={{ fontWeight: 'bold' }} />
      <CommsDataModal show={commsmodalShow} hide={() => setcommsModalShow(false)} comm_data={comm_data} />
      {comm_data.model_name && (
        <ModelDataModal show={modelModalShow} hide={() => setmodelModalShow(false)} model_id={comm_data.model_id} />
      )}
      <ChannelDataModal
        show={channelModalShow}
        hide={() => setchannelModalShow(false)}
        channel_id={comm_data.channel_id}
      />
    </>
  )
}

export default CommsList
