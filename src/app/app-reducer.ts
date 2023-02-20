import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as RequestErrorType
}

const slice = createSlice({
    name: 'app',
    initialState:initialState,
    reducers: {
        setAppStatus(state, action: PayloadAction<{status: RequestStatusType}>){
            state.status = action.payload.status
        },
        setErrorStatus(state, action: PayloadAction<{ error: RequestErrorType }>) {
            state.error = action.payload.error
        }
    }
})

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type RequestErrorType = null | string

export const appReducer = slice.reducer
export const {setAppStatus, setErrorStatus}= slice.actions