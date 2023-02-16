import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {CustomDrawer} from "./components/customDrawer/CustomDrawer";
import {MainContent} from "./components/maincontent/MainContent";
import {Navigate, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import {BlogsPage} from "./components/blogsPage/BlogsPage";




export function App() {
    return (<>
            <CssBaseline/>
            <AppBar position="fixed" color={"default"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" style={{color: 'black', cursor: 'pointer'}}>
                        Blogger Platform
                    </Typography>
                </Toolbar>
            </AppBar>
                <Routes>
                    <Route path={'/'} element={<BlogsPage/>}/>
                    <Route path={'/blogs'} element={<BlogsPage/>}/>
                    <Route path={'/posts'} element={<h1 style={{marginLeft: "399px", marginTop: '200px'}}>POSTS</h1>}/>
                    <Route path={'/404'} element={<h1 style={{marginLeft: "399px", marginTop: '200px'}}>404: PAGE NOT FOUND</h1>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                </Routes>
        </>
    );
}

export default App;