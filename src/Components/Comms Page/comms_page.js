import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SearchIndCommsCard from './search_ind_comms_card'
import FilteredCommsCard from './filtered_comms_card'

function CommsPage() {
  return (
    <>
      <Container fluid>
        <h1>Search For Comms</h1>
        <br></br>
        <Row className=' justify-content-center'>
          <Col md='6'>
            <SearchIndCommsCard />
          </Col>
        </Row>
        <FilteredCommsCard />
      </Container>
    </>
  )
}

export default CommsPage
