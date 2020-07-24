import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import MyCard from '../Reuseable/my_card'
import { useForm, FormContext } from 'react-hook-form'
import { Form, Row, Col, Button, Accordion, Card } from 'react-bootstrap'
import MyInput from '../Reuseable/my_input'
import { getCommsInd } from '../../Redux/Comms_ind/actions'
import CommsTable from './comm_table'

function FilteredCommsCard() {
  const dispatch = useDispatch()
  const [showTable, setshowTable] = React.useState(false)
  const [expanded, setexpanded] = React.useState(false)
  const [url, setUrl] = React.useState()
  const comms = useSelector((state) => state.comms)
  const ind_comm_form = useForm()
  const { handleSubmit } = ind_comm_form
  let itemsPerPage = 100
  const onSubmit = (form_data) => {
    let params = `${form_data.channel && `&field=channel&value=${form_data.channel}`}${
      form_data.model && `&field=model&value=${form_data.model}`
    }${form_data.manufacturers && `&field=manufacturer&value=${form_data.manufacturers}`}${
      form_data.reporting_rate && `&field=reporting_rate&value=${form_data.reporting_rate}`
    }`
    dispatch(getCommsInd(params))
    setUrl(params)
    setshowTable(true)
  }
  return (
    <>
      <Row className='justify-content-center'>
        <Col md='6'>
          <Accordion defaultActiveKey='1'>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='0'
                  onClick={() => setexpanded((prevExpanded) => (prevExpanded = !prevExpanded))}>
                  Filter Comms{' '}
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
                              <i className='fas fa-star-of-life text-danger fa-xs'></i> Channels
                            </>
                          }
                          name='channel'
                          input_type='select'
                          options={comms.data.channels}
                        />
                      </Col>
                      <Col>
                        <MyInput
                          label={
                            <>
                              <i className='fas fa-star-of-life text-danger fa-xs'></i> Models
                            </>
                          }
                          name='model'
                          input_type='select'
                          options={comms.data.models}
                        />
                      </Col>
                      <Col>
                        <MyInput
                          label={
                            <>
                              <i className='fas fa-star-of-life text-danger fa-xs'></i> Manufacturers
                            </>
                          }
                          name='manufacturers'
                          input_type='select'
                          options={comms.data.manufacturers}
                        />
                      </Col>
                      <Col>
                        <MyInput
                          label={
                            <>
                              <i className='fas fa-star-of-life text-danger fa-xs'></i> Reporting Rates
                            </>
                          }
                          name='reporting_rate'
                          input_type='select'
                          options={comms.data.reporting_rates}
                        />
                      </Col>
                    </Row>
                    <Button type='submit' onClick={handleSubmit}>
                      Find Comms
                    </Button>
                  </Form>
                </FormContext>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md='10'>{showTable && <CommsTable itemsPerPage={itemsPerPage} url={url} />}</Col>
      </Row>
    </>
  )
}

export default FilteredCommsCard

//  <MyCard
//             header_text='Filter Comms'
//             header_class='h5'
//             main_text={
//               <FormContext {...ind_comm_form}>
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Row>
//                     <Col>
//                       <MyInput
//                         label={
//                           <>
//                             <i className='fas fa-star-of-life text-danger fa-xs'></i> Channels
//                           </>
//                         }
//                         name='channel'
//                         input_type='select'
//                         options={comms.data.channels}
//                       />
//                     </Col>
//                     <Col>
//                       <MyInput
//                         label={
//                           <>
//                             <i className='fas fa-star-of-life text-danger fa-xs'></i> Models
//                           </>
//                         }
//                         name='model'
//                         input_type='select'
//                         options={comms.data.models}
//                       />
//                     </Col>
//                     <Col>
//                       <MyInput
//                         label={
//                           <>
//                             <i className='fas fa-star-of-life text-danger fa-xs'></i> Manufacturers
//                           </>
//                         }
//                         name='manufacturers'
//                         input_type='select'
//                         options={comms.data.manufacturers}
//                       />
//                     </Col>
//                     <Col>
//                       <MyInput
//                         label={
//                           <>
//                             <i className='fas fa-star-of-life text-danger fa-xs'></i> Reporting Rates
//                           </>
//                         }
//                         name='reporting_rate'
//                         input_type='select'
//                         options={comms.data.reporting_rates}
//                       />
//                     </Col>
//                   </Row>
//                   <Button type='submit' onClick={handleSubmit}>
//                     Find Comms
//                   </Button>
//                 </Form>
//               </FormContext>
//             }
//           />
