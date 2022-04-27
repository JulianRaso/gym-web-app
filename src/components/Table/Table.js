import React from 'react'
import './Table.css'


export default function Table(title,columns,data,dataTable) {
  return (
    <div className="table">
      <h2 style={{margin:'8px',textAlign:'center'}}>{title}</h2>
      <div style={{height: '95%',border: '1px solid black', borderRadius: '5px'}}>
      <table>
        <thead>
          <tr style={{backgroundColor: 'lightgray'}}>
            {columns.map((elements)=>
            (
              <th>{elements.title}</th>
            ))}
            <th>Acciones</th>
          </tr>
          {dataTable}
        </thead>
      </table>
      </div>
    </div>
  )
}

