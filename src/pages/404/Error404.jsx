import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import Container from '../../components/container/Container';

const Error404 = () => {
  return (
    <>
      <Meta title={'Page not found'} />
      <BreadCrum title='Page not found'/>
      <Container classOne="not-found-wrapper py-4">
        <div className="row">
          <div className="col-12">
            <h1>Page not found</h1>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Error404