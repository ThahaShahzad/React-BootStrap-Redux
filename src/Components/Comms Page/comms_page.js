import React from 'react'
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'
import SearchIndCommsCard from './search_ind_comms_card'
import FilteredCommsCard from './filtered_comms_card'

function CommsPage() {
  const [expanded, setexpanded] = React.useState(false)
  const [expanded1, setexpanded1] = React.useState(false)
  return (
    <>
      <Container fluid>
        <h1>Search For Comms</h1>
        <br></br>
        <Row className=' justify-content-center'>
          <Col md='8'>
            <Accordion defaultActiveKey='0'>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='0'
                  onClick={() => setexpanded((prevExpanded) => (prevExpanded = !prevExpanded))}>
                  Search Individual Comms{' '}
                  {expanded ? <i className='fas fa-chevron-down'></i> : <i className='fas fa-chevron-up'></i>}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <SearchIndCommsCard />
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='1'
                  onClick={() => setexpanded1((prevExpanded) => (prevExpanded = !prevExpanded))}>
                  Filter Comms{' '}
                  {!expanded1 ? <i className='fas fa-chevron-down'></i> : <i className='fas fa-chevron-up'></i>}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='1'>
                  <FilteredCommsCard />
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CommsPage
