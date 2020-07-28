import React from 'react'
import MyTable from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function AisStatusTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'call_sign',
        Header: 'Call Sign',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'imo_number',
        Header: 'Imo Number',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'loa',
        Header: 'LOA',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'mmsi',
        Header: 'Mmsi',
        Filter: ''
      },
      {
        accessor: 'name',
        Header: 'Name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'position',
        Header: 'Position',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'position_course',
        Header: 'Position Course',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'position_speed',
        Header: 'Position Speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'position_timestamp',
        Header: 'Position Timestamp',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'ship_type',
        Header: 'Ship Type',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'voyage_destination',
        Header: 'Voyage Destination',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'voyage_timestamp',
        Header: 'Voyage Timestamp',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.status.map((val, index) => ({
        call_sign: isEmpty(val.call_sign) ? 'N/A' : val.call_sign,
        imo_number: isEmpty(val.imo_number) ? 'N/A' : val.imo_number,
        loa: isEmpty(val.loa) ? 'N/A' : val.loa,
        mmsi: isEmpty(val.mmsi) ? 'N/A' : val.mmsi,
        name: isEmpty(val.name) ? 'N/A' : val.name,
        position: isEmpty(val.position) ? 'N/A' : val.position,
        position_course: isEmpty(val.position_course) ? 'N/A' : val.position_course,
        position_speed: isEmpty(val.position_speed) ? 'N/A' : val.position_speed,
        position_timestamp: isEmpty(val.position_timestamp) ? 'N/A' : val.position_timestamp,
        ship_type: isEmpty(val.ship_type) ? 'N/A' : val.ship_type,
        voyage_destination: isEmpty(val.voyage_destination) ? 'N/A' : val.voyage_destination,
        voyage_timestamp: isEmpty(val.voyage_timestamp) ? 'N/A' : val.voyage_timestamp
      })),
    [ship_data]
  )
  return (
    <>
      {count === 0 ? (
        'None Found'
      ) : (
        <>
          <Container fluid>
            <MyTable
              initialState={{
                pageSize: ship_data.status.length
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

export default AisStatusTable
