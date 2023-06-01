import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'

const RefundPolicy = () => {
  return (
    <>
      <Meta title={'Refund policy'} />
      <BreadCrum title='Refund policy'/>
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

export default RefundPolicy
