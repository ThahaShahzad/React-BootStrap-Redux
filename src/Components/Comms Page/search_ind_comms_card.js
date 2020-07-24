import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import MyCard from '../Reuseable/my_card'
import { useForm, FormContext } from 'react-hook-form'
import { Form, Row, Col, Button, Accordion, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import MyInput from '../Reuseable/my_input'
import * as yup from 'yup'
import { getCommsInd } from '../../Redux/Comms_ind/actions'
import Loader from 'react-loader-spinner'

function SearchIndCommsCard() {
  const [expanded, setexpanded] = React.useState(false)
  const comms_ind = useSelector((state) => state.comms_ind)
  const ind_comm_form = useForm({
    validationSchema: yup.object().shape({ comm: yup.string().required(), search_type: yup.string().required() })
  })
  const dispatch = useDispatch()
  const { handleSubmit, errors, getValues, formState } = ind_comm_form
  const { isSubmitted } = formState
  console.log('SearchIndCommsCard -> isSubmitted', isSubmitted)
  const form_data = getValues({ nest: true })
  let history = useHistory()
  const onSubmit = (form_data) => {
    dispatch(getCommsInd(`&field=${form_data.search_type}&value=${form_data.comm}`))
  }

  if (
    comms_ind.loaded &&
    comms_ind.data.meta &&
    comms_ind.data.meta.total_count === 1 &&
    !comms_ind.isloading &&
    isSubmitted
  ) {
    history.push(`/comAdmin/field=${form_data.search_type}&value=${form_data.comm}`)
  }

  return (
    <Accordion defaultActiveKey='1'>
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant='link'
            eventKey='0'
            onClick={() => setexpanded((prevExpanded) => (prevExpanded = !prevExpanded))}>
            Search Individual Comms{' '}
            {!expanded ? <i className='fas fa-chevron-down'></i> : <i className='fas fa-chevron-up'></i>}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <FormContext {...ind_comm_form}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <MyInput
                    label={
                      <>
                        <i className='fas fa-star-of-life text-danger fa-xs'></i> Search Type
                      </>
                    }
                    name='search_type'
                    input_type='select'
                    options={['comm_id', 'serial_number', 'identifier_value']}
                  />
                  {errors.search_type && <p className='text-danger'>Search type Is Required</p>}
                </Col>
                <Col>
                  <MyInput
                    label={
                      <>
                        <i className='fas fa-star-of-life text-danger fa-xs'></i> Search
                      </>
                    }
                    placeholder='Search Comms'
                    name='comm'
                    input_type='text'
                    autoComplete='off'
                    rows='1'
                  />
                  {errors.comm && <p className='text-danger'>Search Field Is Required</p>}
                </Col>
              </Row>
              {comms_ind.isloading && isSubmitted && <Loader />}
              {comms_ind.loaded && !comms_ind.isloading && comms_ind.data.error_message && <p>None Found</p>}
              {comms_ind.loaded &&
                !comms_ind.isloading &&
                comms_ind.data.meta &&
                comms_ind.data.meta.total_count === 0 && <p>None Found</p>}
              <Button type='submit' onClick={handleSubmit}>
                Search
              </Button>
            </Form>
          </FormContext>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default SearchIndCommsCard

// <MyCard
// header_text='Search For Individual Comms'
// header_class='h5'
// main_text={
// <FormContext {...ind_comm_form}>
//   <Form onSubmit={handleSubmit(onSubmit)}>
//     <Row>
//       <Col>
//         <MyInput
//           label={
//             <>
//               <i className='fas fa-star-of-life text-danger fa-xs'></i> Search Type
//             </>
//           }
//           name='search_type'
//           input_type='select'
//           options={['comm_id', 'serial_number', 'identifier_value']}
//         />
//         {errors.search_type && <p className='text-danger'>Search type Is Required</p>}
//       </Col>
//       <Col>
//         <MyInput
//           label={
//             <>
//               <i className='fas fa-star-of-life text-danger fa-xs'></i> Search
//             </>
//           }
//           placeholder='Search Comms'
//           name='comm'
//           input_type='text'
//           autoComplete='off'
//           rows='1'
//         />
//         {errors.comm && <p className='text-danger'>Search Field Is Required</p>}
//       </Col>
//     </Row>
//     {comms_ind.isloading && isSubmitted && <Loader />}
//     {comms_ind.loaded && !comms_ind.isloading && comms_ind.data.error_message && <p>None Found</p>}
//     {comms_ind.loaded &&
//       !comms_ind.isloading &&
//       comms_ind.data.meta &&
//       comms_ind.data.meta.total_count === 0 && <p>None Found</p>}
//     <Button type='submit' onClick={handleSubmit}>
//       Search
//     </Button>
//   </Form>
// </FormContext>
// }
// />
