import React from 'react'
import Table from '../../components/Table/Table'

export default function Employees() {
  const title = 'Empleados'

  const columns = [
    { title: 'Dni', field: 'id'},
    { title: 'Nombre', field: 'name'},
    { title: 'Apellido', field: 'surname'},
    { title: 'Edad', field: 'birthday'},
    { title: 'Horario', field: 'time'},
    { title: 'Estado', field: 'paymentCheck'}
  ]

  const data = [
    {id: 1, name: 'User', surname: 'Test', paymentCheck:'Pagado'}
  ]

  return Table(columns,data,title)
}
