import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import BlogCard from '../../components/blog-card/BlogCard'
import Container from '../../components/container/Container'
import { GetAllblogs } from '../../features/blogs/blogSlice'

const Blog = () => {
  const dispatch = useDispatch()

  const blogState = useSelector((state) => state?.blog?.blog)

  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = () => {
    dispatch(GetAllblogs());
  }

  return (
    <>
      <Meta title={'Blog'} />
      <BreadCrum title='Blog'/>
      <Container classOne="block-wrapper py-4">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find by categories</h3>
              <div>
                <ul className="ps-0">
                  <li>TV</li>
                  <li>Shoes</li>
                  <li>Watches</li>
                  <li>Washing machine</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogState && blogState?.map((item, index) => {
                return (
                  <div className="col-6 mb-3" key={index}>
                    <BlogCard 
                      id={item?._id} 
                      title={item?.title}
                      description={item?.description}
                      image={item?.image}
                      date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                    />
                  </div>   
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog