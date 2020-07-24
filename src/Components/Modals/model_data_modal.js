import React from 'react'
import MyModal from '../Reuseable/my_modal'
import { useSelector } from 'react-redux'
import MyList from '../Reuseable/my_list'

function ModelDataModal({ show, hide, model_name }) {
  const models_data = useSelector((state) => state.models.data)
  const find = (name) => models_data.find((val) => val.model === name)
  const model_data = find(model_name)
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
        title_text={model_data ? 'Model Data' : 'Invalid Model Id'}
        title_style={!model_data ? { color: 'red' } : { color: 'black' }}
        main_text={model_data && <MyList data={formated_data} label_style={{ fontWeight: 'bold' }} />}
      />
    </>
  )
}

export default ModelDataModal
