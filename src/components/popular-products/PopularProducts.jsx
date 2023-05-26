import React from 'react'

import ProductCard from '../product-card/ProductCard'

const PopularProducts = () => {
  return (
    <section className="product-wrapper">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className='section-heading'>Our popular products</h3>
              </div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </section>
  )
}

export default PopularProducts