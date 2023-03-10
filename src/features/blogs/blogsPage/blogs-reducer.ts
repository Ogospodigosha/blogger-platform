import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BlogsApi, BlogsResponseType, ParamsForGetBlogs} from "../../../api/BlogsApi";
import {setAppStatus} from "../../../app/app-reducer";



const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (paramsForSend: ParamsForGetBlogs, {
    dispatch,
    rejectWithValue
}) => {
    debugger
    dispatch(setAppStatus({status: 'loading'}))
    try {
            const res = await BlogsApi.getBlogs({...paramsForSend})
            dispatch(setAppStatus({status: 'succeeded'}))
            return {blogs: res.data}
    } catch (e) {
        return rejectWithValue(null)
    }
}
)


export const asyncActions = {
    fetchBlogs
}


const initialState = {} as BlogsResponseType
export const slice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {
        changePageSizeBlogs: (state, action: PayloadAction<{size: number}>)=>{
           state.pageSize = action.payload.size
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchBlogs.fulfilled, (state, action)=>{

           return action.payload.blogs
        })
    },
})
export const blogsReducer = slice.reducer
export const {changePageSizeBlogs } = slice.actions