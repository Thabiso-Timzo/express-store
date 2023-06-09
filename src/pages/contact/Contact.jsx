import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import BreadCrum from '../../components/bread-crump/BreadCrum'
import Meta from '../../components/meta/Meta'
import Container from '../../components/container/Container'
import { createQuery } from '../../features/contact/contactSlice'

const contactSchema = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().email("Email should be valid.").required("Email address is required."),
  mobile: yup.string().required("Mobile No. is required."),
  comment: yup.string().required("comment is required.")
})

const Contact = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: value => {
      dispatch(createQuery(value))
    }
  })

  return (
    <>
      <Meta title={'Contact'} />
      <BreadCrum title='Contact'/>
      <Container classOne="contact-wrapper py-4">
        <div className="row">
          <div className="col-12">
            <iframe 
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d917891.6872366291!2d28.127379399999995!3d-26.01671995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1685358397514!5m2!1sen!2sza" 
              height="450" 
              style={{border:0, width: "100%", borderRadius: 5}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"   
            />
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between mb-3">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form className="d-flex flex-column gap-3" onSubmit={formik.handleSubmit}>
                  <div>
                    <input 
                      type="text"  
                      className="form-control" 
                      placeholder='Name'
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                  </div>
                  <div className="errors text-danger">
                    {formik.touched.name && formik.errors.name}
                  </div>
                  <div>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder='Email'
                      name="email" 
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="errors text-danger">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <div>
                    <input 
                      type="tel"  
                      className="form-control" 
                      placeholder='Cellphone number'
                      name="mobile" 
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                  </div>
                  <div className="errors text-danger">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                  <div>
                    <textarea 
                      id='' 
                      className='w-100 form-control' 
                      cols='20'
                      rows='10'
                      placeholder='Message'
                      name="comment" 
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    ></textarea>
                  </div>
                  <div className="errors text-danger">
                    {formik.touched.comment && formik.errors.comment}
                  </div>
                  <div className='d-flex justify-content-center mt-3'>
                    <button type="submit" className="btn btn-primary mt-20 w-50">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Follow us on</h3>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-3">
                    <AiOutlineHome className="fs-5" />
                    <address className="mb-0">Midrand</address>
                  </li>
                  <li className="mb-3 d-flex gap-3">
                    <BiPhoneCall className="fs-5" />
                    <Link to='tel:+27112345678' className="mb-0">(011)-234-5678</Link>
                  </li>
                  <li className="mb-3 d-flex gap-3">
                    <AiOutlineMail className="fs-5" />
                    <Link to='mailto:info@express-store.co.za' className="mb-0">info@express-store.co.za</Link>
                  </li>
                  <li className="mb-3 d-flex gap-3">
                    <BiInfoCircle className="fs-5" />
                    <p className="mb-0">Monday - Saturday | 08:00 - 16:00</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact