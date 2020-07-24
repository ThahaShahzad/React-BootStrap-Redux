import React from 'react'
import Loader from 'react-loader-spinner'
import MyMap from '../Reuseable/my_map'
import { getPositions } from '../../Redux/Positions_ind/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, ButtonGroup, Button, Tabs, Tab } from 'react-bootstrap'
import PositionsTable from './positions_table'
import CommandsTable from './commands_table'
import SubsTable from './subs_table'
import CommsList from './comms_list'
import { getCommsInd } from '../../Redux/Comms_ind/actions'
import IdentifierTable from './identifier_table'

function CommunicatorAdminPage() {
  const dispatch = useDispatch()
  const comms_ind = useSelector((state) => state.comms_ind)
  const position_data = useSelector((state) => state.positions.data)
  const [key, setKey] = React.useState('map')
  const validComm = comms_ind.data.meta && comms_ind.data.meta.total_count === 1
  let { id } = useParams()

  React.useEffect(() => {
    if (!comms_ind.isloading && !comms_ind.loaded) {
      dispatch(getCommsInd(`&${id}`))
    }
  }, [comms_ind, id, dispatch])

  React.useEffect(() => {
    if (comms_ind.loaded && !comms_ind.isloading && validComm) {
      dispatch(getPositions(comms_ind.data.objects[0].comm_id))
    }
  }, [comms_ind, dispatch, validComm])

  let lat =
    comms_ind.loaded && validComm && comms_ind.data.objects[0].last_position_latitude
      ? Number(comms_ind.data.objects[0].last_position_latitude)
      : 0
  let lng =
    comms_ind.loaded && validComm && comms_ind.data.objects[0].last_position_longitude
      ? Number(comms_ind.data.objects[0].last_position_longitude)
      : 0

  let button_labels = [
    { label: 'Poll' },
    { label: 'Force Autorecover All' },
    { label: 'Force Activate' },
    { label: 'Force Program' },
    { label: 'Force Deactive' },
    { label: 'Edit' },
    { label: 'BI Link' },
    { label: 'Django Link' }
  ]

  return (
    <>
      {comms_ind.loaded && !comms_ind.isloading && validComm ? (
        <Container fluid>
          <Row>
            <Col md='1' />
            <Col>
              <br></br>
              <Row>
                <Col md='6'>
                  <CommsList comm_data={comms_ind.data.objects[0]} comm_id={comms_ind.data.objects[0].comm_id} />
                </Col>
                <Col md='4'>
                  <IdentifierTable comm_data={comms_ind.data.objects[0]} />
                </Col>
                <Col md='2'>
                  <ButtonGroup vertical>
                    {button_labels.map((val, index) => (
                      <Button key={index}>{val.label}</Button>
                    ))}
                  </ButtonGroup>
                </Col>
              </Row>
              <Tabs id='controlled-tab-example' activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey='map' title='Map'>
                  <MyMap lat={lat} lng={lng} zoom={4} />
                </Tab>
                <Tab eventKey='positions' title={`Positions (${position_data.length ? position_data.length : 'N/A'})`}>
                  <PositionsTable comm_id={comms_ind.data.objects[0].comm_id} />
                </Tab>
                <Tab
                  eventKey='commands'
                  title={`Commands (${
                    comms_ind.data.objects[0].commands ? comms_ind.data.objects[0].commands.length : 'N/A'
                  })`}>
                  <CommandsTable comm_id={comms_ind.data.objects[0].comm_id} />
                </Tab>
                <Tab
                  eventKey='subscribers'
                  title={`Subscribers (${
                    comms_ind.data.objects[0].subscribers ? comms_ind.data.objects[0].subscribers.length : 'N/A'
                  })`}>
                  <SubsTable />
                </Tab>
                <Tab eventKey='track' title='Track' disabled={!position_data.length}>
                  <MyMap lat={lat} lng={lng} zoom={4} positions={position_data} />
                </Tab>
              </Tabs>
            </Col>
            <Col md='1' />
          </Row>
        </Container>
      ) : comms_ind.isloading ? (
        <Loader />
      ) : !comms_ind.isloading ? (
        <h1>Invaild Id</h1>
      ) : null}
    </>
  )
}

export default CommunicatorAdminPage
