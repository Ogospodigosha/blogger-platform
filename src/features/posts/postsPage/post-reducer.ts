import {createSlice} from "@reduxjs/toolkit";

const initialState = {}
export const slice = createSlice({
    name:'post',
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {}
})

export const postReducer = slice.reducer