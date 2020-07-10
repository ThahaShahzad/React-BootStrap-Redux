import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getShipsInd } from '../../Redux/Ships_ind/actions'
import MyTable from '../Reuseable/my_table'
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
        ship_status: val.ship_status
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
        Filter: ''
      },
      {
        accessor: 'ship_status',
        Header: 'Ship Status',
        Filter: ''
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
