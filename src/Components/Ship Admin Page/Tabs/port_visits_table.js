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
        accessor: 'severity',
        Header: 'Risk Category',
        Filter: SelectColumnFilter,
        disableSortBy: true
      }
    ],
    []
  )
  let severity_code = {"20": 'OK', "40": 'Warning', "60": 'Critical', "10": 'Pending', "30": "Unknown"}
  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        entered: isEmpty(val.entered) ? 'N/A' : val.entered,
        departed: isEmpty(val.departed) ? 'N/A' : val.departed,
        port_name: isEmpty(val.port_name)
          ? 'N/A'
          : `${val.port_name} (${isEmpty(val.port_code) ? 'N/A' : val.port_code})`,
        port_country_name: isEmpty(val.port_country_name) ? 'N/A' : val.port_country_name,
        severity: isEmpty(val.severity) ? 'N/A' : severity_code[val.severity]
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
                pageSize: 100
              }}
              Pagination={true}
              page_size_options={[50, 100, 200]}
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
