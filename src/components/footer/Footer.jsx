import React from 'react'
import './Footer-module.css'
import whiteLogo from '../../images/white_logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_title">
        Privacy Policy  /   Personal Information  /  Terms of Service
      </div>
      <img className='white_logo' src={whiteLogo} alt="" />
      <div className="footer_title">
        2021 Green olives
      </div>
    </div>
  )
}

export default Footer