import React, { useState }  from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiHeart } from 'react-icons/bi'
import { MdCompareArrows } from 'react-icons/md'
import { BsEye } from 'react-icons/bs'

import blog from '../../assets/brands/samsung.png'
import { addToWishlist } from '../../features/products/productSlice'


const ProductCard = ({ data, grid }) => {
  const [ratingValue, setRatingValue] = useState(0)

    const dispatch = useDispatch()

  let location = useLocation()

  const handleRating = (rate) => {
    setRatingValue(rate)
  }

  const addToWishList = (id) => {
    dispatch(addToWishlist(id))
  }
  
  return (
    <>
      {Array.isArray(data) ?  data?.map((item, index) => {
        return (
          <div key={index} className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
              <Link>
              {/* to="/product/:id" */}
                <div className="product-card position-relative">
                  <div className="product-image">
                    <button className="border-0 transparent">
                      <img src={blog} alt="" />
                    </button>
                    <div className="product-details">
                      <h6 className="brand">{item?.brand}</h6>
                      <h5 className="product-title">{item?.title}</h5>
                      <Rating 
                        onClick={handleRating} 
                        initialValue={item?.totalrating} 
                        size={window.innerWidth > 768 ? 20: 14} />
                      <p 
                        className={`product-desc ${grid === 12 ? "d-block" : "d-none"}`}
                        dangerouslySetInnerHTML={{__html: item?.description}}  
                      ></p>
                      <p className="price">R{item?.price}</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column">
                        <button className="border-0 bg-transparent" onClick={(e) => {addToWishList(item?._id)}}><BiHeart/></button>
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
      }) : null}
    </>
  )
}

export default ProductCard