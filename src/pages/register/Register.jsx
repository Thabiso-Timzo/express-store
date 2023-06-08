import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import BreadCrum from '../../components/bread-crump/BreadCrum'
import Meta from '../../components/meta/Meta'
import Container from '../../components/container/Container'
import { registerUser } from '../../features/user/userSlice'

const registerSchema = yup.object({
  firstname: yup.string().required("First name is required."),
  lastname: yup.string().required("Last name is required."),
  email: yup.string().nullable().email("Email should be valid."),
  mobile: yup.string().required("Mobile No. is required."),
  password: yup.string().required("Pasword is required.")
})

const Register = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: ""
    },
    validationSchema :registerSchema,
    onSubmit: values => {
      dispatch(registerUser(values))
    }
  })

  return (
    <>
      <Meta title={'Register'} />
      <BreadCrum title='Register'/>
      <Container classOne="login-wrapper py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Register</h3>
              <form className="d-flex flex-column gap-3" onSubmit={formik.handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="firstname" 
                    placeholder="Enter your first name" 
                    className="form-control" 
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}  
                    onBlur={formik.handleBlur("firstname")}
                  />
                </div>
                <div className="error text-danger">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <div>
                  <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Enter your second name" 
                    className="form-control" 
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                </div>
                <div className="error text-danger">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="Enter your cellphone number" 
                    className="form-control"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                </div>
                <div className="error text-danger">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
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