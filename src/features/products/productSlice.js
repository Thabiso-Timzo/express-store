import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { toast } from 'react-toastify'

import { productService } from './productService';

// Get all products slice
export const GetAllProducts = createAsyncThunk("product/get", async (thunkAPI) => {
    try {
        return await productService.getProducts();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

// Get single products slice
export const GetSingleProducts = createAsyncThunk("product/getProduct", async (id, thunkAPI) => {
    try {
        return await productService.getSingleProducts(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

// Add to wish list slice
export const addToWishlist = createAsyncThunk("product/wishlist", async (prodId, thunkAPI) => {
    try {
        return await productService.addToWishlist(prodId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const productState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}; 

export const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(GetAllProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(GetAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        })
        .addCase(GetAllProducts.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(addToWishlist.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addToWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addToWishlist = action.payload;
            state.message = "Product added to wishlist."
        })
        .addCase(addToWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(GetSingleProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(GetSingleProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleproduct = action.payload;
            state.message = "Product fetched."
        })
        .addCase(GetSingleProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
});

export default productSlice.reducer;