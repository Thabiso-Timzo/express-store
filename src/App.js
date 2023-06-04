import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import WishList from './pages/wish-list/WishList';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Compare from './pages/compare/Compare';
import Store from './pages/store/Store';
import Error404 from './pages/404/Error404';
import Blog from './pages/blog/Blog'
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import Account from './components/account/Account';
import ResetPassword from './pages/reset-password/ResetPassword';
import SingleBlog from './pages/single-blog/SingleBlog';
import RefundPolicy from './pages/refund-policy/RefundPolicy';
import PrivatePolicy from './pages/private-policy/PrivatePolicy';
import ShippingPolicy from './pages/shipping-policy/ShippingPolicy';
import TermsAndConditions from './pages/terms-and-conditions/TermsAndConditions';
import SingleProduct from './pages/single-product/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='auth' element={<Account />}>
            <Route index element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='register' element={<Register />} />
            <Route path='reset-password' element={<ResetPassword />} />
          </Route>
          <Route path='compare' element={<Compare />} />
          <Route path='store' element={<Store />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<SingleBlog />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='privacy-policy' element={<PrivatePolicy />} />
          <Route path='shopping-policy' element={<ShippingPolicy />} />
          <Route path='terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
