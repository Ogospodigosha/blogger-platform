import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({

})
export type RootReducerType = typeof rootReducer
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppRootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store