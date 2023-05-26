import React from 'react'

import laptop from '../../assets/product/4.jpeg'
// 3:33:07
const FamousProducts = () => {
  return (
    <div className='famous-products'>
      <div className="container-xxl">
        <div className="row">
            <div className="col-3">
                <div className="famous-card position-relative">
                    <img src={laptop} alt='' className="image"/>
                    <div className="famous-content position-absolute">
                        <h5>Laptop</h5>
                        <h6>Lenovo</h6>
                        <p>From only R4500</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="famous-card position-relative">
                    <img src={laptop} alt='' className="image"/>
                    <div className="famous-content position-absolute">
                        <h5>Laptop</h5>
                        <h6>Lenovo</h6>
                        <p>From only R4500</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="famous-card position-relative">
                    <img src={laptop} alt='' className="image"/>
                    <div className="famous-content position-absolute">
                        <h5>Laptop</h5>
                        <h6>Lenovo</h6>
                        <p>From only R4500</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="famous-card position-relative">
                    <img src={laptop} alt='' className="image"/>
                    <div className="famous-content position-absolute">
                        <h5>Laptop</h5>
                        <h6>Lenovo</h6>
                        <p>From only R4500</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FamousProducts
