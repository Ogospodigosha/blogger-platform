import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BlogsApi, BlogsResponseType, BlogType} from "../../../api/BlogsApi";
import {ResponseType} from "axios";




export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (param, {
    dispatch,
    rejectWithValue
}) => {
    // dispatch(SetAppStatus({status: 'loading'}))
    try {
        const res = await BlogsApi.getBlogs()
        // dispatch(SetAppStatus({status: 'succeeded'}))
        return {blogs: res.data}
    } catch (e) {
        return rejectWithValue(null)
    }
})

const initialState = {} as BlogsResponseType
export const slice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBlogs.fulfilled, (state, action)=>{
           return action.payload.blogs
        })
    },
})
export const blogsReducer = slice.reducer
