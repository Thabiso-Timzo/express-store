import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { blogService} from './blogService';

// Get all blog slice
export const GetAllblogs = createAsyncThunk("blogs/get", async (thunkAPI) => {
    try {
        return await blogService.getBlogs();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

// Get blog slice
export const Getblog = createAsyncThunk("blog/get", async (id, thunkAPI) => {
    try {
        return await blogService.getBlog(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const blogState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}; 

export const blogSlice = createSlice({
    name: "blog",
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(GetAllblogs.pending, (state) => {
            state.isLoading = true
        })
        .addCase(GetAllblogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.payload;
        })
        .addCase(GetAllblogs.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(Getblog.pending, (state) => {
            state.isLoading = true
        })
        .addCase(Getblog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleBlog = action.payload;
        })
        .addCase(Getblog.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
});

export default blogSlice.reducer;