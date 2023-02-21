import React, {useEffect} from 'react';
import s from "../../../components/maincontent/MainContent.module.css";
import {Box, Breadcrumbs, Divider, Link, Toolbar} from '@mui/material';
import {useParams} from 'react-router-dom';
import {AppRootState} from "../../../app/store";
import {BlogType} from "../../../api/BlogsApi";
import {useDispatch, useSelector} from 'react-redux';
import {fetchBlog} from "./blog-reducer";

export const BlogContent = () => {
    const dispatch = useDispatch<any>()
    const blog = useSelector<AppRootState, BlogType>(state => state.blog)
    console.log('blog', blog)
    const {blogId} = useParams()



    useEffect(() => {
        if (blogId) {
          dispatch(fetchBlog({id:blogId}))
        }
    }, [blogId])


    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#DEDBDC", minHeight: "100vh"}}>
            <Toolbar/>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link underline="none" color="black" href="/" className={s.header}>
                    Blogs
                </Link>
                <Link underline="none" color="black" style={{color: '#1A1718', fontSize: '12px', lineHeight: '16px'}}>
                    {blog.name}
                </Link>

            </Breadcrumbs>
            <Divider style={{marginBottom: '23px'}}/>
        </Box>
    );
};

