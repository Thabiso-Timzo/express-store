import React, { useState }  from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiHeart } from 'react-icons/bi'
import { MdCompareArrows } from 'react-icons/md'
import { BsEye } from 'react-icons/bs'

import blog from '../../assets/brands/samsung.png'

const ProductCard = ({ grid }) => {
  const [ratingValue, setRatingValue] = useState(0)

  let location = useLocation()

  const handleRating = (rate) => {
    setRatingValue(rate)
  }
  
  return (
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link to="/product/:id">
        <div className="product-card position-relative">
          <div className="product-image">
            <button className="border-0 transparent">
              <img src={blog} alt="" />
            </button>
            <div className="product-details">
              <h6 className="brand">Sumsang</h6>
              <h5 className="product-title">Samsung product</h5>
              <Rating onClick={handleRating} initialValue={ratingValue} size={window.innerWidth > 768 ? 20: 14} />
              <p className={`product-desc ${grid === 12 ? "d-block" : "d-none"}`}>Lapto is running</p>
              <p className="price">R400</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column">
                <button className="border-0 bg-transparent"><BiHeart/></button>
                <button className="border-0 bg-transparent"><MdCompareArrows /></button>
                <button className="border-0 bg-transparent"><BsEye /></button>
                <button className="border-0 bg-transparent"><HiOutlineShoppingBag /></button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard