import React from 'react'
import logo from '../img/img.png'

const Header = () => {
  return (
    <header className='header'>
        <img src={logo} alt="Picture" />
        <h2>E-comerce Tech</h2>
    </header>
  )
}

export default Header