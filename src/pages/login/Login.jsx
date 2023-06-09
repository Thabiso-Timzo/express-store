import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'


import BreadCrum from '../../components/bread-crump/BreadCrum'
import Meta from '../../components/meta/Meta'
import Container from '../../components/container/Container'
import { loginUser } from '../../features/user/userSlice'

const loginSchema = yup.object({
  email: yup.string().email("Email should be valid.").required("Email address is required."),
  password: yup.string().required("Pasword is required.")
})

const Login = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema :loginSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values))
      dispatch(loginUser(values))
    }
  })

  return (
    <>
      <Meta title={'Login'} />
      <BreadCrum title='Login'/>
      <Container classOne="login-wrapper py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form className="d-flex flex-column gap-3" onSubmit={formik.handleSubmit}>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email address" 
                    className="form-control" 
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                </div>
                <div className="error text-danger">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div>
                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    className="form-control"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                </div>
                <div className="error text-danger">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <Link to='/forgot-password' className="forgot-password">Forgot Password</Link>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                  <button type="submit" className="btn btn-primary mt-20 w-50">Login</button>
                </div>
                <div className="d-flex">
                  <p>Do you have an account?</p> <Link to='/register' className="sign-up">Sign up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login