import React from 'react'
import { Tabs, Tab, Spinner } from 'react-bootstrap'
import ShipDetialsList from './ship_detials_list'
import IhsMovementTable from './ihs_movement_table'
import MmsiHistoryTable from './mmsi_history_table'
import PortInspectionTable from './port_inspection_table'
import PspTable from './psp_table'
import PurpleTracTable from './purpleTrac_table'
import SmhTable from './smh_table'
import SmhVisitsTable from './smh_visits_table'
import SmhGapsTable from './smh_gaps_table'
import PortVisitsTable from './port_visits_table'
import SgaTable from './sga_table'
import AisStatusTable from './ais_status_table'
import AisTrackingTable from './ais_tracking_table'
import PTShipTable from './pt_ship_history_table'

function ShipTabs({ ship_data }) {
  const [key, setKey] = React.useState('shipDetails')
  const Title = ({ title_name, loaded, total_count }) => {
    return (
      <>
        {title_name} ({loaded ? total_count : <Spinner animation='border' variant='secondary' size='sm' />})
      </>
    )
  }
  return (
    <>
      <Tabs id='controlled-tab-example' activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey='shipDetails' title='Ship Details'>
          <ShipDetialsList ship_data={ship_data.data.objects[0]} />
        </Tab>
        <Tab
          eventKey='ihs'
          title={
            <Title
              title_name='IHS Movement'
              loaded={ship_data.movementLoaded}
              total_count={ship_data.movementLoaded && ship_data.IHSMovement.meta.total_count}
            />
          }>
          {ship_data.movementLoaded && (
            <IhsMovementTable ship_data={ship_data.IHSMovement} count={ship_data.IHSMovement.meta.total_count} />
          )}
        </Tab>
        <Tab
          eventKey='mmsiHistory'
          title={
            <Title
              title_name='MMSI History'
              loaded={ship_data.mmsiLoaded}
              total_count={ship_data.mmsiLoaded && ship_data.MmsiHistory.meta.total_count}
            />
          }>
          {ship_data.mmsiLoaded && (
            <MmsiHistoryTable ship_data={ship_data.MmsiHistory} count={ship_data.MmsiHistory.meta.total_count} />
          )}
        </Tab>
        <Tab
          eventKey='portInspection'
          title={
            <Title
              title_name='Port Inspection'
              loaded={ship_data.portInspecLoaded}
              total_count={ship_data.portInspecLoaded && ship_data.portInspection.meta.total_count}
            />
          }>
          {ship_data.portInspecLoaded && (
            <PortInspectionTable
              ship_data={ship_data.portInspection}
              count={ship_data.portInspection.meta.total_count}
            />
          )}
        </Tab>
        <Tab
          eventKey='aisS'
          title={
            <Title
              title_name='AIS Status'
              loaded={ship_data.AisLoaded}
              total_count={ship_data.AisLoaded && ship_data.Ais.status.length}
            />
          }>
          {ship_data.AisLoaded && <AisStatusTable ship_data={ship_data.Ais} />}
        </Tab>
        <Tab
          eventKey='aisT'
          title={
            <Title
              title_name='AIS Tracking'
              loaded={ship_data.AisLoaded}
              total_count={ship_data.AisLoaded && ship_data.Ais.track.count}
            />
          }>
          {ship_data.AisLoaded && <AisTrackingTable ship_data={ship_data.Ais} />}
        </Tab>
        <Tab
          eventKey='psp'
          title={
            <Title
              title_name='PSP'
              loaded={ship_data.PspLoaded}
              total_count={ship_data.PspLoaded && ship_data.Psp.meta.total_count}
            />
          }>
          {ship_data.PspLoaded && <PspTable ship_data={ship_data.Psp} count={ship_data.Psp.meta.total_count} />}
        </Tab>
        <Tab
          eventKey='purpleTrac'
          title={
            <Title
              title_name='PurpleTrac'
              loaded={ship_data.purpleTracLoaded}
              total_count={ship_data.purpleTracLoaded && ship_data.purpleTrac.meta.count}
            />
          }>
          {ship_data.purpleTracLoaded && (
            <PurpleTracTable ship_data={ship_data.purpleTrac} count={ship_data.purpleTrac.meta.count} />
          )}
        </Tab>
        <Tab
          eventKey='purpleTracShipHistory'
          title={
            <Title
              title_name='PT Ship History'
              loaded={ship_data.ptShipLoaded}
              total_count={ship_data.ptShipLoaded && ship_data.ptShipData.meta.count}
            />
          }>
          {ship_data.ptShipLoaded && (
            <PTShipTable ship_data={ship_data.ptShipData} count={ship_data.ptShipData.meta.count} />
          )}
        </Tab>
        <Tab
          eventKey='portVisits'
          title={
            <Title
              title_name='Port Visits'
              loaded={ship_data.portVisitsLoaded}
              total_count={ship_data.portVisitsLoaded && ship_data.portVisits.meta.count}
            />
          }>
          {ship_data.portVisitsLoaded && (
            <PortVisitsTable ship_data={ship_data.portVisits} count={ship_data.portVisits.meta.count} />
          )}
        </Tab>
        <Tab
          eventKey='smh'
          title={
            <Title
              title_name='SMH'
              loaded={ship_data.SmhLoaded}
              total_count={ship_data.SmhLoaded && ship_data.Smh.meta.count}
            />
          }>
          {ship_data.SmhLoaded && <SmhTable ship_data={ship_data.Smh} count={ship_data.Smh.meta.count} />}
        </Tab>
        <Tab
          eventKey='smhVisits'
          title={
            <Title
              title_name='SMH Visits'
              loaded={ship_data.SmhVisitsLoaded}
              total_count={ship_data.SmhVisitsLoaded && ship_data.SmhVisits.meta.count}
            />
          }>
          {ship_data.SmhVisitsLoaded && (
            <SmhVisitsTable ship_data={ship_data.SmhVisits} count={ship_data.SmhVisits.meta.count} />
          )}
        </Tab>
        <Tab
          eventKey='smhGaps'
          title={
            <Title
              title_name='SMH Gaps'
              loaded={ship_data.SmhGapsLoaded}
              total_count={ship_data.SmhGapsLoaded && ship_data.SmhGaps.meta.count}
            />
          }>
          {ship_data.SmhGapsLoaded && (
            <SmhGapsTable ship_data={ship_data.SmhGaps} count={ship_data.SmhGaps.meta.count} />
          )}
        </Tab>
        <Tab
          eventKey='sga'
          title={
            <Title
              title_name='SGA Gaps'
              loaded={ship_data.SgaLoaded}
              total_count={ship_data.SgaLoaded && ship_data.Sga.meta.count}
            />
          }>
          {ship_data.SgaLoaded && <SgaTable ship_data={ship_data.Sga} count={ship_data.Sga.meta.count} />}
        </Tab>
        <Tab eventKey='lrit' title={'LRIT'} disabled></Tab>
        <Tab eventKey='mda' title={'MDA'} disabled></Tab>
      </Tabs>
    </>
  )
}

export default ShipTabs
