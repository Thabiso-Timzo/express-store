import React from 'react'
import { RxCross2 } from 'react-icons/rx'

import BreadCrum from '../../components/bread-crump/BreadCrum'
import Meta from '../../components/meta/Meta'
import laptop from '../../assets/product/2.jpeg'
import Colors from '../../components/colors/Colors'
import Container from '../../components/container/Container'

const Compare = () => {
  return (
    <>
      <Meta title={'Compare Products'} />
      <BreadCrum title='Compare Products'/>
      <Container classOne="compare-products-wrapper py-4">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <RxCross2 size={200} className="position-absolute cross" />
              <div className="product-card-image">
                <img src={laptop} alt='' />
              </div>
              <div className="compare-products-details">
                <h5 className="title">HP laptop, 4GB RAM</h5>
                <h6 className="price mb-3">R5500</h6>  
              </div>
              <div className="product-detail">
                <h5>Brand</h5>
                <p>Lenovo</p>
              </div>
              <div className="product-detail">
                <h5>Type:</h5>
                <p>Laptop</p>
              </div>
              <div className="product-detail">
                <h5>Availability:</h5>
                <p>In stock</p>
              </div>
              <div className="product-detail">
                <h5>Color:</h5>
                <Colors />
              </div>
              <div className="product-detail">
                <h5>Size:</h5>
                <p>S M</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <RxCross2 size={200} className="position-absolute cross" />
              <div className="product-card-image">
                <img src={laptop} alt='' />
              </div>
              <div className="compare-products-details">
                <h5 className="title">HP laptop, 4GB RAM</h5>
                <h6 className="price mb-3">R5500</h6>  
              </div>
              <div className="product-detail">
                <h5>Brand</h5>
                <p>Lenovo</p>
              </div>
              <div className="product-detail">
                <h5>Type:</h5>
                <p>Laptop</p>
              </div>
              <div className="product-detail">
                <h5>Availability:</h5>
                <p>In stock</p>
              </div>
              <div className="product-detail">
                <h5>Color:</h5>
                <Colors />
              </div>
              <div className="product-detail">
                <h5>Size:</h5>
                <p>S M</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Compare