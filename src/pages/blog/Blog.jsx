import React from 'react'

import Meta from '../../components/meta/Meta'
import BreadCrum from '../../components/bread-crump/BreadCrum'
import BlogCard from '../../components/blog-card/BlogCard'

const Blog = () => {
  return (
    <>
      <Meta title={'Blog'} />
      <BreadCrum title='Blog'/>
      <div className="block-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
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
        </div>
      </div>
    </>
  )
}

export default Blog