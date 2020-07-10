import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyCard from '../Reuseable/my_card'
import { useForm, FormContext } from 'react-hook-form'
import { Form, Row, Col, Button } from 'react-bootstrap'
import MyInput from '../Reuseable/my_input'
import { getShips } from '../../Redux/Ships/actions'
import { getShipsInd } from '../../Redux/Ships_ind/actions'
import ShipsTable from './table'

function FilteredShipsCard() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getShips())
  }, [dispatch])

  const [showTable, setshowTable] = React.useState(false)
  const [url, setUrl] = React.useState()
  const ships = useSelector((state) => state.ships)
  const ind_ship_form = useForm()
  const { handleSubmit } = ind_ship_form
  let itemsPerPage = 50
  const onSubmit = (form_data) => {
    dispatch(
      getShipsInd(
        `${form_data.flag__name && `&flag__name=${form_data.flag__name}`}${
          form_data.shiptype_level_5 && `&shiptype_level_5=${form_data.shiptype_level_5}`
        }${form_data.year_of_build && `&year_of_build=${form_data.year_of_build}`}&limit=${itemsPerPage}&offset=0`
      )
    )
    setUrl(
      `${form_data.flag__name && `&flag__name=${form_data.flag__name}`}${
        form_data.shiptype_level_5 && `&shiptype_level_5=${form_data.shiptype_level_5}`
      }${form_data.year_of_build && `&year_of_build=${form_data.year_of_build}`}`
    )
    setshowTable(true)
  }
  return (
    <>
      <MyCard
        header_text='Filter Ships'
        header_class='h5'
        main_text={
          <FormContext {...ind_ship_form}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <MyInput
                    label={
                      <>
                        <i className='fas fa-star-of-life text-danger fa-xs'></i> Flag Name
                      </>
                    }
                    name='flag__name'
                    input_type='select'
                    options={ships.data.flag_name}
                  />
                </Col>
                <Col>
                  <MyInput
                    label={
                      <>
                        <i className='fas fa-star-of-life text-danger fa-xs'></i> Ship Type
                      </>
                    }
                    name='shiptype_level_5'
                    input_type='select'
                    options={ships.data.shiptype_level_5}
                  />
                </Col>
                <Col>
                  <MyInput
                    label={
                      <>
                        <i className='fas fa-star-of-life text-danger fa-xs'></i> Year of Build
                      </>
                    }
                    name='year_of_build'
                    input_type='select'
                    options={ships.data.year_of_build}
                  />
                </Col>
              </Row>
              <Button type='submit' onClick={handleSubmit}>
                Find Ships
              </Button>
            </Form>
          </FormContext>
        }
      />
      {showTable && <ShipsTable itemsPerPage={itemsPerPage} url={url} />}
    </>
  )
}

export default FilteredShipsCard
