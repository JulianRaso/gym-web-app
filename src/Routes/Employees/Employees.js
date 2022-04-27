import React from 'react'
import Table from '../../components/Table/Table'

export default function Employees() {
  const title = 'Empleados'

  const columns = [
    { title: 'Dni'},
    { title: 'Nombre'  },
    { title: 'Apellido'},
    { title: 'Horario' },
    { title: 'Cargo' },
    { title: 'Estado'  }
  ]

  const data = [
    {id: 1, name: 'User', lastname: 'Test', horario: '08:00 - 14:00', cargo: 'Entrenador Fisico', status: 'Pagado'},
    {id: 2, name: 'User', lastname: 'Test', horario: '08:00 - 14:00', cargo: 'Administracion', status: 'Pagado'},
    {id: 3, name: 'User', lastname: 'Test', horario: '14:00 - 23:00', cargo: 'Entrenador Fisico', status: 'Pagado'}
  ]

  const dataTable = (
    data.map((elements)=>(
      <tr>
        <td>{elements.id}</td>
        <td>{elements.name}</td>
        <td>{elements.lastname}</td>
        <td>{elements.horario}</td>
        <td>{elements.cargo}</td>
        <td>{elements.status}</td>
      </tr>
    ))
  )

  return Table(title,columns,data,dataTable)
}
