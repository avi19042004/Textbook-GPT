import React from 'react'
import "./Navbar.css"
import nav_logo from "../../assets/Images/Textbook.png"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='nav-logo'>
            <img src={nav_logo} alt="" className='nav-logo-img' />
            <p>TextBook GPT</p>
        </div>
        <div className='nav-links'>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
        </div>
        <div className='nav-login-signup'>
            <div className='login-btn'>Sign in</div>
        </div>
      </div>
      <div className='navbar-bottem'>
        <p>Are your unibersity or school student for an online tutorial partnership?</p>
        <p className='navbar-bottem-blue'>Talk to us</p>
      </div>
    </>
  )
}

export default Navbar