import React from 'react'
import MyList from '../Reuseable/my_list'

function ShipDetialsList({ ship_data }) {
  let list_data = [
    {
      label: 'Flag ID',
      value: ship_data.imo_id
    },
    {
      label: 'Flag Name',
      value: ship_data.flag_name
    },
    {
      label: 'MMSI',
      value: ship_data.mmsi ? ship_data.mmsi : 'N/A'
    },
    {
      label: 'Ship Status',
      value: ship_data.ship_status
    },
    {
      label: 'Ship Type',
      value: ship_data.shiptype_level_5
    },
    {
      label: 'Year of Build',
      value: ship_data.year_of_build
    }
  ]
  return (
    <>
      <MyList data={list_data} label_style={{ fontWeight: 'bold' }} />
    </>
  )
}

export default ShipDetialsList
