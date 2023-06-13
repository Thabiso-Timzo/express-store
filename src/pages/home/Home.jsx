import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

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
import FeaturedCollection from '../../components/featured-collection/FeaturedCollection'
import { GetAllProducts } from '../../features/products/productSlice';

const Home = () => {
  const dispatch = useDispatch()

  const productState = useSelector((state) => state.product.product)

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    dispatch(GetAllProducts())
  }

  return (
    <>
      <Meta title={'Home'} />
      <div className="home">
        <Banner />
        <Offers services={services} items={items}/>
        <Product />
        <FeaturedCollection productState={productState} />
        <FamousProducts />
        <Special productState={productState} />
        <PopularProducts  productState={productState} />
        <Marque images={images} />
        <Blog />
      </div>
    </>
    
  )
}

export default Home