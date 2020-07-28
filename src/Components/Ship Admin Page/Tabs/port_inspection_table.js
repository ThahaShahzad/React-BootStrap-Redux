import React from 'react'
import MyTable from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function PortInspectionTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'authorisation',
        Header: 'Authority',
        Filter: ''
      },
      {
        accessor: 'port_name',
        Header: 'Port of inspection',
        Filter: ''
      },
      {
        accessor: 'country_name',
        Header: 'Country',
        Filter: ''
      },
      {
        accessor: 'inspection_date',
        Header: 'Date of report',
        Filter: ''
      },
      {
        accessor: 'detained',
        Header: 'Detention',
        Filter: ''
      },
      {
        accessor: 'no_days_detained',
        Header: 'Duration days',
        Filter: ''
      },
      {
        accessor: 'no_defects',
        Header: 'Number of deﬁciencies',
        Filter: ''
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        authorisation: isEmpty(val.authorisation) ? 'N/A' : val.authorisation,
        port_name: isEmpty(val.port_name) ? 'N/A' : val.port_name,
        country_name: isEmpty(val.country_name) ? 'N/A' : val.country_name,
        inspection_date: isEmpty(val.inspection_date) ? 'N/A' : val.inspection_date,
        detained: isEmpty(val.detained) ? 'N/A' : val.detained,
        no_days_detained: isEmpty(val.no_days_detained) ? 'N/A' : val.no_days_detained,
        no_defects: isEmpty(val.no_defects) ? 'N/A' : val.no_defects
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

export default PortInspectionTable
