import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'

const ResetPassword = () => {
  return (
    <>
        <Meta title={'Reset password'} />
        <BreadCrum title='Reset password'/>
        <div className="login-wrapper">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Reset password</h3>
                            <form className="d-flex flex-column gap-3">
                                <div>
                                    <input type="password" name="password" placeholder="Enter your password" className="form-control" />
                                </div>
                                <div>
                                    <input type="password" name="password2" placeholder="Confirm your password" className="form-control" />
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

export default ResetPassword
