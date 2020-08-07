import React from 'react'
import MyTable from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function SmhGapsTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'gaps_hour',
        Header: 'Duration (hr)',
        Filter: ''
      },
      {
        accessor: 'last_report_timestamp',
        Header: 'Start Timestamp',
        Filter: ''
      },
      {
        accessor: 'last_report.latitude',
        Header: 'Start Position',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_report.speed',
        Header: 'start_speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_report.course',
        Header: 'start_course',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_report.status',
        Header: 'start_status',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'current_report_timestamp',
        Header: 'End Timestamp',
        Filter: ''
      },
      {
        accessor: 'current_report.latitude',
        Header: 'end_position',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'current_report.speed',
        Header: 'end_speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'current_report.course',
        Header: 'end_course',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'current_report.status',
        Header: 'end_status',
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

        end_timestamp: isEmpty(val.end_timestamp) ? 'N/A' : val.end_timestamp,
        end_position: isEmpty(val.end_position) ? 'N/A' : val.end_position,
        end_speed: isEmpty(val.end_speed) ? 'N/A' : val.end_speed,
        end_course: isEmpty(val.port_name) ? 'N/A' : val.end_course,
        end_status: isEmpty(val.end_status) ? 'N/A' : val.end_status,
        start_location: `${val.last_report.longitude} , ${val.last_report.latitude}`
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

export default SmhGapsTable
