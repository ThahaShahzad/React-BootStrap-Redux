import React from 'react'
import { getComms } from '../../Redux/Comms/actions'
import BootstrapTable from 'react-bootstrap-table-next'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'

function CommsTablePage() {
  const comms_data = useSelector((state) => state.comms.data)
  const comms_loaded = useSelector((state) => state.comms.loaded)
  const comms_loading = useSelector((state) => state.comms.isloading)
  const dispatch = useDispatch()
  const { SearchBar } = Search
  const columns = [
    {
      dataField: 'index',
      text: '#',
      searchable: false,
      hidden: true,
      headerStyle: () => {
        return { width: '5%' }
      }
    },
    {
      dataField: 'id1',
      text: 'Comm Id1',
      hidden: true
    },
    {
      dataField: 'id',
      text: 'Comm Id'
    },
    {
      dataField: 'serial_number',
      text: 'Serial Number',
      sort: true
    },
    {
      dataField: 'identifiers',
      text: 'Primary Identifier',
      sort: true
    },
    {
      dataField: 'channel_name',
      text: 'Channel Name',
      sort: true
    },
    {
      dataField: 'model_name',
      text: 'Model Name',
      sort: true
    },

    {
      dataField: 'reporting_interval_minutes',
      text: 'Reporting Interval Minutes',
      sort: true
    },
    {
      dataField: 'last_position_timestamp',
      text: 'Last Report',
      sort: true
    },
    {
      dataField: 'last_position',
      text: 'Last Position'
    }
  ]
  let table_data =
    comms_loaded &&
    comms_data.map((val, index) => ({
      index: index,
      id: (
        <Link key={index} to={`/comAdmin/${val.id}`}>
          {val.id}
        </Link>
      ),
      id1: val.id,
      serial_number: val.serial_number,
      identifiers: val.identifiers ? `${val.identifiers[0].name} = ${val.identifiers[0].value}` : '',
      channel_name: val.channel_name,
      model_name: val.model_name ? val.model_name : 'N/A',
      reporting_interval_minutes: val.reporting_interval_minutes,
      last_position_timestamp: val.last_position_timestamp.substring(0, 19),
      last_position: `${parseFloat(val.last_position_latitude).toFixed(5)} , ${parseFloat(
        val.last_position_longitude
      ).toFixed(5)}`
    }))
  const defaultSorted = [
    {
      dataField: 'last_position_timestamp',
      order: 'desc'
    }
  ]

  return (
    <>
      {comms_loaded && !comms_loading ? (
        <Container fluid>
          <h1>Communicators Table</h1>
          <Row>
            <Col md='1' />
            <Col>
              <br></br>
              <ToolkitProvider keyField='index' data={table_data} columns={columns} search bootstrap4>
                {(props) => (
                  <>
                    <Row>
                      <Col md='2'>
                        <SearchBar {...props.searchProps} />
                      </Col>
                      <Col md='9' />
                      <Col md='1'>
                        Refresh{' '}
                        <Button onClick={() => dispatch(getComms())}>
                          <i className='fas fa-sync-alt'></i>
                        </Button>
                      </Col>
                    </Row>
                    <BootstrapTable
                      {...props.baseProps}
                      pagination={paginationFactory()}
                      wrapperClasses='table-responsive'
                      defaultSorted={defaultSorted}
                    />
                  </>
                )}
              </ToolkitProvider>
            </Col>
            <Col md='1' />
          </Row>
        </Container>
      ) : comms_loading ? (
        <Loader />
      ) : null}
    </>
  )
}

export default CommsTablePage
