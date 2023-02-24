import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PostsApi, PostType} from "../../../../api/PostsApi";
import {setAppStatus} from "../../../../app/app-reducer";

const initialState = {} as PostType

const fetchPost = createAsyncThunk('post/fetchPost', async (param:{id: string}, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await PostsApi.getPost(param.id)
        dispatch(setAppStatus({status: 'succeeded'}))
        return {post: res.data}
    } catch (e) {
        return rejectWithValue(null)
    }
})
export const asyncActions = {
    fetchPost
}
export const slice = createSlice({
    name:'post',
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchPost.fulfilled, (state,action)=>{
            return action.payload.post
        })
    }
})

export const postReducer = slice.reducer