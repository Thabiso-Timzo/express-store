import React, { useState } from 'react'
import {  Rating }from 'react-simple-star-rating'
import { Link } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import ProductCard from '../../components/product-card/ProductCard'
import product from '../../assets/product/3.jpeg'
import Colors from '../../components/colors/Colors';
// 7:37:22
const SingleProduct = () => {
    const [ratingValue, setRatingValue] = useState(0)
    const [orderedProduct, setOrderedProduct] = useState(true)
    
    const handleRating = (rate) => {
        setRatingValue(rate)
        setOrderedProduct(true)
    }
    
    const props = { 
        width: 400, 
        height: 250, 
        zoomWidth: 500, 
        img: product 
    }

    const copyToClipboard = (text) => {
        console.log("text", text)
        var textField = document.createElement("textarea")
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand("copy")
        textField.remove()
    }

  return (
    <>
        <Meta title={'Product name'} />
        <BreadCrum title='Product name'/>
        <div className="main-product-wrapper">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-3">
                            <div><img src={product} className="image" alt='' /></div>
                            <div><img src={product} className="image" alt='' /></div>
                            <div><img src={product} className="image" alt='' /></div>
                            <div><img src={product} className="image" alt='' /></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">Bulk Laptop</h3>
                                <hr/>
                            </div>
                            <div>
                                <p className="price">R5500</p>
                                <div className="d-flex align-items-center gap-3">
                                    <Rating 
                                        onClick={handleRating} 
                                        initialValue={ratingValue} 
                                        size={window.innerWidth > 768 ? 20: 14}
                                    />
                                    <p className="review-btn mb-0">(2 reviews)</p>
                                </div>
                                <Link
                                    className="review-btn cursor text-decoration-underline" 
                                    to="#review"
                                >
                                    Write a review
                                </Link>
                                <hr />
                            </div>
                            <div className="py-3">
                                <div className="d-flex gap-3 align-items-center my-2">
                                    <h3 className="product-heading">Type:</h3> 
                                    <p className="product-data">Laptop</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-2">
                                    <h3 className="product-heading">Brand:</h3> 
                                    <p className="product-data">Lenovo</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-2">
                                    <h3 className="product-heading">Category:</h3> 
                                    <p className="product-data">Electronics</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-2">
                                    <h3 className="product-heading">Tags:</h3> 
                                    <p className="product-data">Thabiso</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-2">
                                    <h3 className="product-heading">Availabilty:</h3> 
                                    <p className="product-data">In stock</p>
                                </div>
                                <div className="d-flex gap-3 flex-column mt-2 mb-3">
                                    <h3 className="product-heading">Size:</h3> 
                                    <div className="d-flex flex-wrap gap-5">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XS</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 flex-column mt-2 mb-3">
                                    <h3 className="product-heading">Color:</h3> 
                                    <Colors />
                                </div>
                                <div className="d-flex gap-3 flex-row mt-2 mb-3">
                                    <h3 className="product-heading">Quantity:</h3> 
                                    <div>
                                        <input 
                                            type="number" 
                                            name="" 
                                            className="form-control"
                                            style={{ width: "70px" }} 
                                            id="" 
                                            min={1}
                                            max={10}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center gap-2 w-100">
                                        <button type="submit" className="btn btn-primary mt-20 w-50">Add to cart</button>
                                        <button type="submit" className="btn btn-primary mt-20 w-50">Buy it now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-5">
                                    <div>
                                        <Link to='/compare'><TbGitCompare className="fs-5 me-2" />  Add to compare</Link>
                                    </div>
                                    <div>
                                        <Link to='/compare'><AiOutlineHeart className="fs-5 me-2" /> Add to compare</Link>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 flex-column my-3">
                                    <h3 className="product-heading">Shipping & Return:</h3> 
                                    <p className="product-data">
                                        Free shipping and returns available on all orders! <br />
                                        We ship all South African domestic orders within
                                        <b> 5-10 business days!</b>
                                    </p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Copy product link:</h3> 
                                    <Link 
                                        //to="javascript:void(0)" 
                                        onClick={() => {
                                        copyToClipboard('product-link')
                                    }}>Copy link</Link>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="description-wrapper">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4 className="mt-5">Description</h4>
                        <div className="p-3 paragraph">    
                            <p>
                                djdfdkf glrgkljgkr rlgjrlkgjlrjg lkgrjglkjrlg 
                                rlgjrlkgjrk rgkrgjrk gorjglrjn orjgorj rkgojeroh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="reviews-wrapper pb-5 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4 id="review">Reviews</h4>
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4 className="mb-2">Customer Reviews</h4>
                                <div className="d-flex gap-3">
                                    <Rating 
                                        onClick={handleRating} 
                                        initialValue={ratingValue} 
                                        size={window.innerWidth > 768 ? 20: 14}
                                    />
                                    <p className="mb-0">Based on 2 reviews</p>
                                </div>               
                            </div>
                            {orderedProduct && (
                                <div>
                                    <Link 
                                        className="review-btn cursor text-decoration-underline" 
                                        to="#review"
                                    >
                                        Write a review
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="review-form py-4">
                            <h4>Write a Review</h4>    
                            <form className="d-flex flex-column gap-3">
                                <div>
                                    <Rating onClick={handleRating} initialValue={ratingValue} size={window.innerWidth > 768 ? 20: 14}/>
                                </div>
                                <div>
                                    <textarea 
                                        name='' 
                                        id='' 
                                        className='w-100 form-control' 
                                        cols='20'
                                        rows='10'
                                        placeholder='Message'
                                    ></textarea>
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <button type="submit" className="btn btn-primary mt-20 w-50">Submit Review</button>
                                </div>
                            </form>
                        </div>
                        <div className="reviews mt-4">
                            <div className="review">
                                <div className="d-flex gap-3 align-items-center">
                                    <h6>Thabiso</h6>
                                    <Rating onClick={handleRating} initialValue={ratingValue} size={window.innerWidth > 768 ? 20: 14}/>
                                </div>
                                <p className="mt-2">Review here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="product-wrapper">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className='section-heading'>Our popular products</h3>
                    </div>
                    <ProductCard />
                </div>
            </div>
        </section>
    </>
  )
}

export default SingleProduct
