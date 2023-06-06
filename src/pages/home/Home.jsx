import React from 'react'

import { items, services, images } from '../../utils/data/Data'
import Banner from '../../components/banner/Banner'
import Offers from '../../components/offers/Offers'
import Product from '../../components/product/Product'
import Special from '../../components/special/Special'
import PopularProducts from '../../components/popular-products/PopularProducts'
import Marque from '../../components/marque/Marque'
import Blog from '../../components/blog/Blog'
import FamousProducts from '../../components/famous-products/FamousProducts'
import Meta from '../../components/meta/Meta'

const Home = () => {
  return (
    <>
      <Meta title={'Home'} />
      <div className="home">
        <Banner />
        <Offers services={services} items={items}/>
        <Product />
        <FamousProducts />
        <Special />
        <PopularProducts />
        <Marque images={images} />
        <Blog />
      </div>
    </>
    
  )
}

export default Home