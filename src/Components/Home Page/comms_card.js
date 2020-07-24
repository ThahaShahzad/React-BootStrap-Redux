import React from 'react'
import MyInput from '../Reuseable/my_input'
import MyCard from '../Reuseable/my_card'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useForm, FormContext } from 'react-hook-form'
import * as yup from 'yup'

function CommsCard() {
  const comms_card_valid = yup.object().shape({
    comm_id: yup.number().required().positive().integer()
  })

  const comms_card_form = useForm({
    validationSchema: comms_card_valid
  })

  const { handleSubmit, errors } = comms_card_form
  let history = useHistory()
  const onSubmit = (form_data) => {
    history.push(`/comAdmin/${form_data.comm_id}`)
  }
  return (
    <>
      <MyCard
        header_text={<h3>Go To Communicators Page</h3>}
        title_text='Search By Comm Id'
        header_class='bg-info text-white'
        main_text={
          <FormContext {...comms_card_form}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <>
                <i className='fas fa-star-of-life text-danger fa-xs'></i> Communicator Id
              </>
              <MyInput
                placeholder='Enter Communicator Id...'
                name='comm_id'
                input_type='number'
                autoComplete='off'
                size={30}
                rows='1'
              />
              {errors.comm_id && <p className='text-danger'>Id is Required (Must Be a Positive Integer Number)</p>}
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

export default CommsCard
