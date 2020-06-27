import React from 'react'
import { ListGroup } from 'react-bootstrap'

function MyList({ data }) {
  return (
    <>
      <ListGroup className='text-left'>
        {data.map((val, index) => (
          <ListGroup.Item key={index} style={{ fontWeight: 'bold' }}>
            {val.label}: {val.Value}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default MyList
