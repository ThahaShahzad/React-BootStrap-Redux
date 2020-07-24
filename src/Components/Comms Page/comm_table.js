import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MyTable, { SelectColumnFilter } from '../Reuseable/my_table'
import Loader from 'react-loader-spinner'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getCommsInd } from '../../Redux/Comms_ind/actions'

function CommsTable({ itemsPerPage, url }) {
  const comm_ind = useSelector((state) => state.comms_ind)
  const dispatch = useDispatch()
  const valid = comm_ind.loaded && !comm_ind.isloading && comm_ind.data.meta.total_count > 0
  const table_data = React.useMemo(
    () =>
      valid &&
      comm_ind.data.objects.map((val, index) => ({
        id: (
          <Link
            key={index}
            onClick={() => dispatch(getCommsInd(`&field=comm_id&value=${val.comm_id}`))}
            to={`/comAdmin/&field=comm_id&value=${val.comm_id}`}>
            {val.comm_id}
          </Link>
        ),
        id1: val.id,
        serial_number: val.serial_number === '' ? 'N/A' : val.serial_number,
        primary_identifier: `${val.primary_identifier} : ${val.identifier_value}`,
        // identifiers: val.identifiers ? `${val.identifiers[0].name} = ${val.identifiers[0].value}` : '',
        channel: val.channel,
        model: val.model ? val.model : 'N/A',
        subsriber_count: val.subscriber_count,
        reporting_rate: val.reporting_rate,
        last_position_timestamp: val.last_position_timestamp ? val.last_position_timestamp.substring(0, 19) : 'N/A',
        last_position: `${parseFloat(val.last_position_latitude).toFixed(5)} , ${parseFloat(
          val.last_position_longitude
        ).toFixed(5)}`
      })),
    [comm_ind, dispatch, valid]
  )
  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'Comm Id',
        Filter: ''
      },
      {
        accessor: 'id1',
        Header: 'Comm Id',
        Filter: ''
      },
      {
        accessor: 'serial_number',
        Header: 'Serial Number',
        Filter: ''
      },
      {
        accessor: 'primary_identifier',
        Header: 'Primary Identifier',
        Filter: ''
      },
      {
        accessor: 'channel',
        Header: 'Channel Name',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'model',
        Header: 'Model Name',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'subsriber_count',
        Header: 'Subscriber Count',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },

      {
        accessor: 'reporting_rate',
        Header: 'Reporting Rate',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'last_position_timestamp',
        Header: 'Last Report',
        Filter: ''
      },
      {
        accessor: 'last_position',
        Header: 'Last Position',
        Filter: ''
      }
    ],
    []
  )
  const defaultSorted = React.useMemo(() => [{ id: 'last_position_timestamp', desc: true }], [])
  return (
    <>
      {valid ? (
        <Container fluid>
          <h1>Comms Table</h1>
          <MyTable
            initialState={{
              pageSize: itemsPerPage,
              hiddenColumns: ['id1'],
              sortBy: defaultSorted
            }}
            apiPaganation={true}
            totalItems={`Total Comms ${comm_ind.data.meta.total_count}`}
            previous={Number(comm_ind.data.meta.offset) !== 0 ? true : null}
            next={comm_ind.data.meta.next}
            apiFuncN={getCommsInd(
              `${url}&limit=${itemsPerPage}&offset=${Number(comm_ind.data.meta.offset) + itemsPerPage}`
            )}
            apiFuncP={getCommsInd(
              `${url}&limit=${itemsPerPage}&offset=${Number(comm_ind.data.meta.offset) - itemsPerPage}`
            )}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : comm_ind.isloading ? (
        <Loader />
      ) : (
        'None Found'
      )}
    </>
  )
}

export default CommsTable
