import React from 'react'
import { RxCross2 } from 'react-icons/rx'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import product from '../../assets/product/4.jpeg'
import Container from '../../components/container/Container'

const WishList = () => {
  return (
    <>
      <Meta title={'Wish-list'} />
      <BreadCrum title='Wish-list'/>
      <Container classOne="wishlist-wrapper py-4">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card w-100 position-relative">
              <RxCross2 size={200} className="position-absolute cross" />
              <div className="wishlist-card-image">
                <img src={product} alt='' className="w-100" />
              </div>
              <div className="product-items">
                <h5 className="title">HP laptop, 4GB RAM</h5>
                <h6 className="price">R5500</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card w-100 position-relative">
              <RxCross2 size={200} className="position-absolute cross" />
              <div className="wishlist-card-image">
                <img src={product} alt='' className="w-100" />
              </div>
              <div className="product-items">
                <h5 className="title">HP laptop, 4GB RAM</h5>
                <h6 className="price">R5500</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card w-100 position-relative">
              <RxCross2 size={200} className="position-absolute cross" />
              <div className="wishlist-card-image">
                <img src={product} alt='' className="w-100" />
              </div>
              <div className="product-items">
                <h5 className="title">HP laptop, 4GB RAM</h5>
                <h6 className="price">R5500</h6>
              </div>
            </div>
          </div><div className="col-3">
            <div className="wishlist-card w-100 position-relative">
              <RxCross2 size={200} className="position-absolute cross" />
              <div className="wishlist-card-image">
                <img src={product} alt='' className="w-100" />
              </div>
              <div className="product-items">
                <h5 className="title">HP laptop, 4GB RAM</h5>
                <h6 className="price">R5500</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default WishList