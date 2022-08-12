import React from 'react'
import Logo from '../assets/rideit_logo.png'
import '../styles/style.css'

const NavigationBar = () => {
  return (
    <nav>
        <div className="logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="links-container">
            <ul className="links">
                <li>Home</li>
                <li>Services</li>
                <li>Us</li>
            </ul>
        </div>
        <div className="btn-container">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
        </div>
    </nav>
  )
}

export default NavigationBar