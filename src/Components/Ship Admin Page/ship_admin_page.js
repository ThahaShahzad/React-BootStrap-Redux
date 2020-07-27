import React from 'react'
import ShipDetialsList from './ship_detials_list'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getShipsInd, getShipsIndData } from '../../Redux/Ships_ind/actions'
import { Tab, Container, Row, Col, Tabs } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import ShipList from './ship_list'

function ShipAdminPage() {
  const ship_data = useSelector((state) => state.ships_ind)
  const [key, setKey] = React.useState('shipDetails')
  const dispatch = useDispatch()
  let { id } = useParams()
  const validShip = ship_data.data.meta && ship_data.data.meta.total_count === 1
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
            <Col md='1' />
            <Col>
              <br></br>
              <Row>
                <Col md='6'>
                  <ShipList ship_data={ship_data.data.objects[0]} />
                </Col>
                <Col md='2' />
                <Col md='4'>
                  <img
                    src={ship_data.data.objects[0].image && ship_data.data.objects[0].image}
                    height='300'
                    alt='Ship'></img>
                </Col>
              </Row>
              <Tabs id='controlled-tab-example' activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey='shipDetails' title='Ship Details'>
                  <ShipDetialsList ship_data={ship_data.data.objects[0]} />
                </Tab>
                <Tab eventKey='ihs' title='IHS Movement'></Tab>
                <Tab eventKey='mmsiHistory' title='MMSI History'></Tab>
                <Tab eventKey='portInspection' title='Port Inspection'></Tab>
                <Tab eventKey='purpleTrac' title='PurpleTrac'></Tab>
                <Tab eventKey='portVisits' title='Port Visits'></Tab>
                <Tab eventKey='smh' title='SMH'></Tab>
                <Tab eventKey='smhVisits' title='SMH Visits'></Tab>
                <Tab eventKey='sga' title='SGA'></Tab>
                <Tab eventKey='ais' title='AIS'></Tab>
                <Tab eventKey='psp' title='PSP'></Tab>
              </Tabs>
            </Col>
            <Col md='1' />
          </Row>
        </Container>
      ) : ship_data.isloading ? (
        <Loader />
      ) : !ship_data.isloading ? (
        <h1>Invaild Search</h1>
      ) : null}
    </>
  )
}

export default ShipAdminPage
