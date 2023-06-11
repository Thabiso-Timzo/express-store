import React, { useState } from 'react'
import { 
    MdOutlineKeyboardArrowUp, 
    MdOutlineKeyboardArrowDown,
} from 'react-icons/md'

const Category = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(false)

    const options = ["Electronics", "Furniture", "Clothes", "Kitchen-ware"]

    const handleClick = () => {
        setOpen(!open)
    }
  return (
    
        <div className="wrapper">
            <div className="dropdown">
                <div className="dropdown-wrapper">
                    <div className="dropdown-container">
                        <div className="dropdown-header" onClick={handleClick}>
                            <div className="dropdown-title">
                               <p className="text-dark">{selected ? selected : "Category"}</p> 
                            </div>
                            {open ? <MdOutlineKeyboardArrowDown />: <MdOutlineKeyboardArrowUp /> }
                        </div>
                    </div>
                    {open && (
                        <ul className='list'>
                            {options.map((item, i) => (
                                <li 
                                    key={i}
                                    onClick={
                                        () => {setSelected(item);
                                        setOpen(false)
                                    }}
                                >{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
  
  )
}

export default Category
