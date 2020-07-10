import React from 'react'
import Loader from 'react-loader-spinner'
import MyMap from '../Reuseable/my_map'
import { getPositions } from '../../Redux/Positions_ind/actions'
import { getCommands } from '../../Redux/Commands_ind/actions'
import { getSubs } from '../../Redux/Subs_ind/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, ButtonGroup, Button, Tabs, Tab } from 'react-bootstrap'
import PositionsTable from './positions_table'
import CommandsTable from './commands_table'
import SubsTable from './subs_table'
import IdentifierTable from './identifier_table'
import CommsList from './comms_list'

function CommunicatorAdminPage() {
  const comms_data = useSelector((state) => state.comms.data)
  const comms_loading = useSelector((state) => state.comms.isloading)
  const position_data = useSelector((state) => state.positions.data)
  const subs_data = useSelector((state) => state.subs.data)
  const commands_data = useSelector((state) => state.commands.data)
  const [key, setKey] = React.useState('map')
  const dispatch = useDispatch()
  let { id } = useParams()
  let comms_id = parseInt(id)
  const find = (id) => comms_data.find((val) => val.id === id)
  const comm_data = find(comms_id)
  React.useEffect(() => {
    if (comm_data) {
      dispatch(getPositions(comms_id))
      dispatch(getCommands(comms_id))
      dispatch(getSubs(comms_id))
    }
  }, [comm_data, comms_id, dispatch])
  let lat = comm_data && comm_data.last_position_latitude ? Number(comm_data.last_position_latitude) : 0
  let lng = comm_data && comm_data.last_position_longitude ? Number(comm_data.last_position_longitude) : 0

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
      {comm_data ? (
        <Container fluid>
          <Row>
            <Col md='1' />
            <Col>
              <br></br>
              <Row>
                <Col md='6'>
                  <CommsList comm_data={comm_data} comm_id={comms_id} />
                </Col>
                <Col md='4'>
                  <IdentifierTable comm_data={comm_data} />
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
                  <PositionsTable comm_id={comms_id} />
                </Tab>
                <Tab eventKey='commands' title={`Commands (${commands_data.length ? commands_data.length : 'N/A'})`}>
                  <CommandsTable comm_id={comms_id} />
                </Tab>
                <Tab
                  eventKey='subscribers'
                  title={`Subscribers (${subs_data.subscribers ? subs_data.subscribers.length : 'N/A'})`}>
                  <SubsTable comm_id={comms_id} />
                </Tab>
                <Tab eventKey='track' title='Track' disabled={!position_data.length}>
                  <MyMap lat={lat} lng={lng} zoom={4} positions={position_data} />
                </Tab>
              </Tabs>
            </Col>
            <Col md='1' />
          </Row>
        </Container>
      ) : comms_loading ? (
        <Loader />
      ) : !comms_loading ? (
        <h1>Invaild Id</h1>
      ) : null}
    </>
  )
}

export default CommunicatorAdminPage
