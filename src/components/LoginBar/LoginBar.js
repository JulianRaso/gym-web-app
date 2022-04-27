import React from 'react'
import { Link } from 'react-router-dom'
import profileLogo from '../../public/pngegg.png'

export default function LoginBar() {
  return (
    <div id='footer'>
        <div style={{borderTop: '1px solid lightgray', width: '100%'}}/> 
          <img src={profileLogo} style={{width: '80px', height: '80px', marginTop: '12px',marginBottom: '12px'}} alt='perfil-logo'/>
          <div id='sign'>Cerrar Sesion</div>
    </div>
  )
}
