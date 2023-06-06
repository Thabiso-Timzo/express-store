import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import Container from '../../components/container/Container'

const RefundPolicy = () => {
  return (
    <>
      <Meta title={'Refund policy'} />
      <BreadCrum title='Refund policy'/>
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

export default RefundPolicy
