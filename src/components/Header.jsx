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
          <div className="container-title">
            <h1 className="container__title">En Planet Express somos specialistas en envíos Espaciales</h1>
          </div>
          <div className="container-form">
            <p className="container__text">"¡Nuestro equipo es reemplazable, su paquete no lo es!"</p>
            <p className="container__text">Suscríbete para recibir notificaciones de ¡Grandes ofertas!</p>
            <Form />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
