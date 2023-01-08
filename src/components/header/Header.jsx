import React, { useState } from 'react'
import './Header-module.css'
import logo from '../../images/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='container'>
      <div className="header">
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <div className='menu'>
          <a className='link' href="#whoweare">Who we are</a>
          <a className='link' href="#whatwedo">What we do</a>
          <a className='link' href="#theproduct">The product</a>
          <a className='link' href="#contactus">Contact us</a>
          <dib className='link btn'>LET’S DO BUSINESS</dib>
        </div>
        <div onClick={() => setShow(true)} className='burger'>
            <GiHamburgerMenu/>
        </div>

        {/* BURGER MENU */}
        <div className={`burger_window  ${show ? 'show_menu' : ''}`}>
          <div onClick={() => setShow(false)} className='close'><GrClose/></div>
          <div className='burger_menu'>
            <a onClick={() => setShow(false)} className='burger_link' href="#whoweare">Who we are</a>
            <a onClick={() => setShow(false)} className='burger_link' href="#whatwedo">What we do</a>
            <a onClick={() => setShow(false)} className='burger_link' href="#theproduct">The product</a>
            <a onClick={() => setShow(false)} className='burger_link' href="#contactus">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header