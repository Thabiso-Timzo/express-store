import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import BlogCard from '../../components/blog-card/BlogCard'
import Container from '../../components/container/Container'

const Blog = () => {
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
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog