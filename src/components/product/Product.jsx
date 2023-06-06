import React from 'react'
import ProductCard from '../product-card/ProductCard'
import Container from '../container/Container'

const Product = () => {
  return (
    <Container classOne="product-wrapper py-4">
      <div className="row">
        <div className="col-12">
          <h3 className='section-heading'>Feature Collection</h3>
        </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
    </Container>
  )
}

export default Product