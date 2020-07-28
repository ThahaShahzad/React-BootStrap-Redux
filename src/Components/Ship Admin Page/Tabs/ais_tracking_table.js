import React from 'react'
import MyTable, { SelectColumnFilter } from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function AisTrackingTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'timestamp',
        Header: 'Timestamp',
        Filter: ''
      },
      {
        accessor: 'location',
        Header: 'Location',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'speed',
        Header: 'Speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'heading',
        Header: 'Heading',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'course',
        Header: 'Course',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'source',
        Header: 'Source',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'status',
        Header: 'Status',
        Filter: SelectColumnFilter,
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.track.data.map((val, index) => ({
        timestamp: isEmpty(val.timestamp) ? 'N/A' : val.timestamp,
        location: `${val.longitude} , ${val.latitude}`,
        speed: isEmpty(val.speed) ? 'N/A' : val.speed,
        heading: isEmpty(val.heading) ? 'N/A' : val.heading,
        course: isEmpty(val.course) ? 'N/A' : val.course,
        source: isEmpty(val.source) ? 'N/A' : val.source,
        status: isEmpty(val.status) ? 'N/A' : val.status
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
                pageSize: 50
              }}
              Pagination={true}
              page_size_options={[50, 100]}
              columns={columns}
              data={table_data}
            />
          </Container>
        </>
      )}
    </>
  )
}

export default AisTrackingTable
