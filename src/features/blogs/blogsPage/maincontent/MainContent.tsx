import React, {useEffect,  useState} from 'react';
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
import { BlogType} from "../../../../api/BlogsApi";


export const MainContent = () => {
    debugger
    const [searchParams, setSearchParams] = useSearchParams()
    const blogs = useSelector(BlogsSelector.selectBlogs)
    const {fetchBlogs} = useActions(AsyncBlogsActions)
    const [currentBlog, setCurrentBlog] = useState<BlogType[]>([])
    let size = 15
        const [next, setNext] = useState(Number(searchParams.get('pageSize')) || size)
    const actualBlogsParams = getBlogsSearchParams(searchParams)
    useEffect(()=>{
        setSearchParams({pageSize: String(next)})
        getBlogsSearchParams(searchParams)
    },[])
    useEffect(()=>{
        debugger
        if (actualBlogsParams.pageSize === undefined) {
            return
        }
           fetchBlogs(actualBlogsParams)
        if (blogs) {
            setCurrentBlog(blogs.items)
        }
    },[searchParams.get('pageSize')])



    const addBlog = ()=>{
       size = size +15
        setNext(size)
        setSearchParams({
            ...Object.fromEntries(searchParams),
            pageSize: String(size),
        })

    }
    console.log(blogs.items)
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}}>
            <Toolbar/>
            <div className={s.header}>Blogs</div>
            <Divider sx={{marginBottom: '23px'}}/>
            <div className={s.flex}>
                <Search/>
                <MainSelect/>
            </div>
            <MainList items={blogs.items} blogs={blogs} next={next} addBlog={addBlog}/>
        </Box>
    );
};

