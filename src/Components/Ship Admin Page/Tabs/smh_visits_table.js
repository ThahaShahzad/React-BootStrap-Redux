import React from 'react'
import MyTable, { SelectColumnFilter } from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function SmhVisitsTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'entered',
        Header: 'Entered (UTC)',
        Filter: ''
      },
      {
        accessor: 'departed',
        Header: 'Departed (UTC)',
        Filter: ''
      },
      {
        accessor: 'port_name',
        Header: 'Port (code)',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'port_country_name',
        Header: 'Country',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'speed',
        Header: 'Speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'type',
        Header: 'Type',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'location',
        Header: 'Latitude/Longitude',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.visits.map((val, index) => ({
        entered: isEmpty(val.entered) ? 'N/A' : val.entered,
        departed: isEmpty(val.departed) ? 'N/A' : val.departed,
        port_name: isEmpty(val.port.port_name) ? 'N/A' : val.port.port_name,
        port_country_name: isEmpty(val.port.port_country_name) ? 'N/A' : val.port.port_country_name,
        speed: isEmpty(val.speed) ? 'N/A' : val.speed,
        type: isEmpty(val.type) ? 'N/A' : val.type,
        location: `${val.longitude} , ${val.latitude}`
      })),
    [ship_data]
  )
  return (
    <>
      {count === 0 ? (
        'None Found'
      ) : (
        <>
          <p>{`Screening Date : ${ship_data.timestamp}`}</p>
          <p>{`Ais Days : ${ship_data.ais_days}`}</p>
          <p>{`Sampling Rate Minutes : ${ship_data.sampling_rate_minutes}`}</p>
          <Container fluid>
            <MyTable
              initialState={{
                pageSize: ship_data.count
              }}
              columns={columns}
              data={table_data}
            />
          </Container>
        </>
      )}
    </>
  )
}

export default SmhVisitsTable
