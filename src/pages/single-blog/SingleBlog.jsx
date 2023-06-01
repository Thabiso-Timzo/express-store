import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import blog from '../../assets/blog/blog-1.jpeg'

const SingleBlog = () => {
  const navigate = useNavigate()

  return (
    <>
      <Meta title={'Blog name'} />
      <BreadCrum title='Blog name'/>
      <div className="block-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <div className="d-flex gap-2 cursor" onClick={() => navigate('/blog')}>
                  <HiOutlineArrowLeft size={20}/>
                  <button className='back'>Go back to blogs</button>
                </div>
                <h3 className="title">Blog secure</h3>
                <img src={blog} className="w-100 my-4" alt='blog' />
                <p>Blog description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
