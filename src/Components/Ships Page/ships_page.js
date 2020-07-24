import React from 'react'
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'
import SearchIndShipCard from './search_ind_ship_card'
import FilteredShipsCard from './filtered_ships_card'

function ShipsPage() {
  const [expanded, setexpanded] = React.useState(false)
  const [expanded1, setexpanded1] = React.useState(false)
  return (
    <>
      <Container fluid>
        <h1>Search For Ships</h1>
        <br></br>
        {/* <Row className=' justify-content-center'>
          <Col md='6'>
            <SearchIndShipCard />
          </Col>
        </Row>
        <Row className=' justify-content-center'>
          <Col md='6'>
            <FilteredShipsCard />
          </Col>
        </Row> */}

        <Row className=' justify-content-center'>
          <Col md='8'>
            <Accordion defaultActiveKey='0'>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='0'
                  onClick={() => setexpanded((prevExpanded) => (prevExpanded = !prevExpanded))}>
                  Search Individual Ship{' '}
                  {expanded ? <i className='fas fa-chevron-down'></i> : <i className='fas fa-chevron-up'></i>}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <SearchIndShipCard />
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='1'
                  onClick={() => setexpanded1((prevExpanded) => (prevExpanded = !prevExpanded))}>
                  Filter Ships{' '}
                  {!expanded1 ? <i className='fas fa-chevron-down'></i> : <i className='fas fa-chevron-up'></i>}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='1'>
                  <FilteredShipsCard />
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ShipsPage
