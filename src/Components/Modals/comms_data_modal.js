import React from 'react'
import MyModal from '../Reuseable/my_modal'
import { ListGroup } from 'react-bootstrap'

function CommsDataModal({ show, hide, comm_data }) {
  let headers = comm_data && Object.keys(comm_data)
  let data = comm_data && Object.values(comm_data)
  let formated_data = headers.map((val, index) => {
    return {
      head: val,
      data:
        index !== 6
          ? data[index] === ''
            ? 'N/A'
            : data[index]
          : data[index].map((val, index) => (
              <ul key={index}>
                <li>{`${val.name} : ${val.value}`}</li>
              </ul>
            ))
    }
  })
  return (
    <>
      <MyModal
        show={show}
        onHide={hide}
        size={'lg'}
        backdrop='static'
        title_text='Comms Data'
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
    </>
  )
}

export default CommsDataModal
