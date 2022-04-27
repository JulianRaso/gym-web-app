import React from 'react'
import Login from '../../components/Login/Login'

export default function HomePage() {
  return (
    <div style={{widht: '100vw'}}>
      <h2 style={{margin: '16px'}}>Iniciar sesion para comenzar a operar</h2>
      <div style={{
          width: '85vw',
          height: '85vh',
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
          <Login/>
      </div>
    </div>
  )
}
