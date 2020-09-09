import React from 'react'
import MyTable, { SelectColumnFilter } from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function IhsMovementTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'timestamp',
        Header: 'Arrival date and time (UTC)',
        Filter: ''
      },
      {
        accessor: 'port_name',
        Header: 'Port',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'country_name',
        Header: 'Country',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'last_port_of_call_name',
        Header: 'Last Port of call',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_port_of_call_country',
        Header: 'Last Port of call country',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'destination_port',
        Header: 'Destination ',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'sail_date_full',
        Header: 'Departure date and time (UTC) ',
        Filter: ''
      }
    ],
    []
  )
  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        timestamp: isEmpty(val.timestamp) ? 'N/A' : val.timestamp,
        port_name: isEmpty(val.port_name) ? val.movement_type : val.port_name,
        country_name: isEmpty(val.country_name) ? 'N/A' : val.country_name,
        last_port_of_call_name: isEmpty(val.last_port_of_call_name) ? 'N/A' : val.last_port_of_call_name,
        last_port_of_call_country: isEmpty(val.last_port_of_call_country) ? 'N/A' : val.last_port_of_call_country,
        destination_port: isEmpty(val.destination_port) ? 'N/A' : val.destination_port,
        sail_date_full: isEmpty(val.sail_date_full) ? 'N/A' : val.sail_date_full
      })),
    [ship_data]
  )
  return (
    <>
      {count === 0 ? (
        'None Found'
      ) : (
        <Container fluid>
          <MyTable
            initialState={{
              pageSize: 100
            }}
            Pagination={true}
            page_size_options={[50, 100, 500]}
            columns={columns}
            data={table_data}
          />
        </Container>
      )}
    </>
  )
}

export default IhsMovementTable
