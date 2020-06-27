import React from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'
import CommsCard from './comms_card'
//import ModelsCard from './models_card'

function HomePage() {
  return (
    <>
      <Jumbotron>
        <h1>Welcome to Pole Star Admin Portal</h1>
      </Jumbotron>
      <Row className=' justify-content-center'>
        <Col md='3'>
          <CommsCard />
        </Col>
        {/* <Col>
          <ModelsCard />
        </Col> */}
      </Row>
    </>
  )
}

export default HomePage
