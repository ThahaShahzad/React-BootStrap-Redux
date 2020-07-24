import React from 'react'
import Loader from 'react-loader-spinner'
import MyTable, { SelectColumnFilter } from '../Reuseable/my_table'
import { getComms } from '../../Redux/Comms/actions'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CommsTablePage() {
  const comms_data = useSelector((state) => state.comms.data)
  const comms_loaded = useSelector((state) => state.comms.loaded)
  const comms_loading = useSelector((state) => state.comms.isloading)
  const table_data = React.useMemo(
    () => [
      { id: 1, serial_number: 100 },
      { id: 1, serial_number: 50 },
      { id: 1, serial_number: 10 }
    ],
    []
  )
  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'Comm Id',
        Filter: ''
      },
      {
        accessor: 'serial_number',
        Header: 'Serial Number',
        Filter: ''
      }
    ],
    []
  )
  const defaultSorted = React.useMemo(() => [{ id: 'serial_number', desc: true }], [])
  return (
    <>
      <Container fluid>
        <h1>Communicators Table</h1>
        <MyTable
          initialState={{
            pageSize: 50,
            sortBy: defaultSorted
          }}
          page_size_options={[50, 100, 200]}
          columns={columns}
          data={table_data}
        />
      </Container>
    </>
  )
}

export default CommsTablePage
