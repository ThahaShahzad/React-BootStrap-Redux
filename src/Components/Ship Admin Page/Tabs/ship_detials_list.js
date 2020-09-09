import React from 'react'
import { Row, Col } from 'react-bootstrap'

function ShipDetialsList({ ship_data }) {
  let headers = Object.keys(ship_data)
  let data = Object.values(ship_data)
  let formated_data = headers.map((val, index) => {
    return {
      label: val === 'data' ? null : val === 'flag' ? null : val,
      value: val === 'data' ? null : val === 'flag' ? null : data[index] ? data[index] : 'N/A'
    }
  })
  let headers1 = Object.keys(ship_data.flag || {})
  let data1 = Object.values(ship_data.flag || {})
  let formated_data1 = headers1.map((val, index) => {
    return {
      label: val,
      value: data1[index] ? data1[index] : 'N/A'
    }
  })
  let headers2 = Object.keys(ship_data.data || {})
  let data2 = Object.values(ship_data.data || {})
  let formated_data2 = headers2.map((val, index) => {
    return {
      label: val,
      value: data2[index] ? data2[index] : 'N/A'
    }
  })
  return (
    <>
      <Row>
        <Col>
          <h3>General Data</h3>
          <ul>
            {formated_data.map((val, index) => (
              <li key={index} style={{ textAlign: 'left' }} hidden={val.label === null}>
                <span style={{ fontWeight: 'bold' }}>{val.label} : </span>
                <span>{val.value}</span>
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <h3>Flag Data</h3>
          <ul>
            {formated_data1.map((val, index) => (
              <li key={index} style={{ textAlign: 'left' }} hidden={val.label === null}>
                <span style={{ fontWeight: 'bold' }}>{val.label} : </span>
                <span>{val.value}</span>
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <h3>Full Data</h3>
          <ul>
            {formated_data2.map((val, index) => (
              <li key={index} style={{ textAlign: 'left' }} hidden={val.label === null}>
                <span style={{ fontWeight: 'bold' }}>{val.label} : </span>
                <span>{val.value}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  )
}

export default ShipDetialsList
