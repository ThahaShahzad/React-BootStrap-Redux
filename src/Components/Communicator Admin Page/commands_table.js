import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { Container } from 'react-bootstrap'
import MyTable, { SelectColumnFilter } from '../Reuseable/my_table'

function CommandsTable() {
  const comms_ind = useSelector((state) => state.comms_ind)

  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'Command Id',
        Filter: '',
        sort: true
      },
      {
        accessor: 'datetime',
        Header: 'Datetime',
        Filter: '',
        sort: true
      },
      {
        accessor: 'cmd_type',
        Header: 'cmd Type',
        Filter: SelectColumnFilter,
        hidden: true
      },
      {
        accessor: 'channel',
        Header: 'Channel',
        Filter: SelectColumnFilter,
        sort: true
      },
      {
        accessor: 'reason_status',
        Header: 'Cmd Status',
        Filter: SelectColumnFilter,
        hidden: true
      },
      {
        accessor: 'requestor',
        Header: 'Requestor',
        Filter: SelectColumnFilter,
        sort: true
      },
      {
        accessor: 'user',
        Header: 'User',
        Filter: SelectColumnFilter,
        sort: true
      },
      {
        accessor: 'ack_latency_sec',
        Header: 'Ack Latency',
        Filter: SelectColumnFilter,
        sort: true
      }
    ],
    []
  )
  let table_data = React.useMemo(
    () =>
      comms_ind.loaded
        ? comms_ind.data.objects[0].commands.map((val, index) => ({
            id: val.id,
            datetime: val.datetime,
            cmd_type: val.cmd_type,
            requestor: val.requestor,
            channel: val.channel,
            reason_status: `${val.cmd_status} (${val.reason})`,
            user: val.user_name,
            ack_latency_sec: !val.ack_latency_sec || val.ack_latency_sec === 'NULL' ? 'N/A' : val.ack_latency_sec
          }))
        : [],
    [comms_ind]
  )
  return (
    <>
      {comms_ind.loaded && !comms_ind.isloading && Array.isArray(comms_ind.data.objects[0].commands) ? (
        <Container fluid>
          <h1>Commands Table</h1>
          <MyTable
            initialState={{
              pageSize: comms_ind.data.objects[0].commands.length
            }}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : comms_ind.isloading ? (
        <Loader />
      ) : (
        <h1>No Commands Found</h1>
      )}
    </>
  )
}

export default CommandsTable
