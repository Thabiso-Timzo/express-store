import React from 'react'
import { useNavigate } from 'react-router-dom'

import BreadCrum from '../../components/bread-crump/BreadCrum'
import Meta from '../../components/meta/Meta'

const Register = () => {
  const navigate = useNavigate()
  return (
    <>
      <Meta title={'Register'} />
      <BreadCrum title='Register'/>
      <div className="login-wrapper">
        <div className="container-xxl">
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
                    <p>Already have an account?</p> <button onClick={() => navigate('/auth')} className="sign-up">Sign in</button>
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

export default Register