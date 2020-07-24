import React from 'react'
import { ListGroup } from 'react-bootstrap'

function MyList({ data, label_style, value_style }) {
  return (
    <>
      <ListGroup className='text-left'>
        {data.map((val, index) => (
          <ListGroup.Item key={index} hidden={val.label === null}>
            <span style={label_style}>{val.label} : </span>
            <span style={value_style}>{val.value}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default MyList
