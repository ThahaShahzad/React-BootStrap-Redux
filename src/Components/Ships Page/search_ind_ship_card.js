import React from 'react'
import { useDispatch } from 'react-redux'
import MyCard from '../Reuseable/my_card'
import { useForm, FormContext } from 'react-hook-form'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import MyInput from '../Reuseable/my_input'
import { getShipsInd } from '../../Redux/Ships_ind/actions'
import * as yup from 'yup'

function SearchIndShipCard() {
  const ind_ship_form = useForm({
    validationSchema: yup.object().shape({ ship: yup.string().required() })
  })
  const dispatch = useDispatch()
  const { handleSubmit, errors } = ind_ship_form
  let history = useHistory()
  const onSubmit = (form_data) => {
    dispatch(getShipsInd(`&${form_data.search_type}=${form_data.ship}`))
    history.push(`/shipAdmin/${form_data.search_type}=${form_data.ship}`)
  }
  return (
    <MyCard
      header_text='Search For Individual Ship'
      header_class='h5'
      main_text={
        <FormContext {...ind_ship_form}>
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
                  options={['imo', 'ship_name', 'mmsi']}
                />
              </Col>
              <Col>
                <MyInput
                  label={
                    <>
                      <i className='fas fa-star-of-life text-danger fa-xs'></i> Search
                    </>
                  }
                  placeholder='Search Ships'
                  name='ship'
                  input_type='text'
                  autoComplete='off'
                  rows='1'
                />
                {errors.ship && <p className='text-danger'>Search Field Is Required</p>}
              </Col>
            </Row>
            <Button type='submit' onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </FormContext>
      }
    />
  )
}

export default SearchIndShipCard
