import React from 'react'
import MyList from '../Reuseable/my_list'
import { timeSince } from '../Reuseable/utils'

export function ShipList({ ship_data }) {
  let list_data = [
    {
      label: 'Flag Name',
      value: `${ship_data.flag_name} (${ship_data.flag.code})`
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
      value: `${ship_data.year_of_build} (Age: ${timeSince(Date.parse(ship_data.year_of_build))})`
    },
    {
      label: 'Country of Build',
      value: ship_data.data && ship_data.data.country_of_build
    }
  ]
  return (
    <>
      <MyList data={list_data} label_style={{ fontWeight: 'bold' }} />
    </>
  )
}

export function ShipList2({ ship_data }) {
  let list_data = [

    {
      label: 'Gross tonnage',
      value: ship_data.data && ship_data.data.gross_tonnage
    },
    {
      label: 'Length',
      value: ship_data.length_overall_loa
    },
    {
      label: 'Ship Manager',
      value: ship_data.ship_manager
    },
    {
      label: 'Tech. Manager',
      value: ship_data.technical_manager
    },
    {
      label: 'Operator',
      value: ship_data.operator
    },
    {
      label: 'Reg. Owner',
      value: ship_data.registered_owner
    },
    {
      label: 'Group Benf. Owner',
      value: ship_data.group_beneficial_owner
    }
  ]
  return (
    <>
      <MyList data={list_data} label_style={{ fontWeight: 'bold' }} />
    </>
  )
}
