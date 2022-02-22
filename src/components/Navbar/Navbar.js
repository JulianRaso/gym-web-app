import React from 'react'
import { Link } from 'react-router-dom'
import './NavStyles.css'
import logo from '../../public/logo.png'
import LoginBar from '../LoginBar/LoginBar'

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
        <LoginBar/>
    </div>
  )
}
