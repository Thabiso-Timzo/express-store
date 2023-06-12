import React from 'react'

import SpecialCard from '../special-card/SpecialCard'
import Container from '../container/Container'

const Special = ({ productState }) => {
  return (
    <Container classOne="spacial py-4">       
        <div className="row">
            <div className="col-12">
                <h3 className='section-heading'>Special Products</h3>
            </div>
        </div>
        <div className="row">
          {productState && productState?.map((item, index) => {
            if (item.tags === "special") {
              return (
                <SpecialCard 
                  key={index} 
                  title={item?.title}
                  brand={item?.brand}
                  totalrating={item?.totalrating}
                  price={item?.price}
                  sold={item?.sold}
                  quantity={item?.quantity}
                />
              )
            }
          })}
        </div>
    </Container>
  )
}

export default Special