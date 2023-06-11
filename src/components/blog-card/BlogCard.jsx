import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ id, title, description, image, date }) => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src={image} className="img-fluid w-100" alt="" />
          <div className="block-content">
            <p className='date'>{date}</p>
            <h5 className='title'>{title}</h5>
            <p className='description' dangerouslySetInnerHTML={{__html: description?.substr(0, 70) + "..."}}></p>
            <Link to={"/blog/" + id}>Read more</Link>
          </div>
        </div>
      </div>
   
  )
}

export default BlogCard