import React from 'react'
import MyModal from '../Reuseable/my_modal'
import { useSelector, useDispatch } from 'react-redux'
import MyList from '../Reuseable/my_list'
import { getModels } from '../../Redux/Models/actions'

function ModelDataModal({ show, hide, model_id }) {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getModels())
  }, [dispatch])
  const models_data = useSelector((state) => state.models.data)
  const find = (id) => models_data.find((val) => Number(val.id) === id)
  const model_data = find(model_id)
  let headers = model_data && Object.keys(model_data)
  let data = model_data && Object.values(model_data)
  let formated_data =
    model_data &&
    headers.map((val, index) => {
      return {
        label: val,
        value: data[index] === '' ? 'N/A' : data[index]
      }
    })
  return (
    <>
      <MyModal
        show={show}
        onHide={hide}
        size={'lg'}
        backdrop='static'
        title_text={model_data ? 'Model Data' : 'Invalid Model Id'}
        title_style={!model_data ? { color: 'red' } : { color: 'black' }}
        main_text={model_data && <MyList data={formated_data} label_style={{ fontWeight: 'bold' }} />}
      />
    </>
  )
}

export default ModelDataModal
