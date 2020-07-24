import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import MyTable, { SelectColumnFilter } from '../Reuseable/my_table'

function PositionsTable() {
  const position_data = useSelector((state) => state.positions.data)
  const position_loaded = useSelector((state) => state.positions.loaded)
  const position_loading = useSelector((state) => state.positions.isloading)

  const columns = React.useMemo(
    () => [
      {
        accessor: 'timestamp',
        Header: 'Timestamp',
        Filter: '',
        sort: true
      },
      {
        accessor: 'type_code',
        Header: 'Type Code',
        Filter: SelectColumnFilter,
        sort: true
      },
      {
        accessor: 'source_name',
        Header: 'Source',
        Filter: SelectColumnFilter,
        hidden: true
      },
      {
        accessor: 'location',
        Header: 'Location',
        Filter: '',
        sort: true
      },
      {
        accessor: 'cog_sog',
        Header: 'Sog/Cog',
        Filter: '',
        hidden: true
      },
      {
        accessor: 'delivered_count',
        Header: 'Delivered Count',
        Filter: '',
        sort: true
      }
    ],
    []
  )
  let table_data = React.useMemo(
    () =>
      position_loaded && Array.isArray(position_data)
        ? position_data.map((val, index) => ({
            timestamp: val.timestamp,
            type_code: val.type_code,
            location: `${parseFloat(val.latitude).toFixed(5)} , ${parseFloat(val.longitude).toFixed(5)}`,
            cog_sog: `${parseFloat(val.sog_reported).toFixed(5) ? parseFloat(val.sog_reported).toFixed(5) : 'N/A'} / ${
              parseFloat(val.cog_reported).toFixed(5) ? parseFloat(val.cog_reported).toFixed(5) : 'N/A'
            }`,
            source_name: val.source_name,
            delivered_count: val.delivered_count
          }))
        : [],
    [position_loaded, position_data]
  )
  return (
    <>
      {position_loaded && !position_loading && Array.isArray(position_data) ? (
        <Container fluid>
          <h1>Positions Table</h1>
          <MyTable
            initialState={{
              pageSize: 50
            }}
            Pagination={true}
            page_size_options={[50, 100]}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : position_loading ? (
        <Loader />
      ) : (
        <h1>No Positions Found</h1>
      )}
    </>
  )
}

export default PositionsTable
