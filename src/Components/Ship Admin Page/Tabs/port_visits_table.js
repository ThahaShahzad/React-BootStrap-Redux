import React from 'react'
import MyTable, { SelectColumnFilter } from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function PortVisitsTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'entered',
        Header: 'Entered (UTC)',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'departed',
        Header: 'Departed (UTC)',
        Filter: '',
        disableSortBy: true
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
        accessor: 'severity',
        Header: 'Risk Category',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        entered: isEmpty(val.entered) ? 'N/A' : val.entered,
        departed: isEmpty(val.departed) ? 'N/A' : val.departed,
        port_name: isEmpty(val.port_name)
          ? 'N/A'
          : `${val.port_name} (${isEmpty(val.port_code) ? 'N/A' : val.port_code})`,
        port_country_name: isEmpty(val.port_country_name) ? 'N/A' : val.port_country_name,
        severity:
          val.severity === 20 ? null : val.severity === 30 ? 'Warning' : val.severity === 40 ? 'Critical' : 'Unknown'
      })),
    [ship_data]
  )
  return (
    <>
      {count === 0 ? (
        'None Found'
      ) : (
        <>
          <p>{`Transaction Id : ${ship_data.objects[0].transaction_id}`}</p>
          <p>{`Screened Date : ${ship_data.objects[0].screened_date}`}</p>
          <Container fluid>
            <MyTable
              initialState={{
                pageSize: 20
              }}
              Pagination={true}
              page_size_options={[20, 40, 60]}
              columns={columns}
              data={table_data}
            />
          </Container>
        </>
      )}
    </>
  )
}

export default PortVisitsTable
