import React from 'react'
import MyModal from '../Reuseable/my_modal'
import { useSelector, useDispatch } from 'react-redux'
import MyList from '../Reuseable/my_list'
import { getChannels } from '../../Redux/Channels/actions'

function ChannelDataModal({ show, hide, channel_id }) {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getChannels())
  }, [dispatch])
  const channels_data = useSelector((state) => state.channels.data)
  const find = (id) => channels_data.find((val) => Number(val.channel_id) === id)
  const channel_data = find(channel_id)
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
        backdrop='static'
        title_text='Channel Data'
        main_text={<MyList data={formated_data} label_style={{ fontWeight: 'bold' }} />}
      />
    </>
  )
}

export default ChannelDataModal
