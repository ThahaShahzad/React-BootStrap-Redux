import React from 'react'
import { Table } from 'react-bootstrap'

function IdentifierTable({ comm_data }) {
  let table_data = comm_data && comm_data.identifiers
  const columns = ['Identifier Type', 'Value']
  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            {columns.map((val, index) => (
              <th key={index}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table_data.map((val, index) => (
            <tr key={index}>
              <td>{val.name}</td>
              <td>{val.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default IdentifierTable
