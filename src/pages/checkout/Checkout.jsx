import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

import Meta from '../../components/meta/Meta'
import pic from '../../assets/product/4.jpeg'
import Container from '../../components/container/Container'

const Checkout = () => {
  return (
    <>
      <Meta title={'Checkout'} />
      <Container classOne="checkout-wrapper py-4">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h5 className="website-name">Express store</h5>
              <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">Cart</Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price" aria-current="page">
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price" aria-current="page">
                    Shipping
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details total">Thabiso Hlatshwayo (thabiso.hlatshwayo24@gmail.com)</p>
              <h4 className="mb-3">Shipping address</h4>
              <form className="d-flex gap-4 flex-wrap justify-content-between">
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>Select country</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input type="text" placeholder="Enter your first name" className="form-control" />
                </div>
                <div className="flex-grow-1">
                  <input type="text" placeholder="Enter your last name" className="form-control" />
                </div>
                <div className="w-100">
                  <input type="text" placeholder="Enter your address" className="form-control" />
                </div>
                <div className="w-100">
                  <input type="text" placeholder="Enter your apartment, suite, etc" className="form-control" />
                </div>
                <div className="flex-grow-1">
                  <input type="text" placeholder="Enter your city" className="form-control" />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>Select state</option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input type="text" placeholder="Enter your zip code" className="form-control" />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <Link to="/cart" className="d-flex text-dark gap-2">
                      <BsArrowLeft className="fs-5" /> 
                      <p>Return to cart</p>
                    </Link>
                    <Link to="/shipping" className="btn btn-primary mt-20 w-30">Continue to shipping</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="py-4">
              <div className="d-flex gap-5 mb-2 align-items-center gap-3">
                <div className="d-flex w-75 gap-3">
                  <div className="w-25 position-relative">
                    <span 
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >1</span>
                    <img src={pic} alt='' className="image" />
                  </div>
                  <div>
                    <h5 className="total-price">Laptop</h5>
                    <p className="total-price">S/M</p>
                  </div>
                </div>
                <div className="flex-group-1">
                  <h5  className="total">R3400</h5>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal:</p>
                  <p className="total-price">R5500</p>
                </div>
              </div>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping:</p>
                <p className="mb-0 total-price">R1000</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="total">Total:</h4>
              <h5 className="total-price">R6500</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout
