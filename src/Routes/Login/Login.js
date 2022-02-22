import React from 'react'
import './login.css'
import logo from '../../public/—Pngtree—avatar icon profile icon member_5247852.png'
import userLogo from '../../public/07c60cdc94f0718e9cb3280ca7d05199.png'
import passLogo from '../../public/kindpng_2005246.png'

export default function Login() {
  return (
    <div className="Login">

      <div className="LoginForm">
        <h2>Iniciar Sesion</h2>
        <img src={logo} style={{width: '120px', height: '120px'}} />

        <form>
          <div id='formContainer'>
            <img id='logo' src= {userLogo} alt='user logo'/>
            <input id='user' type='text' placeholder='Usuario'></input>
          </div>

          <div id='formContainer'>
            <img id='logo' src= {passLogo} alt='password logo'/>
            <input id='pass' type='text' placeholder='Contraseña'></input>
          </div>

          <div id='container'>
            <a href='/login/registrarse'>Registrarse</a>
            <a href='/login/forgotpassword'>Recuperar Contraseña</a>
          </div>
          
          <button type="submit" id='submitButton'>Ingresar</button>
        
        </form>
      </div>

    </div>
  )
}
