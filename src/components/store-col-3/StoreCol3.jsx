import React from 'react'

import Colors from '../colors/Colors'

const StoreCol3 = ({ pic1, ratingValue, handleRating, Rating }) => {
  return (
    <div className="col-3">
        <div className="filter-card mb-3">
            <h3 className="filter-title">Shop by categories</h3>
            <div>
                <ul className="ps-0">
                    <li>TV</li>
                    <li>Shoes</li>
                    <li>Watches</li>
                    <li>Washing machine</li>
                </ul>
            </div>
        </div>
        <div className="filter-card mb-3">
            <h3 className="filter-title">Filter By</h3>
            <div>
                <h5 className="sub-title">Availability</h5>
                <div className="form-check">
                    <input 
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label">Out of stock</label>
                </div>
                <div className="form-check">
                    <input 
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label">In stock (4)</label>
                </div>
                <div>
                    <h5 className="sub-title mt-3">Price</h5>
                    <div className="d-flex align-items-center gap-2">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                            <label htmlFor="floatingInput">From</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput-1" placeholder="To" />
                            <label htmlFor="floatingInput-1">To</label>
                        </div>
                    </div>
                    <h5 className="sub-title mt-3">Colors</h5>
                    <div>
                        <div>
                           <Colors />
                        </div>
                    </div>
                    <h5 className="sub-title mt-3">Size</h5>
                    <div>
                        <div className="form-check">
                            <input 
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                            />
                            <label className="form-check-label">S (8)</label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                            />
                            <label className="form-check-label">M (12)</label>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">Product tags</h3>
                    <div>
                        <div className="product-tag d-flex flex-wrap align-items-center gap-3">
                            <span className="badge bg-secondary rounded-3 py-2 px-3">
                                Laptop
                            </span>
                            <span className="badge bg-secondary rounded-3 py-2 px-3">
                                Laptop
                            </span>
                            <span className="badge bg-secondary rounded-3 py-2 px-3">
                                Laptop
                            </span>
                            <span className="badge bg-secondary rounded-3 py-2 px-3">
                                Laptop
                            </span>
                            <span className="badge bg-secondary rounded-3 py-2 px-3">
                                Laptop
                            </span>
                            <span className="badge bg-secondary rounded-3 py-2 px-3">
                                Laptop
                            </span>
                        </div>
                    </div>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">Random products</h3>
                    <div>
                        <div className="random-products d-flex">
                            <div className="w-40">
                            <img src={pic1} alt='' className='image'/>
                        </div>
                        <div className="w-60 p-1">
                            <h5>HP Laptop</h5>
                            <Rating onClick={handleRating} initialValue={ratingValue} size={window.innerWidth > 768 ? 20: 14} />
                            <p>R6700</p>
                        </div>
                    </div>
                    <div className="random-products d-flex mt-2">
                        <div className="w-40">
                        <img src={pic1} alt='' className='image'/>
                    </div>
                    <div className="w-60 p-1">
                        <h5>HP Laptop</h5>
                        <Rating onClick={handleRating} initialValue={ratingValue} size={window.innerWidth > 768 ? 20: 14} />
                        <p>R6700</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreCol3
