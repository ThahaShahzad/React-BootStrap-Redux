import React from 'react'
import MyTable, { SelectColumnFilter } from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function SmhVisitsTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'index',
        Header: 'Index',
        Filter: ''
      },
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
        Header: 'Port',
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
      ship_data.objects.map((val, index) => ({
        index: index + 1,
        entered: isEmpty(val.entered) ? 'N/A' : val.entered,
        departed: isEmpty(val.departed) ? 'N/A' : val.departed,
        port_name: isEmpty(val.port)
          ? 'N/A'
          : `${val.port.port_name} (${isEmpty(val.port.port_code) ? 'N/A' : val.port.port_code})`,
        port_country_name: isEmpty(val.port) ? 'N/A' : val.port.port_country_name,
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
            <p><b>Screening Date</b> : {ship_data.meta.timestamp}</p>
            <p><b>AIS Days</b> : {ship_data.meta.ais_days}</p>
            <p><b>Sampling Rate Minutes</b> : {ship_data.meta.rate}</p>
          <Container fluid>
            <MyTable
              initialState={{
                pageSize: 100
              }}
              Pagination={true}
              page_size_options={[50, 100, 200, 500]}
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
