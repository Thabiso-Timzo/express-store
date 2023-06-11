import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import blog from '../../assets/blog/blog-1.jpeg'
import Container from '../../components/container/Container';
import { Getblog } from '../../features/blogs/blogSlice'

const SingleBlog = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const getBlogId = location.pathname.split("/")[2]
  const singleBlogState = useSelector((state) => state?.blog?.singleBlog)

  useEffect(() => {
    getBlog()
  }, [])

  const getBlog = () => {
    dispatch(Getblog(getBlogId))
  }

  return (
    <>
      <Meta title={singleBlogState?.title} />
      <BreadCrum title={singleBlogState?.title}/>
      <Container classOne="block-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <div className="d-flex gap-2 cursor" onClick={() => navigate('/blog')}>
                <HiOutlineArrowLeft size={20}/>
                <button className='back'>Go back to blogs</button>
              </div>
              <h3 className="title">{singleBlogState?.title}</h3>
              <img src={singleBlogState?.image ? singleBlogState?.image : blog} className="w-100 my-4" alt='blog' />
              <p dangerouslySetInnerHTML={{__html: singleBlogState?.description}}></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog
