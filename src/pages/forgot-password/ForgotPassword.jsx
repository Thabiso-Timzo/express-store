import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'

const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Forgot password'} />
      <BreadCrum title='Forgot password'/>
      <div className="login-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
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
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
