import React from 'react'
import MaterialTable from 'material-table'
import './Table.css'

export default function Table(columns,data,title) {
  return (
    <div style={{width: '100vw',height: '100vh'}}>
    <MaterialTable style={{maxWidth: '100vw', maxHeight: '80vh'}}
    columns={columns}
    data={data}
    title={title}
    />
    </div>
  )
}
