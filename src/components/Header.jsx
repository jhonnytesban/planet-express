import React from 'react'
import Logo from '../assets/logo_adobespark.png'
import '../styles/Header.css'
import Form from './Form'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container-logo">
          <img className='header__logo' src={Logo} alt="Logo de Planet Express" />
        </div>
        <div className="container-content">
          <h1 className="container__title">Elige Planet Express para tus envíos Espaciales</h1>
          <p className="container__text">"¡Nuestro equipo es reemplazable, su paquete no lo es!"</p>
          <p className="container__text">Suscríbete para recibir notificaciones de ¡Grandes ofertas!</p>
          <Form />
        </div>
      </header>
    </>
  )
}

export default Header
