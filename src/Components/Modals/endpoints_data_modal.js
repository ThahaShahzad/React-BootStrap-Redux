import React from 'react'
import MyModal from '../Reuseable/my_modal'
import { ListGroup } from 'react-bootstrap'

function EndpointsDataModal({ show, hide, endpoint_id, endpoint_s_data }) {
  const find = (id) => endpoint_s_data && endpoint_s_data.find((val) => Number(val.id) === id)
  const endpoint_data = endpoint_id && find(Number(endpoint_id))

  let headers = endpoint_data && Object.keys(endpoint_data)
  let data = endpoint_data && Object.values(endpoint_data)
  let formated_data =
    endpoint_data &&
    headers.map((val, index) => {
      return {
        head: val,
        data: data[index] === '' ? 'N/A' : data[index]
      }
    })
  return (
    <>
      {endpoint_data && (
        <MyModal
          show={show}
          onHide={hide}
          size={'lg'}
          backdrop='static'
          title_text='Enpoints Data'
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
      )}
    </>
  )
}

export default EndpointsDataModal
