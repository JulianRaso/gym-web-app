import React from 'react'
import { Link } from 'react-router-dom'
import profileLogo from '../../public/pngegg.png'

export default function LoginBar() {
  return (
    <div id='footer'>
        <div style={{borderTop: '1px solid lightgray', width: '100%'}}/> 
          <img src={profileLogo} style={{width: '80px', height: '80px', marginTop: '12px',marginBottom: '12px'}} alt='perfil-logo'/>
          <Link to={'/login'} id='sign'>Ingresar</Link>
          
    </div>
  )
}
