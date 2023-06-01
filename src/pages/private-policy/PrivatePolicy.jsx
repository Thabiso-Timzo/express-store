import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'

const PrivatePolicy = () => {
  return (
    <>
      <Meta title={'Private policy'} />
      <BreadCrum title='Private policy'/> 
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

export default PrivatePolicy
