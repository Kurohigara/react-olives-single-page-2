import React from 'react'
import './Contact-module.css'
import background from '../../images/contact-background.jpg'

const Contact = () => {
  return (
    <div id='contactus' className='container'>
      <div className="contact">
        <div className="contact_subtitle_top">natural product</div>
        <div className="contact_title">Let’s do business <span className='span'>together!</span></div>
        <div className="contact_subtitle_bottom">
          It is a long established fact that a reader<br/>
          will be distracted by the readable content of a pag<br/>
          when looking at its layout.
        </div>
        <button className="contact_btn">CONTACT US</button>
      </div>
    </div>
  )
}

export default Contact