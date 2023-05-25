import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'

import './AccDropdown.scss'
import { links } from '../../components/links/DropdownLinks'

const AccDropdown = () => {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-wrapper">
          <div className="dropdown-container">
            <div className="dropdown-header" onClick={handleClick}>
              <div className="dropdown-title">
                My Account  
              </div>
              {open ? <MdOutlineKeyboardArrowDown />: <MdOutlineKeyboardArrowUp /> }
            </div>
          </div>
          {open && (
            <ul className='list'>
              {links.map((item) => {
                return (
                  <Link to={item.path}>
                    <li key={item.id}><item.icon /> {item.page}</li>
                  </Link>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccDropdown