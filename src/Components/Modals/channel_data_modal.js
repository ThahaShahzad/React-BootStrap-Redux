import React from 'react'
import MyModal from '../Reuseable/my_modal'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

function ChannelDataModal({ show, hide, channel_id }) {
  const channels_data = useSelector((state) => state.channels.data)
  const channels_loading = useSelector((state) => state.channels.isloading)
  const find = (id) => channels_data.find((val) => Number(val.channel_id) === id)
  const channel_data = find(channel_id)
  let headers = channel_data && Object.keys(channel_data)
  let data = channel_data && Object.values(channel_data)
  let formated_data = headers.map((val, index) => {
    return {
      head: val,
      data: data[index] === '' ? 'N/A' : data[index]
    }
  })
  return (
    <>
      {channel_data ? (
        <MyModal
          show={show}
          onHide={hide}
          size={'lg'}
          backdrop='static'
          title_text='Channel Data'
          main_text={
            <>
              <ListGroup className='text-left'>
                {formated_data.map((val, index) => (
                  <ListGroup.Item key={index}>
                    {val.head}: <strong>{val.data}</strong>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          }
        />
      ) : channels_loading ? (
        <Loader />
      ) : !channels_loading ? (
        <h1>Invaild Id</h1>
      ) : null}
    </>
  )
}

export default ChannelDataModal
