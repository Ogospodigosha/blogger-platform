import { createSlice } from "@reduxjs/toolkit";
import {PostsResponseType} from "../../api/PostsApi";

const initialState = {} as PostsResponseType

export const slice = createSlice({
    name:'posts',
    initialState: initialState,
    reducers:{},
    extraReducers: builder=>{

    }
})
export const postsReducer = slice.reducer