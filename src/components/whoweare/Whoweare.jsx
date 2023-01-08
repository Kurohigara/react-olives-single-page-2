import React from 'react'
import './Whoweare-module.css'
import whoweare from '../../images/whoweare.jpg'

const Whoweare = () => {
  return (
    <div id='whoweare' className='container'>
      <div className="whoweare">
        <img className='whoarewe_img' src={whoweare} alt="" />
        <div className="content">
          <div className="whoweare_title">WHO WE ARE</div>
          <div className="whoweare_subtitle">
            Company we are proud to deliver hight quality<br/>
            standarts. In natural enviroment production,<br/>
            delivery and flexibility. organic bio oil a special<br/>
            production from our farm. 
          </div>
          <div className="whoweare_btn">READ MORE</div>
        </div>
      </div>
    </div>
  )
}

export default Whoweare