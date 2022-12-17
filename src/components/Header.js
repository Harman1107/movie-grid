import React from 'react'
import logo from '../Logo-img.png'
import './Header.css';
const Header = () => {
  return (
    <div>
        <img src={logo} className='logo-img' alt="logo"/>
    </div>
  )
}

export default Header