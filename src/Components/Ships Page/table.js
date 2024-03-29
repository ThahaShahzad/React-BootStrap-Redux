import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getShipsInd } from '../../Redux/Ships_ind/actions'
import MyTable, { SelectColumnFilter } from '../Reuseable/my_table'
import Loader from 'react-loader-spinner'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ShipsTable({ itemsPerPage, url }) {
  const ships_ind = useSelector((state) => state.ships_ind)
  const dispatch = useDispatch()
  const table_data = React.useMemo(
    () =>
      ships_ind.loaded &&
      ships_ind.data.objects.map((val, index) => ({
        id: (
          <Link
            key={index}
            onClick={() => dispatch(getShipsInd(`&imo=${val.imo_id}`))}
            to={`/shipAdmin/imo=${val.imo_id}`}>
            {val.imo_id}
          </Link>
        ),
        id1: val.imo_id,
        ship_name: val.ship_name,
        flag_name: val.flag_name,
        mmsi: val.mmsi ? val.mmsi : 'N/A',
        call_sign: val.call_sign ? val.call_sign : 'N/A',
        shiptype_level_5: val.shiptype_level_5,
        ship_status: val.ship_status,
        year_of_build: val.year_of_build
      })),
    [ships_ind, dispatch]
  )
  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'IMO',
        Filter: ''
      },
      {
        accessor: 'id1',
        Header: 'IMO',
        Filter: ''
      },
      {
        accessor: 'ship_name',
        Header: 'Ship Name',
        Filter: SelectColumnFilter
      },
      {
        accessor: 'flag_name',
        Header: 'Flag Name',
        Filter: SelectColumnFilter
      },
      {
        accessor: 'mmsi',
        Header: 'MMSI',
        Filter: SelectColumnFilter
      },
      {
        accessor: 'call_sign',
        Header: 'Call Sign',
        Filter: SelectColumnFilter
      },
      {
        accessor: 'shiptype_level_5',
        Header: 'Ship Type',
        Filter: SelectColumnFilter
      },
      {
        accessor: 'ship_status',
        Header: 'Ship Status',
        Filter: SelectColumnFilter
      },
      {
        accessor: 'year_of_build',
        Header: 'Year Of Build',
        Filter: SelectColumnFilter
      }
    ],
    []
  )
  return (
    <>
      {ships_ind.loaded && !ships_ind.isloading && ships_ind.data.meta.total_count > 0 ? (
        <Container fluid>
          <h1>Ships Table</h1>
          <MyTable
            initialState={{
              pageSize: itemsPerPage,
              hiddenColumns: ['id1']
            }}
            apiPaganation={true}
            totalItems={`Total Ships ${ships_ind.data.meta.total_count}`}
            previous={ships_ind.data.meta.previous}
            next={ships_ind.data.meta.next}
            apiFuncN={getShipsInd(`${url}&limit=${itemsPerPage}&offset=${ships_ind.data.meta.offset + itemsPerPage}`)}
            apiFuncP={getShipsInd(`${url}&limit=${itemsPerPage}&offset=${ships_ind.data.meta.offset - itemsPerPage}`)}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : ships_ind.isloading ? (
        <Loader />
      ) : (
        'None Found'
      )}
    </>
  )
}

export default ShipsTable
