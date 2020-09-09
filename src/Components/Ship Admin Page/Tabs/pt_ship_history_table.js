import React from 'react'
import MyTable, {SelectColumnFilter} from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function PTShipTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'effective_from',
        Header: 'Effective From',
        Filter: ''
      },
      {
        accessor: 'effective_to',
        Header: 'Effective To',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'ship_name',
        Header: 'Name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'mmsi',
        Header: 'MMSI',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'call_sign',
        Header: 'Call Sign',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'flag_id',
        Header: 'Flag',
        Filter: ''
      },
      {
        accessor: 'flag_effective_date',
        Header: 'Flag Eff. Date',
        Filter: ''
      },
      {
        accessor: 'operator',
        Header: 'Operator',
        Filter: ''
      },
      {
        accessor: 'registered_owner',
        Header: 'Registered owner',
        Filter: ''
      },
      {
        accessor: 'ship_manager',
        Header: 'Ship manager',
        Filter: ''
      },
      {
        accessor: 'technical_manager',
        Header: 'Technical manager',
        Filter: ''
      },
      {
        accessor: 'group_beneficial_owner',
        Header: 'Group Benef. Owner',
        Filter: ''
      },
      {
        accessor: 'ihs_status',
        Header: 'Status',
        Filter: ''
      }
    ],
    []
  )

  let table_data = React.useMemo(
    () =>

      ship_data.objects.map((val, index) => ({
        effective_from: isEmpty(val.effective_from) ? 'N/A' : val.effective_from.substring(0, 19),
        effective_to: isEmpty(val.effective_to) ? 'N/A' : val.effective_to.substring(0, 19),
        ship_name: isEmpty(val.ship_name) ? 'N/A' : val.ship_name,
        mmsi: isEmpty(val.mmsi) ? 'N/A' : val.mmsi,
        call_sign: isEmpty(val.call_sign) ? 'N/A' : val.call_sign,
        flag_id: isEmpty(val.flag_id) ? 'N/A' : val.flag_id,
        flag_effective_date: isEmpty(val.flag_effective_date) ? 'N/A' : val.flag_effective_date,
        ihs_status: isEmpty(val.ihs_status) ? 'N/A' : val.ihs_status,
        operator: isEmpty(val.operator) ? 'N/A' : val.operator,
        registered_owner: isEmpty(val.registered_owner) ? 'N/A' : val.registered_owner,
        ship_manager: isEmpty(val.ship_manager) ? 'N/A' : val.ship_manager,
        technical_manager: isEmpty(val.technical_manager) ? 'N/A' : val.technical_manager,
        group_beneficial_owner: isEmpty(val.group_beneficial_owner) ? 'N/A' : val.group_beneficial_owner,
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
              pageSize: ship_data.meta.count
            }}
            columns={columns}
            data={table_data}
          />
        </Container>
      )}
    </>
  )
}

export default PTShipTable
