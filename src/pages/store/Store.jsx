import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import BreadCrum from '../../components/bread-crump/BreadCrum'
import Meta from '../../components/meta/Meta'
import pic1 from '../../assets/product/2.jpeg'
import StoreCol3 from '../../components/store-col-3/StoreCol3'
import StoreCol9 from '../../components/store-col-9/StoreCol9'
// 4:18:55
const Store = () => {
  const [ratingValue, setRatingValue] = useState(0)
  const [grid, setGrid] = useState(3)

  const handleRating = (rate) => {
    setRatingValue(rate)
  }
  return (
    <>
      <Meta title={'Our store'} />
      <BreadCrum title='Our Store'/>
      <div className="store">
        <div className="container-xxl">
          <div className="row">
            <StoreCol3 
              pic1={pic1} 
              ratingValue={ratingValue} 
              handleRating={handleRating} 
              Rating={Rating}
            />
            <StoreCol9 
              grid={grid}
              setGrid={setGrid}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Store