import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getShipsInd, getShipsIndData } from '../../Redux/Ships_ind/actions'
import { Container, Row, Col } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import ShipList from './ship_list'
import ShipTabs from './Tabs/tabs'
import ShipsTable from '../Ships Page/table'

function ShipAdminPage() {
  const ship_data = useSelector((state) => state.ships_ind)
  const dispatch = useDispatch()

  let { id } = useParams()
  //console.log(id)

  const validShip = ship_data.data.meta && ship_data.data.meta.total_count > 0
  React.useEffect(() => {
    if (!ship_data.isloading && !ship_data.loaded) dispatch(getShipsInd(`&${id}`))
  }, [ship_data, id, dispatch])

  React.useEffect(
    () => {
      if (ship_data.loaded && !ship_data.isloading && validShip) {
        dispatch(getShipsIndData(ship_data.data.objects[0].imo_id))
      }
    },
    // eslint-disable-next-line
    [dispatch, validShip]
  )
  if (ship_data.data.meta && ship_data.data.meta.total_count > 1) {
    //setshowTable(true)
    console.log(id)
    //let itemsPerPage = 50
    //return (<><ShipsTable itemsPerPage={itemsPerPage} url={id} /> </>)
    return (<>Done</>)
  } else {
                  return (
                  <>
                  {ship_data.loaded && !ship_data.isloading && validShip ? (
                      <Container fluid>
                          <br></br>
                          <h1>
                              <div> Ship Name : {ship_data.data.objects[0].ship_name}</div>
                              IMO : {ship_data.data.objects[0].imo_id}
                          </h1>
                          <Row>
                              <Col md='1'/>
                              <Col>
                                  <br></br>
                                  <Row>
                                      <Col md='6'>
                                          <ShipList ship_data={ship_data.data.objects[0]}/>
                                      </Col>
                                      <Col md='2'/>
                                      <Col md='4'>
                                          <img
                                              src={ship_data.data.objects[0].image && ship_data.data.objects[0].image}
                                              height='300'
                                              alt='Ship'></img>
                                      </Col>
                                  </Row>
                                  <ShipTabs ship_data={ship_data}/>
                              </Col>
                              <Col md='1'/>
                          </Row>
                      </Container>
                  ) : ship_data.isloading ? (
                      <Loader/>
                  ) : !ship_data.isloading ? (
                      <h1>No data found</h1>
                  ) : null}
                  </>
                  )
              }
}

export default ShipAdminPage
