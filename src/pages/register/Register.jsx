import React from 'react'
import { Link } from 'react-router-dom'

import BreadCrum from '../../components/bread-crump/BreadCrum'
import Meta from '../../components/meta/Meta'
import Container from '../../components/container/Container'

const Register = () => {
  return (
    <>
      <Meta title={'Register'} />
      <BreadCrum title='Register'/>
      <Container classOne="login-wrapper py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Register</h3>
              <form className="d-flex flex-column gap-3">
                <div>
                  <input type="text" name="first-name" placeholder="Enter your first name" className="form-control" />
                </div>
                <div>
                  <input type="text" name="second-name" placeholder="Enter your second name" className="form-control" />
                </div>
                <div>
                  <input type="tel" name="email" placeholder="Enter your cellphone number" className="form-control" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Enter your email address" className="form-control" />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Enter your password" className="form-control" />
                </div>
                <div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                  <button type="submit" className="btn btn-primary mt-20 w-50">Register</button>
                </div>
                <div className="d-flex sign-in">
                  <p>Already have an account?</p> <Link to="/login" className="sign-up">Sign in</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Register