import React from 'react'
import MyTable from '../../Reuseable/my_table'
import { isEmpty } from '../../Reuseable/utils'
import { Container } from 'react-bootstrap'

function MmsiHistoryTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'mmsi',
        Header: 'Mmsi',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'created',
        Header: 'Created',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'effective_from',
        Header: 'Country',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'effective_to',
        Header: 'Last Port of call',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        mmsi: isEmpty(val.mmsi) ? 'N/A' : val.mmsi,
        created: isEmpty(val.created) ? 'N/A' : val.created,
        effective_from: isEmpty(val.effective_from) ? 'N/A' : val.effective_from,
        effective_to: isEmpty(val.effective_to) ? 'N/A' : val.effective_to
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
              pageSize: ship_data.meta.total_count
            }}
            columns={columns}
            data={table_data}
          />
        </Container>
      )}
    </>
  )
}

export default MmsiHistoryTable
