import React, {useEffect, setState, useState} from 'react'
import Table from '../../components/Table/Table'

export default function Students() {
  
  const title = 'Alumnos'
  
  const columns = [
    { title: 'Dni'},
    { title: 'Nombre'},
    { title: 'Apellido'},
    { title: 'Edad'},
    { title: 'Coach'},
    { title: 'Horario'},
    { title: 'Estado'}
  ]
    
  const data = [
    {id:'1',name:'Julian',lastname:'Raso',age:'21',coach:'Gaston',time:'08:00',status:'Al Dia'},
    {id:'2',name:'Julian',lastname:'Raso',age:'21',coach:'Gaston',time:'08:00',status:'Al Dia'},
    {id:'3',name:'Julian',lastname:'Raso',age:'21',coach:'Gaston',time:'08:00',status:'Al Dia'},
  ]


  const dataTable = (
    data.map((elements) => (
      <tr>
        <td>{elements.id}</td>
        <td>{elements.name}</td>
        <td>{elements.lastname}</td>
        <td>{elements.age}</td>
        <td>{elements.coach}</td>
        <td>{elements.horario}</td>
        <td>{elements.status}</td>
        <button>Editar</button>
      </tr>
    ))
  )

  return Table(title,columns,data,dataTable)
}
