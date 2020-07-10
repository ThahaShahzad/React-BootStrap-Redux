import React from 'react'
import Loader from 'react-loader-spinner'
import MyTable, { SelectColumnFilter } from '../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getEndpoints } from '../../Redux/Endpoints/actions'

function EnpointsTablePage() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getEndpoints())
  }, [dispatch])
  const endpoints_data = useSelector((state) => state.endpoints.data)
  const endpoints_loaded = useSelector((state) => state.endpoints.loaded)
  const endpoints_loading = useSelector((state) => state.endpoints.isloading)
  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'Endpoint Id',
        Filter: ''
      },
      {
        accessor: 'name',
        Header: 'Name',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'endpoint_type',
        Header: 'Endpoint Type',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'connection_data',
        Header: 'Connection Data',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )
  let table_data = React.useMemo(
    () =>
      endpoints_loaded &&
      endpoints_data.map((val, index) => ({
        id: val.id,
        name: val.name,
        endpoint_type: val.endpoint_type,
        connection_data: val.connection_data
      })),
    [endpoints_data, endpoints_loaded]
  )

  return (
    <>
      {endpoints_loaded && !endpoints_loading ? (
        <Container fluid>
          <h1>Endpoints Table</h1>
          <MyTable
            initialState={{
              pageSize: 10
            }}
            dispatchFunc={getEndpoints()}
            page_size_options={[10, 20, 30]}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : endpoints_loading ? (
        <Loader />
      ) : null}
    </>
  )
}

export default EnpointsTablePage
