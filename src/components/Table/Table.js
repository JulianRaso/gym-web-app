import React from 'react'
import MaterialTable from 'material-table'
import './Table.css'

export default function Table() {

  const columns = [
    { title: 'Dni', field: 'id'},
    { title: 'Nombre', field: 'name'},
    { title: 'Apellido', field: 'surname'},
    { title: 'Edad', field: 'birthday'},
    { title: 'Profesor', field: 'peTeacher'},
    { title: 'Horario', field: 'time'},
    { title: 'Estado', field: 'paymentCheck'}
  ]

  const data = [
    {id: 1, name: 'User', surname: 'Test', paymentCheck:'Al Dia'}
  ]

  return (
    <div style={{width: '100vw',height: '100vh'}}>
    <MaterialTable style={{maxWidth: '100vw', maxHeight: '80vh'}}
    columns={columns}
    data={data}
    title='Alumnos'
    />
    </div>
  )
}
