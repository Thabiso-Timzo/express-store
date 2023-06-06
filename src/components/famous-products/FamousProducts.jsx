import React from 'react'

import Container from '../container/Container'
import { famousProducts } from '../../utils/data/Data'

const FamousProducts = () => {
  return (
    <Container classOne="famous-products py-4">
        <div className="row">
            {famousProducts.map((item, i) => (
                <div className="col-3">
                    <div className="famous-card position-relative" key={i}>
                        <img src={item.product} alt='' className="image"/>
                        <div className="famous-content position-absolute">
                            <h5>{item.type}</h5>
                            <h6>{item.brand}</h6>
                            <p>{item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default FamousProducts
