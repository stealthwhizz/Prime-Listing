import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/prime.jpg'
import navprofileIcon from '../Assets/nav-profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>                  
  )
}

export default Navbar
