import React from 'react'
import MyInput from '../Reuseable/my_input'
import MyCard from '../Reuseable/my_card'
import { Form, Button } from 'react-bootstrap'
import { useForm, FormContext } from 'react-hook-form'
import * as yup from 'yup'

function ModelsCard() {
  const models_card_valid = yup.object().shape({
    models_id: yup.number().required().positive().integer()
  })

  const models_card_form = useForm({
    defaultValues: {
      models_id: ''
    },
    validationSchema: models_card_valid
  })

  const { handleSubmit, errors } = models_card_form

  const onSubmit = (form_data) => {
    console.log(form_data)
  }
  return (
    <>
      <MyCard
        header_text={<h3>Models Data</h3>}
        title_text='Search By Model Id'
        header_class='bg-info text-white'
        main_text={
          <FormContext {...models_card_form}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <>
                <i className='fas fa-star-of-life text-danger fa-xs'></i> Model Id
              </>
              <MyInput placeholder='Enter Communicator Id...' name='models_id' input_type='number' rows='1' />
              {errors.models_id && <p className='text-danger'>Id is Required (Must Be a Positive Integer Number)</p>}
              <Button variant='outline-dark' type='submit'>
                Search
              </Button>
            </Form>
          </FormContext>
        }
      />
    </>
  )
}

export default ModelsCard
