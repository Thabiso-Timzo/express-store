import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import pic from '../../assets/product/4.jpeg'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrum title='Cart'/>
      <section className="cart-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 mb d-flex justify-content-between">
                <div className="cart-col-1 gap-3 d-flex align-items-center">
                  <div className="w-25">
                    <img src={pic} alt="" className="image" />
                  </div>
                  <div className="w-75">
                    <p>Product: Laptop</p>
                    <p>Color: Red</p>
                    <p>Size: M L</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price mt-5">R5500</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-3">
                  <div>
                    <input type="number" className="form-control" name="" id="" min={1} max={10} />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger fs-5" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price mt-5">R5500</h5>
                </div>
                <hr />
              </div>
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between">
                  <Link to="/store" className="btn btn-primary mt-20 w-20">Continue to shopping</Link>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: R5550</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="btn btn-primary mt-20 w-30">Checkout</Link>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart