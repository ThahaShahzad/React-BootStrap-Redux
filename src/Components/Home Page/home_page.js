import React from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'
import CommsCard from './comms_card'
import ModelsCard from './models_card'

function HomePage() {
  return (
    <>
      <Jumbotron>
        <h1>Welcome to Pole Star Admin Portal</h1>
      </Jumbotron>
      <Row>
        <Col>
          <CommsCard />
        </Col>
        <Col>
          <ModelsCard />
        </Col>
        <Col>
          <CommsCard />
        </Col>
        <Col>
          <CommsCard />
        </Col>
      </Row>
    </>
  )
}

export default HomePage
