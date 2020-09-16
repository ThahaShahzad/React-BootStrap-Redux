import React from 'react'
import { useDispatch } from 'react-redux'
import MyCard from '../Reuseable/my_card'
import { useForm, FormContext } from 'react-hook-form'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import MyInput from '../Reuseable/my_input'
import { getShipsInd } from '../../Redux/Ships_ind/actions'
import * as yup from 'yup'
import ShipsTable from '../Ships Page/table'

function SearchIndShipCard() {
  const ind_ship_form = useForm({
    validationSchema: yup.object().shape({ ship: yup.string().required() })
  })
  const dispatch = useDispatch()
  const [showTable, setshowTable] = React.useState(false)
  const { handleSubmit, errors } = ind_ship_form
  const [url, setUrl] = React.useState()
  let history = useHistory()
  let itemsPerPage = 100
  const onSubmit = (form_data) => {

    dispatch(getShipsInd(`&${form_data.search_type}__icontains=${form_data.ship}&limit=${itemsPerPage}&offset=0`))
    //history.push(`/shipAdmin/${form_data.search_type}__icontains=${form_data.ship}`)
    setUrl(`&${form_data.search_type}__icontains=${form_data.ship}`)
    setshowTable(true)
  }
  return (
   <>
    <MyCard
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
                  options={['imo_id', 'ship_name', 'mmsi', 'operator', 'registered_owner','ship_manager','technical_manager', 'group_beneficial_owner']}
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
      {showTable && <ShipsTable itemsPerPage={itemsPerPage} url={url} />}
   </>
  )
}

export default SearchIndShipCard
