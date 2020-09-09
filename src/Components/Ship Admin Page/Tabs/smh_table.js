import React from 'react'
import MyTable from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function SmhTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'timestamp',
        Header: 'timestamp',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'ais_days',
        Header: 'Cached Days',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'smh_count',
        Header: 'SMH Count',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'ais_positions_count',
        Header: 'AIS Positions Count',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'ais_gaps_count',
        Header: 'AIS Gap Count',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'visits',
        Header: 'Port Visit Count',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'external_id',
        Header: 'External Id',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        timestamp: isEmpty(val.timestamp) ? 'N/A' : val.timestamp,
        ais_days: isEmpty(val.ais_days) ? 'N/A' : val.ais_days,
        smh_count: isEmpty(val.smh_count) ? 'N/A' : val.smh_count,
        ais_positions_count: isEmpty(val.ais_positions_count) ? 'N/A' : val.ais_positions_count,
        ais_gaps_count: isEmpty(val.ais_gaps_count) ? 'N/A' : val.ais_gaps_count,
        visits: isEmpty(val.visits) ? 'N/A' : val.visits,
        external_id: isEmpty(val.external_id) ? 'N/A' : val.external_id
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
                pageSize: ship_data.meta.count
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

export default SmhTable
