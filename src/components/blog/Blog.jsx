import React from 'react'


import BlogCard from '../blog-card/BlogCard'
import Container from '../container/Container'

const Blog = () => {
  return (
    <Container classOne="blog-wrapper py-4">
      <div className="row">
        <div className="col-12">
          <h3 className='section-heading'>Our Latest Blog</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <BlogCard />
        </div>
        <div className="col-3">
          <BlogCard />
        </div>
        <div className="col-3">
          <BlogCard />
        </div>
        <div className="col-3">
          <BlogCard />
        </div>
      </div>
    </Container>
  )
}

export default Blog