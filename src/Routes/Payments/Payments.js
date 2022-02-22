import React from 'react'
import './payments.css'
import money from '../../public/dollars_96693.png'
import mpLogo from '../../public/kuder-mercadopago-blanco-negro.png'

export default function Payments() {
  return (
    <div className="container">

      <div className="payments">
        <h2 id='title'>Cuota</h2>
        
        <div>Dni del alumno:
        <input type='number' placeholder='Dni' style={{width: '120px', marginLeft: '8px'}}/>
        </div>
        <div style={{display: 'flex', marginTop: '16px', width:'350px' ,justifyContent: 'space-evenly'}}>
          <div>Nombre:</div>
          <div>Apellido:</div>
        </div>
        

        <h2 style={{marginTop:'16px'}}>Formas de pago</h2>
        <div className="paymentsContainer">
          <img id='creditCard' src={mpLogo}/>
          <img id='money'src={money}/>
        </div>

        <button id='save'>Aceptar</button>
      </div>

    </div>
  )
}
