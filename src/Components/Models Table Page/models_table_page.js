import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getModels } from '../../Redux/Models/actions'

function ModelsTablePage() {
  const models_data = useSelector((state) => state.models.data)
  const models_loaded = useSelector((state) => state.models.loaded)
  const models_loading = useSelector((state) => state.models.isloading)
  const dispatch = useDispatch()
  const { SearchBar } = Search
  const columns = [
    {
      dataField: 'id',
      text: 'Model Id',
      sort: true
    },
    {
      dataField: 'model',
      text: 'Model',
      sort: true
    },
    {
      dataField: 'manufacturer',
      text: 'Manufacturer',
      sort: true
    },
    {
      dataField: 'identifier_type',
      text: 'Identifier Type',
      sort: true
    },
    {
      dataField: 'is_active',
      text: 'Is Active',
      sort: true
    }
  ]
  let table_data =
    models_loaded &&
    models_data.map((val, index) => ({
      index: index,
      id: val.id,
      model: val.model,
      manufacturer: val.manufacturer_name,
      identifier_type: val.identifier_type !== '' ? val.identifier_type : 'N/A',
      is_active: val.is_active
    }))
  // const defaultSorted = [
  //   {
  //     dataField: 'last_position_timestamp',
  //     order: 'desc'
  //   }
  // ]

  return (
    <>
      {models_loaded && !models_loading ? (
        <Container fluid>
          <h1>Models Table</h1>
          <Row>
            <Col md='1' />
            <Col>
              <br></br>
              <ToolkitProvider keyField='index' data={table_data} columns={columns} search>
                {(props) => (
                  <>
                    <Row>
                      <Col md='2'>
                        <SearchBar {...props.searchProps} />
                      </Col>
                      <Col md='9' />
                      <Col md='1'>
                        Refresh{' '}
                        <Button onClick={() => dispatch(getModels())}>
                          <i className='fas fa-sync-alt'></i>
                        </Button>
                      </Col>
                    </Row>
                    <BootstrapTable
                      {...props.baseProps}
                      pagination={paginationFactory()}
                      wrapperClasses='table-responsive'
                    />
                  </>
                )}
              </ToolkitProvider>
            </Col>
            <Col md='1' />
          </Row>
        </Container>
      ) : models_loading ? (
        <Loader />
      ) : null}
    </>
  )
}

export default ModelsTablePage
