import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Navigate, Route, Routes} from "react-router-dom";
import {BlogsPage} from "./features/blogs/blogsPage/BlogsPage";
import {useSelector} from "react-redux";
import {AppRootState} from "./app/store";
import {RequestStatusType} from "./app/app-reducer";
import {LinearProgress} from "@mui/material";
import {BlogPage} from "./features/blogs/blogPage/BlogPage";
import {PostsPage} from "./features/posts/postsPage/PostsPage";
import {PostPage} from "./features/posts/postPage/PostPage";



function App() {
    const appStatus = useSelector<AppRootState, RequestStatusType>(state => state.app.status)
    console.log(appStatus)
    return (<>
            {/*<CustomizedSnackbars/>*/}
            <CssBaseline/>
            <AppBar position="fixed" color={"default"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <div style={{height: '2px'}}>
                    {appStatus === "loading" && <LinearProgress color={'secondary'} />}
                </div>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{color: 'black', cursor: 'pointer'}}>
                        Blogger Platform
                    </Typography>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path={'/'} element={<BlogsPage/>}/>
                <Route path={'/blogs'} element={<BlogsPage/>}/>
                <Route path={'/blog/:blogId'} element={<BlogPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/404'}
                       element={<h1 style={{marginLeft: "399px", marginTop: '200px'}}>404: PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                <Route path={'/post/:postId'} element={<PostPage/>}/>
            </Routes>
        </>
    );
}

export default App;