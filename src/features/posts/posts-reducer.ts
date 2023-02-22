import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {PostsApi, PostsResponseType} from "../../api/PostsApi";
import {setAppStatus} from "../../app/app-reducer";


const initialState = {} as PostsResponseType



export const fetchPostsById = createAsyncThunk('posts/fetchPostsById', async (param:{id: string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await PostsApi.getPostsById(param.id)
        dispatch(setAppStatus({status: 'succeeded'}))
        return {posts: res.data}
    } catch (e) {
        return rejectWithValue(null)
    }
})

export const slice = createSlice({
    name:'posts',
    initialState: initialState,
    reducers:{},
    extraReducers: builder=>{
        builder.addCase(fetchPostsById.fulfilled, (state, action)=>{
            return action.payload.posts
        })
    }
})
export const postsReducer = slice.reducer