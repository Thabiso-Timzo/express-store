import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import Mobile from '../mobile/Mobile'
import logo from '../../assets/logo.png'
import Search from '../search/Search'
import AccDropdown from '../acc-dropdown/AccDropdown'
import { 
  bars, 
  search, 
  cart,
  wishlist,
} from '../links/MobileNavigation';
import MobileSearch from '../mobile-search/MobileSearch'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => {
    setMobileNav(!mobileNav)
  }

  const handleShownClick = () => {
    setIsShown(!isShown)
  }

  return (
    <>
      <header className="nav">
        <div className="container">
          <div className="item-container">
          <div className="bars" onClick={handleClick}>
            <bars.icon />
          </div>
          <div className="col-1">
            <Link to='/'>
              <img  src={logo} alt="" />
            </Link>
          </div>
          <div className="cart-group">
            <div className="search" onClick={handleShownClick}>
              <search.icon />
            </div>
            <div className="cart">
              <Link to='cart'>
                <cart.icon />
              </Link>
            </div>
          </div>
          <div className="seach-container">
            <Search />
          </div> 
          <div className="co1-2">
            <div className="upper-links">
              <div className='favourite'>
                <Link to='/wishlist'>
                  <wishlist.icon className='icons'/>
                </Link>
              </div>
              <div className='cart'>
                <Link to='/cart'>
                  <cart.icon className='icons'/>
                  <div>
                    <span>0</span>
                  </div>
                </Link>
              </div>
              <div className='dropdown'>
                <AccDropdown /> 
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Mobile handleClick={handleClick} mobileNav={mobileNav} />
      <div className="mobile-search">
        {isShown && (
          <div>
            <MobileSearch handleShownClick={handleShownClick} />
         </div>
        )}
      </div> 
    </>
  )
}

export default Header