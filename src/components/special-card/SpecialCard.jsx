import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import product from '../../assets/product/3.jpeg'

const SpecialCard = ({ title, brand, price, totalrating, sold, quantity }) => {
  const [ratingValue, setRatingValue] = useState(0)

  const handleRating = (rate) => {
    setRatingValue(rate)
  }

  return (
    <div className='col-4'>
      <div className="special-product-card">
        <div className="spacial-wrapper">
          <div>
            <img src={product} className="image-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <Rating onClick={handleRating} initialValue={totalrating} size={window.innerWidth > 768 ? 20: 12} />
            <p className="price">
              <span className="red-p">R{price} {/*- <s> R3000</s>*/}</span> 
            </p>
            <div className="discount-till">
              <p><b>6</b> days</p>
              <div className="badge-container">
                <span className="p-1">1</span>:
                <span className="p-1">1</span>:
                <span className="p-1">1</span>
              </div>
            </div>
            <div className="product-count">
              <p>Products: {quantity}</p>
              <div className="progress">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{width: quantity / quantity + sold * 100 + "%"}} 
                    aria-valuenow={quantity / quantity + sold * 100} 
                    aria-valuemin={quantity} 
                    aria-valuemax={sold + quantity}
                  ></div>
              </div>
            </div>
            <Link to="#">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialCard