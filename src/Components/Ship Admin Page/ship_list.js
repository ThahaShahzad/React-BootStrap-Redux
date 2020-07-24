import React from 'react'
import MyList from '../Reuseable/my_list'

function ShipList({ ship_data }) {
  let list_data = [
    {
      label: 'Flag Name',
      value: ship_data.flag_name
    },
    {
      label: 'MMSI',
      value: ship_data.mmsi ? ship_data.mmsi : 'N/A'
    },
    {
      label: 'Call Sign',
      value: ship_data.call_sign
    },
    {
      label: 'Ship Type',
      value: ship_data.shiptype_level_5
    },
    {
      label: 'Ship Status',
      value: ship_data.ship_status
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

export default ShipList
