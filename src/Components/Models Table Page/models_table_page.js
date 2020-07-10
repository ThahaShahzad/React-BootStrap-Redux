import React from 'react'
import ModelDataModal from '../Modals/model_data_modal'
import Loader from 'react-loader-spinner'
import MyTable, { SelectColumnFilter } from '../Reuseable/my_table'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getModels } from '../../Redux/Models/actions'

function ModelsTablePage() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getModels())
  }, [dispatch])
  const [modelModalShow, setmodelModalShow] = React.useState(false)
  const [model_id, setmodel_id] = React.useState()
  const models_data = useSelector((state) => state.models.data)
  const models_loaded = useSelector((state) => state.models.loaded)
  const models_loading = useSelector((state) => state.models.isloading)
  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'Model Id',
        Filter: ''
      },
      {
        accessor: 'id1',
        Header: 'id',
        Filter: '',
        disableSortBy: true
      },
      {
        accessor: 'model',
        Header: 'Model Name',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'manufacturer',
        Header: 'Manufacturer',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'identifier_type',
        Header: 'Identifier Type',
        Filter: SelectColumnFilter,
        disableSortBy: true
      },
      {
        accessor: 'is_active',
        Header: 'Is Active',
        Filter: SelectColumnFilter,
        disableSortBy: true
      }
    ],
    []
  )
  let table_data = React.useMemo(
    () =>
      models_loaded &&
      models_data.map((val, index) => ({
        id: (
          <button
            type='button'
            className='link-button'
            onClick={() => {
              setmodel_id(Number(val.id))
              setmodelModalShow(true)
            }}>
            {val.id}
          </button>
        ),
        id1: val.id,
        model: val.model,
        manufacturer: val.manufacturer_name,
        identifier_type: val.identifier_type !== '' ? val.identifier_type : 'N/A',
        is_active: val.is_active
      })),
    [models_loaded, models_data]
  )

  return (
    <>
      {models_loaded && !models_loading ? (
        <Container fluid>
          <h1>Models Table</h1>
          <MyTable
            initialState={{
              pageSize: 10,
              hiddenColumns: ['id1']
            }}
            dispatchFunc={getModels()}
            page_size_options={[10, 20, 30]}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : models_loading ? (
        <Loader />
      ) : null}

      <ModelDataModal show={modelModalShow} hide={() => setmodelModalShow(false)} model_id={model_id} />
    </>
  )
}

export default ModelsTablePage
