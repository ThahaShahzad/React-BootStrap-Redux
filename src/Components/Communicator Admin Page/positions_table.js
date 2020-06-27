import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Row, Col, Button } from 'react-bootstrap'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getPositions } from '../../Redux/Positions_ind/actions'

function PositionsTable({ comm_id }) {
  const position_data = useSelector((state) => state.positions.data)
  const position_loaded = useSelector((state) => state.positions.loaded)
  const position_loading = useSelector((state) => state.positions.isloading)
  const { SearchBar } = Search
  const dispatch = useDispatch()
  const columns = [
    {
      dataField: 'timestamp',
      text: 'Timestamp',
      sort: true
    },
    {
      dataField: 'type_code',
      text: 'Type Code',
      sort: true
    },
    {
      dataField: 'source_name',
      text: 'Source',
      sort: true
    },
    {
      dataField: 'location',
      text: 'Location',
      sort: true
    },
    {
      dataField: 'cog_sog',
      text: 'Sog/Cog',
      sort: true
    },
    {
      dataField: 'delivered_count',
      text: 'Delivered Count',
      sort: true,
      headerStyle: () => {
        return { width: '5%' }
      }
    }
  ]
  let table_data =
    position_loaded && Array.isArray(position_data)
      ? position_data.map((val, index) => ({
          timestamp: val.timestamp,
          type_code: val.type_code,
          location: `${parseFloat(val.latitude).toFixed(5)} , ${parseFloat(val.longitude).toFixed(5)}`,
          cog_sog: `${parseFloat(val.sog_reported).toFixed(5) ? parseFloat(val.sog_reported).toFixed(5) : 'N/A'} / ${
            parseFloat(val.cog_reported).toFixed(5) ? parseFloat(val.cog_reported).toFixed(5) : 'N/A'
          }`,
          source_name: val.source_name,
          delivered_count: val.delivered_count
        }))
      : []

  return (
    <>
      {position_loaded && !position_loading && Array.isArray(position_data) ? (
        <>
          <br></br>
          <ToolkitProvider keyField='id' bootstrap4={true} data={table_data} columns={columns} search>
            {(props) => (
              <>
                <Row>
                  <Col md='2'>
                    <SearchBar key='positions' {...props.searchProps} />
                  </Col>
                  <Col md='9' />
                  <Col md='1'>
                    Refresh{' '}
                    <Button onClick={() => dispatch(getPositions(comm_id))}>
                      <i className='fas fa-sync-alt'></i>
                    </Button>
                  </Col>
                </Row>
                <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
              </>
            )}
          </ToolkitProvider>
        </>
      ) : position_loading ? (
        <Loader />
      ) : (
        <h1>No Positions Found</h1>
      )}
    </>
  )
}

export default PositionsTable
