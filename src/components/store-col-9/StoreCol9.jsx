import React from 'react'
import { BsGrid3X3Gap, BsGrid3X2Gap } from 'react-icons/bs'
import { MdCheckBoxOutlineBlank, MdOutlineGridView } from 'react-icons/md'

import ProductCard from '../product-card/ProductCard'

const StoreCol9 = ({ grid, setGrid }) => {
  return (
    <div className="col-9">
        <div className="filter-sort-grid mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-5">
                <p className="mb-0 d-block" style={{ width: '150px' }}>Sort By:</p>
                <select name="" className="form-control form-select" id="">
                  <option value="">Cars</option>
                  <option value="">Cars</option>
                  <option value="">Cars</option>
                  <option value="">Cars</option>
                  <option value="">Cars</option>
                  <option value="">Cars</option>
                </select>
              </div>
              <div className="d-flex align-items-center gap-5">
                <p className="total-products">18 products</p>
                <div className="d-flex gap-3 align-items-center">
                  <BsGrid3X3Gap className="grid" onClick={() => {setGrid(3)}}/>
                  <BsGrid3X2Gap className="grid" onClick={() => {setGrid(4)}}/>
                  <MdOutlineGridView className="grid" onClick={() => {setGrid(6)}}/>
                  <MdCheckBoxOutlineBlank className="grid" onClick={() => {setGrid(12)}}/>
                </div>
              </div>
            </div>
        </div>
        <div className="products-list pb-5">
          <div className="d-flex gap-3 flex-wrap">
            <ProductCard grid={grid} />
          </div>
        </div>
    </div>
  )
}

export default StoreCol9