import React from 'react'
import Loader from 'react-loader-spinner'
import MyTable, { SelectColumnFilter } from '../Reuseable/my_table'
import { getComms } from '../../Redux/Comms/actions'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function CommsTablePage() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getComms())
  }, [dispatch])
  const comms_data = useSelector((state) => state.comms.data)
  const comms_loaded = useSelector((state) => state.comms.loaded)
  const comms_loading = useSelector((state) => state.comms.isloading)
  const table_data = React.useMemo(
    () =>
      comms_loaded &&
      comms_data.map((val, index) => ({
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
      })),
    [comms_data, comms_loaded]
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
        accessor: 'identifiers',
        Header: 'Primary Identifier',
        Filter: ''
      },
      {
        accessor: 'channel_name',
        Header: 'Channel Name',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'model_name',
        Header: 'Model Name',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },

      {
        accessor: 'reporting_interval_minutes',
        Header: 'Reporting Interval Minutes',
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
      {comms_loaded && !comms_loading ? (
        <Container fluid>
          <h1>Communicators Table</h1>
          <MyTable
            initialState={{
              pageSize: 50,
              hiddenColumns: ['id1'],
              defaultSorted: defaultSorted
            }}
            dispatchFunc={getComms()}
            page_size_options={[50, 100, 200]}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : comms_loading ? (
        <Loader />
      ) : null}
    </>
  )
}

export default CommsTablePage
