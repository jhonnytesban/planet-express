import React from 'react'
import Logo from '../assets/logo_adobespark.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <>
      <header className="header">
        <img className='header__logo' src={Logo} alt="Logo de Planet Express" />
      </header>
    </>
  )
}

export default Header
