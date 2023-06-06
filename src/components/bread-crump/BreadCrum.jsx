import React from 'react'
import { Link } from 'react-router-dom';

import Container from '../container/Container';

const BreadCrum = ({ title }) => {
  return (
    <Container classOne="bread-crump">
      <div className="row">
        <div className="col-12">
          <p className="text-center mt-3"><Link to='/' className="text-dark">Home </Link> / { title }</p>
        </div>
      </div>
    </Container>
  )
}

export default BreadCrum
