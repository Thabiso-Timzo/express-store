import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrum = ({ title }) => {
  return (
    <div className="bread-crump">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <p className="text-center mt-3"><Link to='/' className="text-dark">Home </Link> / { title }</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrum
