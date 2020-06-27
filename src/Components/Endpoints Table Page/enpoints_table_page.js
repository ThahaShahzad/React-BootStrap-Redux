import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getEndpoints } from '../../Redux/Endpoints/actions'

function EnpointsTablePage() {
  const endpoints_data = useSelector((state) => state.endpoints.data)
  const endpoints_loaded = useSelector((state) => state.endpoints.loaded)
  const endpoints_loading = useSelector((state) => state.endpoints.isloading)
  const dispatch = useDispatch()
  const { SearchBar } = Search
  const columns = [
    {
      dataField: 'id',
      text: 'Endpoint Id',
      sort: true,
      headerStyle: () => {
        return { width: '10%' }
      }
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      headerStyle: () => {
        return { width: '20%' }
      }
    },
    {
      dataField: 'endpoint_type',
      text: 'Endpoint Type',
      sort: true,
      headerStyle: () => {
        return { width: '20%' }
      }
    },
    {
      dataField: 'connection_data',
      text: 'Connection Data',
      sort: true
    }
  ]
  let table_data =
    endpoints_loaded &&
    endpoints_data.map((val, index) => ({
      index: index,
      id: val.id,
      name: val.name,
      endpoint_type: val.endpoint_type,
      connection_data: val.connection_data
    }))
  // const defaultSorted = [
  //   {
  //     dataField: 'last_position_timestamp',
  //     order: 'desc'
  //   }
  // ]

  return (
    <>
      {endpoints_loaded && !endpoints_loading ? (
        <Container fluid>
          <h1>Endpoints Table</h1>
          <Row>
            <Col md='1' />
            <Col>
              <br></br>
              <ToolkitProvider keyField='index' data={table_data} columns={columns} search>
                {(props) => (
                  <>
                    <Row>
                      <Col md='2'>
                        <SearchBar {...props.searchProps} />
                      </Col>
                      <Col md='9' />
                      <Col md='1'>
                        Refresh{' '}
                        <Button onClick={() => dispatch(getEndpoints())}>
                          <i className='fas fa-sync-alt'></i>
                        </Button>
                      </Col>
                    </Row>
                    <BootstrapTable
                      {...props.baseProps}
                      pagination={paginationFactory()}
                      wrapperClasses='table-responsive'
                    />
                  </>
                )}
              </ToolkitProvider>
            </Col>
            <Col md='1' />
          </Row>
        </Container>
      ) : endpoints_loading ? (
        <Loader />
      ) : null}
    </>
  )
}

export default EnpointsTablePage
