import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {blogsReducer} from "../features/blogs/blogsPage/blogs-reducer";
import {appReducer} from "./app-reducer";
import {blogReducer} from "../features/blogs/blogPage/blog-reducer";
import {postsReducer} from "../features/posts/posts-reducer";
import {postReducer} from "../features/posts/postPage/postContent/post-reducer";


const rootReducer = combineReducers({
    blogs: blogsReducer,
    app: appReducer,
    blog: blogReducer,
    posts: postsReducer,
    post: postReducer
})
export type RootReducerType = typeof rootReducer
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppRootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store