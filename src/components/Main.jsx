import React from 'react'
import '../styles/Main.css'
import Form from './Form'

const Main = () => {
  return (
    <main className="main">
      <h1 className="main__title">Elige Planet Express para tus envíos Espaciales</h1>
      <p className="main__text">"¡Nuestro equipo es reemplazable, su paquete no lo es!"</p>
      <p className="main__text">Suscríbete para recibir notificaciones de ¡Grandes ofertas!</p>
      <Form />
    </main>
  )
}

export default Main
