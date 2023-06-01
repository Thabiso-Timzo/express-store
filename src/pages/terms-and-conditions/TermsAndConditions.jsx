import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
// 6:40:26
const TermsAndConditions = () => {
  return (
    <>
        <Meta title={'Terms and conditions'} />
        <BreadCrum title='Terms and conditions'/> 
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

export default TermsAndConditions
