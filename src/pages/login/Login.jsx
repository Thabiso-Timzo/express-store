import React from 'react'
import { Link } from 'react-router-dom';

import BreadCrum from '../../components/bread-crump/BreadCrum'
import Meta from '../../components/meta/Meta'

const Login = () => {
  return (
    <>
      <Meta title={'Login'} />
      <BreadCrum title='Login'/>
      <div className="login-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form className="d-flex flex-column gap-3">
                  <div>
                    <input type="email" name="email" placeholder="Enter your email address" className="form-control" />
                  </div>
                  <div>
                    <input type="password" name="password" placeholder="Enter your password" className="form-control" />
                  </div>
                  <div>
                    <Link to='forgot-password' className="forgot-password">Forgot Password</Link>
                  </div>
                  <div className='d-flex justify-content-center mt-3'>
                    <button type="submit" className="btn btn-primary mt-20 w-50">Login</button>
                  </div>
                  <div className="d-flex">
                    <p>Do you have an account?</p> <Link to='register' className="sign-up">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login