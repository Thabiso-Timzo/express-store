import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={'Shopping policy'} />
      <BreadCrum title='Shopping policy'/> 
      <div className="policy-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShippingPolicy
