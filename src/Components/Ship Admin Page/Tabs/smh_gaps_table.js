import React from 'react'
import MyTable from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function SmhGapsTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'gap_hours',
        Header: 'Duration (hr)',
        Filter: ''
      },
      {
        accessor: 'last_report_timestamp',
        Header: 'Start Timestamp',
        Filter: ''
      },
      {
        accessor: 'last_report_position',
        Header: 'Start Position',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_report_speed',
        Header: 'Start speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_report_course',
        Header: 'Start course',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_report_status',
        Header: 'Start status',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'current_report_timestamp',
        Header: 'End Timestamp',
        Filter: ''
      },
      {
        accessor: 'current_report_position',
        Header: 'End position',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'current_report_speed',
        Header: 'End speed',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'current_report_course',
        Header: 'End course',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'current_report_status',
        Header: 'End status',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        gap_hours: isEmpty(val.gap_hours) ? 'N/A' : val.gap_hours,
        last_report_timestamp: isEmpty(val.last_report_timestamp) ? 'N/A' : val.last_report_timestamp,
        last_report_position: isEmpty(val.last_report) ? 'N/A' : val.last_report.longitude + ','  + val.last_report.latitude,
        last_report_speed: isEmpty(val.last_report) ? 'N/A' : val.last_report.speed,
        last_report_course: isEmpty(val.last_report) ? 'N/A' : val.last_report.course,
        last_report_status: isEmpty(val.last_report) ? 'N/A' : val.last_report.status,

        current_report_timestamp: isEmpty(val.current_report_timestamp) ? 'N/A' : val.current_report_timestamp,
        current_report_position: isEmpty(val.current_report) ? 'N/A' : val.current_report.longitude + ','  + val.current_report.latitude,
        current_report_speed: isEmpty(val.current_report) ? 'N/A' : val.current_report.speed,
        current_report_course: isEmpty(val.current_report) ? 'N/A' : val.current_report.course,
        current_report_status: isEmpty(val.current_report) ? 'N/A' : val.current_report.status
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

export default SmhGapsTable
