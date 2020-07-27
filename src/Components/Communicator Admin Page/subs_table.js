import React from 'react'
import { Container } from 'react-bootstrap'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import EndpointsDataModal from '../Modals/endpoints_data_modal'
import MyTable from '../Reuseable/my_table'

function SubsTable() {
  const [enpointModalShow, setenpointModalShow] = React.useState(false)
  const [endpoint_id, setEndpoint_id] = React.useState(null)
  const endpoints_data = useSelector((state) => state.endpoints.data)
  const comms_ind = useSelector((state) => state.comms_ind)
  const find = (id) => endpoints_data && endpoints_data.find((val) => Number(val.id) === id)
  const validateSubscribers = comms_ind.loaded && Array.isArray(comms_ind.data.objects[0].subscribers)
  const endpoint_s_data =
    validateSubscribers && comms_ind.data.objects[0].subscribers.map((val) => find(val.endpoint_id))

  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'Id',
        Filter: ''
      },
      {
        accessor: 'asset_uri',
        Header: 'Asset Uri',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'endpoint_name',
        Header: 'Endpoint Name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'endpoint_name1',
        Header: 'endpoint_name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_position_timestamp',
        Header: 'Last Position Timestamp',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'reporting_interval_minutes',
        Header: 'Reporting Interval Minutes',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'status',
        Header: 'Status',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      validateSubscribers
        ? comms_ind.data.objects[0].subscribers.map((val, index) => ({
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
            reporting_interval_minutes: val.rate,
            status: val.status
          }))
        : [],
    [comms_ind, endpoint_s_data, validateSubscribers]
  )
  return (
    <>
      {comms_ind.loaded && !comms_ind.isloading && Array.isArray(comms_ind.data.objects[0].subscribers) ? (
        <Container fluid>
          <h1>Subscribers Table</h1>
          <MyTable
            initialState={{
              pageSize: comms_ind.data.objects[0].subscribers.length,
              hiddenColumns: ['endpoint_name1']
            }}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : comms_ind.isloading ? (
        <Loader />
      ) : (
        <h1>No Subscribers Found</h1>
      )}

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
