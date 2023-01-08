import React from 'react'
import './Whatwedo-module.css'
import whatwedo from '../../images/whatwedo.jpg'

const Whatwedo = () => {
  return (
    <div id='whatwedo' className='container'>
      <div className="whatwedo">
        <div className="whatwedo_title">WHAT WE DO</div>
        <img className='whatwedo_img' src={whatwedo} alt="" />
      </div>
    </div>
  )
}

export default Whatwedo