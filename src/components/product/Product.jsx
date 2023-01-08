import React from 'react'
import './Product-module.css'
import product from '../../images/product.jpg'
import back from '../../images/product-background.jpg'

const Product = () => {
  return (
    <div id='theproduct' className='container'>
      <div className="product">
        <div className="product_top">
          <h1 className='product_title'>
            "Health is wealth,<br/>
            it is always better when it is natural"
          </h1>
          <div className="product_autor">@crestodina</div>
          <button className='product_btn'>READ MORE</button>
        </div>
        <div className="product_content">
          <img className='product_img' src={product} alt="" />
          <div className="product_text">
            <div className="product_title-2">
              PRODUCT
            </div>
            <div className="product_subtitle">
              Company we are proud to deliver hight quality<br/>
              standarts. In natural enviroment production,<br/>
              delivery and flexibility. organic bio oil a special<br/>
              production from our farm. 
            </div>
            <div className='product_btn-2'>READ MORE</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product