import React, {useEffect} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import s from './MainContent.module.css'
import {Divider} from '@mui/material';
import {Search} from "../../../../components/search/Search";
import {useSelector} from "react-redux";
import {MainList} from "../mainList/MainList";
import {AsyncBlogsActions, BlogsSelector} from "../../index";
import {useActions} from "../../../../utils/useAction";
import {MainSelect} from "./mainSelect/MainSelect";
import { useSearchParams } from 'react-router-dom';
import {getBlogsSearchParams} from "../../../../utils/getBlogsSearchParams";

export const MainContent = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const blogs = useSelector(BlogsSelector.selectBlogs)
    const {fetchBlogs} = useActions(AsyncBlogsActions)
    const actualBlogsParams = getBlogsSearchParams(searchParams)
    useEffect(()=>{
        fetchBlogs(getBlogsSearchParams(searchParams))
    },[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}}>
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

