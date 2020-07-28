import React from 'react'
import MyTable from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function SgaTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'duration_seconds',
        Header: 'Duration (hr)',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'start_timestamp',
        Header: 'Start Timestamp',
        Filter: ''
      },
      {
        accessor: 'start_position',
        Header: 'Start Position',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'start_speed',
        Header: 'start_speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'start_course',
        Header: 'start_course',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'start_status',
        Header: 'start_status',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'start_draught',
        Header: 'start_draught',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'end_timestamp',
        Header: 'end_timestamp',
        Filter: ''
      },
      {
        accessor: 'end_position',
        Header: 'end_position',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'end_speed',
        Header: 'end_speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'end_course',
        Header: 'end_course',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'end_status',
        Header: 'end_status',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'end_draught',
        Header: 'end_draught',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        duration_seconds: isEmpty(val.duration_seconds) ? 'N/A' : (val.duration_seconds / 3600).toFixed(5),
        start_timestamp: isEmpty(val.start_timestamp) ? 'N/A' : val.start_timestamp,
        start_position: isEmpty(val.start_position) ? 'N/A' : val.start_position,
        start_speed: isEmpty(val.start_speed) ? 'N/A' : val.start_speed,
        start_course: isEmpty(val.start_course) ? 'N/A' : val.start_course,
        start_status: isEmpty(val.start_status) ? 'N/A' : val.start_status,
        start_draught: isEmpty(val.start_draught) ? 'N/A' : val.start_draught,
        end_timestamp: isEmpty(val.end_timestamp) ? 'N/A' : val.end_timestamp,
        end_position: isEmpty(val.end_position) ? 'N/A' : val.end_position,
        end_speed: isEmpty(val.end_speed) ? 'N/A' : val.end_speed,
        end_course: isEmpty(val.port_name) ? 'N/A' : val.end_course,
        end_status: isEmpty(val.end_status) ? 'N/A' : val.end_status,
        end_draught: isEmpty(val.end_draught) ? 'N/A' : val.end_draught
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

export default SgaTable
