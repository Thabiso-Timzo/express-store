import axios from "axios";

import { base_url, config } from "../../utils/axiosConfig";

// Register
const register = async (userData) => {
    const response = await axios.post(`${base_url}/api/user/register`, userData)
    if (response.data) {
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data))
        }
        return response.data
    }
}

// Login
const login = async (userData) => {
    const response = await axios.post(`${base_url}/api/user/login`, userData)
    if (response.data) {
        return response.data
    }
}

// Get user wishlist
const getUserWishList = async () => {
    const response = await axios.get(`${base_url}/api/user/wishlist`, config)
    if (response.data) {
        return response.data
    }
}

// Add to cart
const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}/api/user/cart`, cartData, config)
    if (response.data) {
        return response.data
    }
}

// Get cart
const getCart = async () => {
    const response = await axios.get(`${base_url}/api/user/cart`, config)
    if (response.data) {
        return response.data
    }
}

export const authService = {
    register,
    login,
    getUserWishList,
    addToCart,
    getCart
}