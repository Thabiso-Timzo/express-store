import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import Container from '../../components/container/Container'

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={'Shopping policy'} />
      <BreadCrum title='Shopping policy'/> 
      <Container classOne="policy-wrapper py-4">
        <div className="row">
          <div className="col-12">
             <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShippingPolicy
