import React from 'react'
import MyTable, {SelectColumnFilter} from '../../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { isEmpty } from '../../Reuseable/utils'

function PurpleTracTable({ ship_data, count }) {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'transaction_id',
        Header: 'Transaction Id',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'status',
        Header: 'Transaction Status',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'creation_date',
        Header: 'Creation Date',
        Filter: ''
      },
      {
        accessor: 'screened_date',
        Header: 'Screened Date',
        Filter: ''
      },
      {
        accessor: 'tracking_date',
        Header: 'Tracking Date',
        Filter: ''
      },
      {
        accessor: 'closed_date',
        Header: 'Closed Date',
        Filter: ''
      },

      {
        accessor: 'company_name',
        Header: 'Company Name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'account_status',
        Header: 'Account Status',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'user_name',
        Header: 'User Name',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'screening_status',
        Header: 'Screening Status',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'overall_severity',
        Header: 'Overall Severity',
        Filter: SelectColumnFilter
      },
      {
        accessor: 'ship_sanction',
        Header: 'Ship Sanction Check',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'company_sanction',
        Header: 'Company Sanction Check',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'country_sanction',
        Header: 'Country Sanction Check',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'psc_history',
        Header: 'Port Inspection Check',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'smh',
        Header: 'SMH Check',
        Filter: '',
        disableSortBy: true
      }
    ],
    []
  )
  let severity = {"20": 'OK', "40": 'Warning', "60": 'Critical', "10": 'Pending', "30": "Unknown"}
  let table_data = React.useMemo(
    () =>

      ship_data.objects.map((val, index) => ({
        transaction_id: isEmpty(val.transaction_id) ? 'N/A' : val.transaction_id,
        status: isEmpty(val.status) ? 'N/A' : val.status,
        creation_date: isEmpty(val.creation_date) ? 'N/A' : val.creation_date,
        screened_date: isEmpty(val.screened_date) ? 'N/A' : val.screened_date,
        tracking_date: isEmpty(val.tracking_date) ? 'N/A' : val.tracking_date,
        closed_date: isEmpty(val.closed_date) ? 'N/A' : val.closed_date,
        screening_status: isEmpty(val.screening_status) ? 'N/A' : severity[val.screening_status],
        overall_severity: isEmpty(val.overall_severity) ? 'N/A' : severity[val.overall_severity],

        company_name: isEmpty(val.company_name) ? 'N/A' : val.company_name,
        account_status: isEmpty(val.account_status) ? 'N/A' : val.account_status,
        user_name: isEmpty(val.user_name) ? 'N/A' : val.user_name,
        company_sanction: isEmpty(val.screen_results) ? '' :
            severity[val.screen_results.COMPANY_SANCTIONS],
        country_sanction: isEmpty(val.screen_results) ? '' :
            severity[val.screen_results.COUNTRY_SANCTIONS],
        psc_history: isEmpty(val.screen_results) ? '' :
            severity[val.screen_results.PSC_HISTORY],
        ship_sanction: isEmpty(val.screen_results) ? '' :
            severity[val.screen_results.SANCTIONS],
        smh: isEmpty(val.screen_results) ? '' :
            severity[val.screen_results.SHIP_MOVE_HIST]
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

export default PurpleTracTable
