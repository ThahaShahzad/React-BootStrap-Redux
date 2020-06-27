import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Row, Col, Button } from 'react-bootstrap'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getSubs } from '../../Redux/Subs_ind/actions'
import EndpointsDataModal from '../Modals/endpoints_data_modal'

function SubsTable({ comm_id }) {
  const [enpointModalShow, setenpointModalShow] = React.useState(false)
  const [endpoint_id, setEndpoint_id] = React.useState(null)
  const endpoints_data = useSelector((state) => state.endpoints.data)
  const subs_data = useSelector((state) => state.subs.data)
  const subs_loaded = useSelector((state) => state.subs.loaded)
  const subs_loading = useSelector((state) => state.subs.isloading)
  const dispatch = useDispatch()

  const find = (id) => endpoints_data && endpoints_data.find((val) => Number(val.id) === id)
  const endpoint_s_data = subs_loaded && subs_data.subscribers.map((val) => find(val.endpoint_id))

  const columns = [
    {
      dataField: 'id',
      text: 'Id',
      sort: true
    },
    {
      dataField: 'asset_uri',
      text: 'Asset uri',
      sort: true,
      headerStyle: () => {
        return { width: '20%' }
      }
    },
    {
      dataField: 'endpoint_name',
      text: 'Endpoint Name',
      sort: true
    },
    {
      dataField: 'endpoint_name1',
      text: 'Endpoint Name',
      hidden: true
    },
    {
      dataField: 'endpoint_id',
      text: 'Endpoint Id',
      sort: true
    },
    {
      dataField: 'last_position_timestamp',
      text: 'Last Position Timestamp',
      sort: true
    },

    {
      dataField: 'reporting_interval_minutes',
      text: 'Reporting Interval Minutes',
      sort: true
    },
    {
      dataField: 'status',
      text: 'Status',
      sort: true
    }
  ]
  let table_data =
    subs_loaded && subs_data.subscribers
      ? subs_data.subscribers.map((val, index) => ({
          id: val.id,
          asset_uri: val.asset_uri,
          endpoint_name: (
            <button
              type='button'
              className='link-button'
              onClick={() => {
                setEndpoint_id(Number(endpoint_s_data[index].id))
                setenpointModalShow(true)
              }}>
              {endpoint_s_data ? endpoint_s_data[index].name : 'N/A'}
            </button>
          ),
          endpoint_name1: endpoint_s_data ? endpoint_s_data[index].name : 'N/A',
          endpoint_id: val.endpoint_id,
          last_position_timestamp: val.last_position_timestamp.substring(0, 19),
          reporting_interval_minutes: val.reporting_interval_minutes,
          status: val.status
        }))
      : []

  return (
    <>
      {subs_loaded && !subs_loading ? (
        <>
          <br></br>
          <Row>
            <Col md='11' />
            <Col md='1'>
              Refresh{' '}
              <Button onClick={() => dispatch(getSubs(comm_id))}>
                <i className='fas fa-sync-alt'></i>
              </Button>
            </Col>
          </Row>
          <BootstrapTable keyField='id' bootstrap4={true} data={table_data} columns={columns} />
        </>
      ) : subs_loading ? (
        <Loader />
      ) : null}
      <EndpointsDataModal
        show={enpointModalShow}
        hide={() => setenpointModalShow(false)}
        endpoint_id={endpoint_id}
        endpoint_s_data={endpoint_s_data}
      />
    </>
  )
}

export default SubsTable
