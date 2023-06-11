import axios from "axios";

import { base_url } from "../../utils/axiosConfig";

// Get all blogs
const getBlogs = async () => {
    const response = await axios.get(`${base_url}/api/blog/`)
    if (response.data) {
        return response.data
    }
}

// Get all a blog
const getBlog = async (id) => {
    const response = await axios.get(`${base_url}/api/blog/${id}`)
    if (response.data) {
        return response.data
    }
}

export const blogService = {
    getBlogs,
    getBlog
}