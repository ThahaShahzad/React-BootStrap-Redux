import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Row, Col, Button } from 'react-bootstrap'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getCommands } from '../../Redux/Commands_ind/actions'

function CommandsTable({ comm_id }) {
  const commands_data = useSelector((state) => state.commands.data)
  const commands_loaded = useSelector((state) => state.commands.loaded)
  const commands_loading = useSelector((state) => state.commands.isloading)
  const { SearchBar } = Search
  const dispatch = useDispatch()
  const columns = [
    {
      dataField: 'id',
      text: 'Command Id',
      sort: true,
      headerStyle: () => {
        return { width: '5%' }
      }
    },
    {
      dataField: 'datetime',
      text: 'Datetime',
      sort: true
    },
    {
      dataField: 'cmd_type',
      text: 'cmd Type',
      sort: true
    },
    {
      dataField: 'channel',
      text: 'Channel',
      sort: true
    },
    {
      dataField: 'reason_status',
      text: 'Cmd Status',
      sort: true
    },
    {
      dataField: 'requestor',
      text: 'Requestor',
      sort: true
    },
    {
      dataField: 'user',
      text: 'User',
      sort: true
    },
    {
      dataField: 'ack_latency_sec',
      text: 'Ack Latency',
      sort: true
    }
  ]
  let table_data =
    commands_loaded && Array.isArray(commands_data)
      ? commands_data.map((val, index) => ({
          id: val.id,
          datetime: val.datetime,
          cmd_type: val.cmd_type,
          requestor: val.requestor,
          channel: val.channel,
          reason_status: `${val.cmd_status} (${val.reason})`,
          user: val.user_name,
          ack_latency_sec: !val.ack_latency_sec || val.ack_latency_sec === 'NULL' ? 'N/A' : val.ack_latency_sec
        }))
      : []

  return (
    <>
      {commands_loaded && !commands_loading && Array.isArray(commands_data) ? (
        <>
          <br></br>
          <ToolkitProvider keyField='id' bootstrap4={true} data={table_data} columns={columns} search>
            {(props) => (
              <>
                <Row>
                  <Col md='2'>
                    <SearchBar key='commands' {...props.searchProps} />
                  </Col>
                  <Col md='9' />
                  <Col md='1'>
                    Refresh{' '}
                    <Button onClick={() => dispatch(getCommands(comm_id))}>
                      <i className='fas fa-sync-alt'></i>
                    </Button>
                  </Col>
                </Row>
                <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
              </>
            )}
          </ToolkitProvider>
        </>
      ) : commands_loading ? (
        <Loader />
      ) : (
        <h1>No Commands Found</h1>
      )}
    </>
  )
}

export default CommandsTable
