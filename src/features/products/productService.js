import axios from "axios";

import { base_url, config } from "../../utils/axiosConfig";

// Get all the products
const getProducts = async (userData) => {
    const response = await axios.get(`${base_url}/api/product/`)
    if (response.data) {
        return response.data
    }
}

// Get single products
const getSingleProducts = async (id) => {
    const response = await axios.get(`${base_url}/api/product/${id}`)
    if (response.data) {
        return response.data
    }
}

// Add product to wishlist
const addToWishlist = async (prodId) => {
    const response = await axios.put(`${base_url}/api/product/wishlist`, { prodId }, config)
    if (response.data) {
        return response.data
    }
}

export const productService = {
    getProducts,
    addToWishlist,
    getSingleProducts
}