import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {BlogsApi, BlogType} from "../../../api/BlogsApi";
import {setAppStatus} from "../../../app/app-reducer";



export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (param:{id: string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await BlogsApi.getBlog(param.id)
        dispatch(setAppStatus({status: 'succeeded'}))
        return {blog: res.data}
    } catch (e) {
        return rejectWithValue(null)
    }
})
const initialState = {} as BlogType

export const slice = createSlice({
    name:'blog',
    initialState: initialState,
    reducers:{},
    extraReducers: builder=>{
        builder.addCase(fetchBlog.fulfilled, (state, action)=>{
            return action.payload.blog
        });
    }
})
export const blogReducer = slice.reducer