import React from 'react'
import MyModal from '../Reuseable/my_modal'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

function ModelDataModal({ show, hide, model_id }) {
  const models_data = useSelector((state) => state.models.data)
  const models_loading = useSelector((state) => state.models.isloading)
  const find = (id) => models_data.find((val) => Number(val.id) === id)
  const model_data = find(model_id)
  let headers = model_data && Object.keys(model_data)
  let data = model_data && Object.values(model_data)
  let formated_data = headers.map((val, index) => {
    return {
      head: val,
      data: data[index] === '' ? 'N/A' : data[index]
    }
  })
  return (
    <>
      {model_data ? (
        <MyModal
          show={show}
          onHide={hide}
          size={'lg'}
          backdrop='static'
          title_text='Model Data'
          main_text={
            <>
              <ListGroup className='text-left'>
                {formated_data.map((val, index) => (
                  <ListGroup.Item key={index}>
                    {val.head}: <strong>{val.data}</strong>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          }
        />
      ) : models_loading ? (
        <Loader />
      ) : !models_loading ? (
        <h1>Invaild Id</h1>
      ) : null}
    </>
  )
}

export default ModelDataModal
