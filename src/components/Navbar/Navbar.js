import React from 'react'
import { Link } from 'react-router-dom'
import './NavStyles.css'
import logo from '../../public/logo.png'
import profileLogo from '../../public/pngegg.png'

export default function Navbar() {
  return (
    <div className="navbar">
        <h2 style={{textAlign: 'center', marginTop: '10px'}}>Go Fit Get Fit</h2>
        <img src={logo} alt='logo'/>
        <nav>
            <Link to={'/'} id='nav'>Inicio</Link>
            <Link to={'/students'} id='nav'>Alumnos</Link>
            <Link to={'/activities'} id='nav'>Actividades</Link>
            <Link to={'/employees'} id='nav'>Empleados</Link>
            <Link to={'/payments'} id='nav'>Pagos</Link>
        </nav>
        <div id='footer' style={{borderTop: '1px solid lightgray', width: 'fit-content'}}>
          <img src={profileLogo} style={{width: '80px', height: '80px', marginTop: '12px',marginBottom: '12px',position: 'relative',left: '25%'}} alt='perfil-logo'/>

          <div>
            <Link to={'/SignIn'} id='sign'>Ingresar</Link>
            <Link to={'/SignOut'} id='sign'>Registrarte</Link>
          </div>
          
        </div>
    </div>
  )
}
