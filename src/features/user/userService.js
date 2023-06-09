import axios from "axios";

import { base_url } from "../../utils/axiosConfig";

// Register
const register = async (userData) => {
    const response = await axios.post(`${base_url}/api/user/register`, userData)
    if (response.data) {
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

export const authService = {
    register,
    login
}