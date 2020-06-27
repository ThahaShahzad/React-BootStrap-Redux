import React from 'react'
import MyInput from '../Reuseable/my_input'
import MyCard from '../Reuseable/my_card'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useForm, FormContext } from 'react-hook-form'
import * as yup from 'yup'

function CommsCard() {
  const comms_card_valid = yup.object().shape({
    comm_id: yup.number().required().positive().integer()
  })

  const comms_card_form = useForm({
    defaultValues: {
      comm_id: ''
    },
    validationSchema: comms_card_valid
  })

  const { handleSubmit, errors, watch } = comms_card_form
  console.log(watch())
  let history = useHistory()
  const onSubmit = (form_data) => {
    history.push(`/comAdmin/${form_data.comm_id}`)
  }
  return (
    <>
      <MyCard
        header_text={<h3>Communicators</h3>}
        title_text='Search By Comm Id'
        header_class='bg-info text-white'
        main_text={
          <>
            <FormContext {...comms_card_form}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <>
                  <i className='fas fa-star-of-life text-danger fa-xs'></i> Communicator Id
                </>
                <MyInput placeholder='Enter Communicator Id...' name='comm_id' input_type='number' rows='1' />
                {errors.comm_id && <p className='text-danger'>Id is Required (Must Be a Positive Integer Number)</p>}
                <Button variant='outline-dark' type='submit'>
                  Search
                </Button>
              </Form>
            </FormContext>
            <h3>Or</h3> <Link to='/searchcoms'>Communicators Table</Link>
          </>
        }
      />
    </>
  )
}

export default CommsCard
