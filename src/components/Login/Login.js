import React from 'react'
import './login.css'
import logo from '../../public/—Pngtree—avatar icon profile icon member_5247852.png'
import userLogo from '../../public/07c60cdc94f0718e9cb3280ca7d05199.png'
import passLogo from '../../public/kindpng_2005246.png'
import { createUserDB } from '../Firebase/FirebaseCmd'

export default function Login() {



 function handleSubmit(e){
  e.preventDefault();
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  createUserDB(email, password);
 }

  return (
    <div className="Login" onSubmit={handleSubmit}>

      <div className="LoginForm">
        <h2>Iniciar Sesion</h2>
        <img src={logo} style={{width: '120px', height: '120px'}} />

        <form>
          <div id='formContainer'>
            <img id='logo' src= {userLogo} alt='user logo'/>
            <input id='email' type='email' placeholder='Email'></input>
          </div>

          <div id='formContainer'>
            <img id='logo' src= {passLogo} alt='password logo'/>
            <input id='password' type='password' placeholder='Contraseña'></input>
          </div>
          
          <button type="submit" id='submitButton'>Ingresar</button>
        
        </form>
      </div>

    </div>
  )
}
