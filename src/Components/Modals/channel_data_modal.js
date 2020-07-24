import React from 'react'
import MyModal from '../Reuseable/my_modal'
import { useSelector } from 'react-redux'
import MyList from '../Reuseable/my_list'

function ChannelDataModal({ show, hide, channel_name }) {
  const channels_data = useSelector((state) => state.channels.data)
  const find = (name) => channels_data.find((val) => val.channel_name === name)
  const channel_data = find(channel_name)
  let headers = channel_data && Object.keys(channel_data)
  let data = channel_data && Object.values(channel_data)
  let formated_data =
    channel_data &&
    headers.map((val, index) => {
      return {
        label: val,
        value: data[index] === '' ? 'N/A' : data[index]
      }
    })
  return (
    <>
      <MyModal
        show={show}
        onHide={hide}
        size={'lg'}
        title_text='Channel Data'
        main_text={<MyList data={formated_data} label_style={{ fontWeight: 'bold' }} />}
      />
    </>
  )
}

export default ChannelDataModal
