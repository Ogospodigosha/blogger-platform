import React, {useEffect} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import s from './MainContent.module.css'
import {Divider, LinearProgress} from '@mui/material';
import {Search} from "../search/Search";
import {MainSelect} from "../mainSelect/MainSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../app/store";
import {BlogsResponseType} from "../../api/BlogsApi";
import {fetchBlogs} from "../../features/blogs/blogsPage/blogs-reducer";
import {MainList} from "../mainList/MainList";

export const MainContent = () => {
    const blogs = useSelector<AppRootState, BlogsResponseType>(state => state.blogs)
    const dispatch = useDispatch<any>()
    useEffect(()=>{
        dispatch(fetchBlogs())
    },[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#DEDBDC", minHeight: "100vh"}}>

            <Toolbar/>
            <div className={s.header}>Blogs</div>
            {/*<LinearProgress  color={'secondary'}/>*/}
            <Divider style={{marginBottom: '23px'}}/>
            <div style={{display: 'flex',  alignItems: 'center'}}>
                <Search/>
                <MainSelect/>
            </div>
            <MainList items={blogs.items}/>
        </Box>
    );
};

