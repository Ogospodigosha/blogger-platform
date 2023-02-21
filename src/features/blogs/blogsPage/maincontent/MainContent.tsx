import React, {useEffect} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import s from './MainContent.module.css'
import {Divider} from '@mui/material';
import {Search} from "../../../../components/search/Search";
import {MainSelect} from "../../../../components/mainSelect/MainSelect";
import {useSelector} from "react-redux";
import {MainList} from "../mainList/MainList";
import {AsyncBlogsActions, BlogsSelector} from "../../index";
import {useActions} from "../../../../utils/useAction";

export const MainContent = () => {
    const blogs = useSelector(BlogsSelector.selectBlogs)
    const {fetchBlogs} = useActions(AsyncBlogsActions)
    useEffect(()=>{
        fetchBlogs()
    },[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#DEDBDC", minHeight: "100vh"}}>
            <Toolbar/>
            <div className={s.header}>Blogs</div>
            <Divider sx={{marginBottom: '23px'}}/>
            <div className={s.flex}>
                <Search/>
                <MainSelect/>
            </div>
            <MainList items={blogs.items}/>
        </Box>
    );
};

