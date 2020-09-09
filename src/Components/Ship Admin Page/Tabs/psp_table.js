import React from 'react'
import MyTable from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function PspTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'Sub Id',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'last_position_timestamp',
        Header: 'last_position_timestamp',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'status',
        Header: 'Status',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'ship_name',
        Header: 'ship_name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'mmsi',
        Header: 'mmsi',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'call_sign',
        Header: 'call_sign',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'company_name',
        Header: 'company_name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'account_status',
        Header: 'account_status',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'account_type',
        Header: 'account_type',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'fleet_name',
        Header: 'fleet_name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'is_trial',
        Header: 'is_trial',
        Filter: '',
        disableSortBy: true
      },

      {
        accessor: 'parent_id',
        Header: 'parent_id',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'sap_code',
        Header: 'sap_code',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'comm_id',
        Header: 'Comm ID',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'identifier',
        Header: 'Identifier',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>
      ship_data.objects.map((val, index) => ({
        id: isEmpty(val.id) ? 'N/A' : val.id,
        last_position_timestamp: isEmpty(val.last_position_timestamp) ? 'N/A' : val.last_position_timestamp,
        status: isEmpty(val.status) ? 'N/A' : val.status,
        ship_name: isEmpty(val.ship_name) ? 'N/A' : val.ship_name,
        mmsi: isEmpty(val.mmsi) ? 'N/A' : val.mmsi,
        call_sign: isEmpty(val.call_sign) ? 'N/A' : val.call_sign,
        company_name: isEmpty(val.company_name) ? 'N/A' : val.company_name,
        account_status: isEmpty(val.account_status) ? 'N/A' : val.account_status,
        account_type: isEmpty(val.account_type) ? 'N/A' : val.account_type,
        fleet_name: isEmpty(val.fleet_name) ? 'N/A' : val.fleet_name,
        is_trial: val.is_trial ? 'True' : 'False',
        parent_id: isEmpty(val.parent_id) ? 'N/A' : val.parent_id,
        sap_code: isEmpty(val.sap_code) ? 'N/A' : val.sap_code,
        comm_id: isEmpty(val.comm_id) ? 'N/A' : <a target="_blank" href={'#/comAdmin/field=comm_id&value='+val.comm_id}>{val.comm_id}</a>,
        identifier: val.identifier_type + '=' + val.identifier_value
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

export default PspTable
