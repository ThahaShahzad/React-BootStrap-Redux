import React from 'react'
import MyInput from '../Reuseable/my_input'
import MyCard from '../Reuseable/my_card'
import { Form, Button } from 'react-bootstrap'
import { useForm, FormContext } from 'react-hook-form'
import * as yup from 'yup'
import ModelDataModal from '../Modals/model_data_modal'

function ModelsCard() {
  const [model_id, setmodel_id] = React.useState()
  const [modelModalShow, setmodelModalShow] = React.useState(false)
  const models_card_valid = yup.object().shape({
    models_id: yup.number().positive().integer()
  })

  const models_card_form = useForm({
    validationSchema: models_card_valid
  })

  const { handleSubmit, errors } = models_card_form
  const onSubmit = (form_data) => {
    setmodel_id(form_data.models_id)
    setmodelModalShow(true)
  }
  return (
    <>
      <MyCard
        header_text={<h3>Models Data</h3>}
        title_text='Search By Model Id'
        header_class='bg-info text-white'
        main_text={
          <>
            <FormContext {...models_card_form}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <>
                  <i className='fas fa-star-of-life text-danger fa-xs'></i> Model Id
                </>
                <MyInput
                  placeholder='Enter Model Id...'
                  name='models_id'
                  input_type='number'
                  autoComplete='off'
                  size={30}
                  rows='1'
                />
                {errors.models_id && <p className='text-danger'>Id is Required (Must Be a Positive Integer Number)</p>}
                <Button variant='outline-dark' type='submit'>
                  Search
                </Button>
              </Form>
            </FormContext>
          </>
        }
      />
      <ModelDataModal show={modelModalShow} hide={() => setmodelModalShow(false)} model_id={model_id} />
    </>
  )
}

export default ModelsCard
