import React, { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import product from '../../assets/product/4.jpeg'
import Container from '../../components/container/Container'
import { getuserProductWishlist } from '../../features/user/userSlice'
import { addToWishlist } from '../../features/products/productSlice'

const WishList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getuserProductWishlist()) 
  },[dispatch])

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist)
  
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id))
    setTimeout(() => {
      dispatch(getuserProductWishlist()) 
    }, 300)
  } 
  
  return (
    <>
      <Meta title={'Wish-list'} />
      <BreadCrum title='Wish-list'/>
      <Container classOne="wishlist-wrapper py-4">
        <div className="row">
          {/* {!wishlistState && (
            <div className="text-center fs-3">
              No data
            </div>
          )} */}
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card w-100 position-relative">
                  <div className="cursor" onClick={() => removeFromWishlist(item?._id)}>
                    <RxCross2 size={200} className="position-absolute cross" />
                  </div>
                  <div className="wishlist-card-image">
                    <img 
                      src={
                        item?.images[0].url 
                          ? item?.images[0].url 
                          : product
                      } 
                      alt='' 
                      className="w-100 d-block mx-auto"   
                      width={160}
                    />
                  </div>
                  <div className="product-items">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">R{item?.price}</h6>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default WishList