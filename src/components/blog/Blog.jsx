import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import BlogCard from '../blog-card/BlogCard'
import Container from '../container/Container'
import { GetAllblogs } from '../../features/blogs/blogSlice'

const Blog = () => {
  const dispatch = useDispatch()

  const blogState = useSelector((state) => state?.blog?.blog)

  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = () => {
    dispatch(GetAllblogs())
  }

  return (
    <Container classOne="blog-wrapper py-4">
      <div className="row">
        <div className="col-12">
          <h3 className='section-heading'>Our Latest Blog</h3>
        </div>
      </div>
      <div className="row">
        {blogState && blogState?.map((item, index) => {
          if (index < 4) {
            return (
              <div className="col-3" key={index}>
                <BlogCard 
                  id={item?._id} 
                  title={item?.title}
                  description={item?.description}
                  image={item?.image}
                  date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                />
              </div>   
            )
          }
        })}
      </div>
    </Container>
  )
}

export default Blog