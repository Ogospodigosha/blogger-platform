import React, {useEffect, useState} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import s from './MainContent.module.css'
import {Divider} from '@mui/material';
import {Search} from "../../../../components/search/Search";
import {useSelector} from "react-redux";
import {MainList} from "../mainList/MainList";
import {AsyncBlogsActions, BlogsSelector} from "../../index";
import {useActions, useAppDispatch} from "../../../../utils/useAction";
import {MainSelect} from "./mainSelect/MainSelect";
import { useSearchParams } from 'react-router-dom';
import {getBlogsSearchParams} from "../../../../utils/getBlogsSearchParams";
import {BlogsResponseType, BlogType} from "../../../../api/BlogsApi";
import {changePageSizeBlogs} from "../blogs-reducer";

export const MainContent = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const blogs = useSelector(BlogsSelector.selectBlogs)
    const {fetchBlogs} = useActions(AsyncBlogsActions)
    let size = 15
        const [next, setNext] = useState(Number(searchParams.get('pageSize')) || size)
    const actualBlogsParams = getBlogsSearchParams(searchParams)

    useEffect(()=>{
            // dispatch(changePageSizeBlogs({size}))
            setSearchParams({pageSize:next.toString()})
            fetchBlogs(getBlogsSearchParams(searchParams))
    },[ next])

    const addBlog = ()=>{
        setNext(next + size)
        setSearchParams({
            ...Object.fromEntries(searchParams),
            pageSize: next.toString(),
        })
    }
    console.log(searchParams.get('pageSize'))
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}}>
            <Toolbar/>
            <button onClick={addBlog}>добавить блогов</button>
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

