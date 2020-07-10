import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SearchIndShipCard from './search_ind_ship_card'
import FilteredShipsCard from './filtered_ships_card'

function ShipsPage() {
  return (
    <>
      <Container fluid>
        <h1>Search For Ships</h1>
        <br></br>
        <Row className=' justify-content-center'>
          <Col md='6'>
            <SearchIndShipCard />
          </Col>
        </Row>
        <Row className=' justify-content-center'>
          <Col md='6'>
            <FilteredShipsCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ShipsPage
