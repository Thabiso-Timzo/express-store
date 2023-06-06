import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import Container from '../../components/container/Container'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Forgot password'} />
      <BreadCrum title='Forgot password'/>
      <Container classOne="login-wrapper py-4">
        <div className="row">
          <div className="col-12">
          <Link to="/login" className="text-dark">Back</Link>
            <div className="auth-card">  
              <h3 className="text-center mb-3">Forgot password</h3>
              <form className="d-flex flex-column gap-3">
                <div>
                  <input type="email" name="email" placeholder="Enter your email address" className="form-control" />
                </div>
                <div className='d-flex justify-content-center mt-3'>
                  <button type="submit" className="btn btn-primary mt-20 w-50">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ForgotPassword
