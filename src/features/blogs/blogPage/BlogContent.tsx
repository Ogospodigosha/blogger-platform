import React, {useEffect} from 'react';
import s from './blogPage.module.css'
import {Box, Breadcrumbs, Divider, Link, Toolbar} from '@mui/material';
import {NavLink, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import WestIcon from '@mui/icons-material/West';
import {AsyncBlogActions, BlogsSelector} from "../index";
import {useActions} from "../../../utils/useAction";

export const BlogContent = () => {
    const {fetchBlog} = useActions(AsyncBlogActions)
    const blog = useSelector(BlogsSelector.selectBlog)
    const {blogId} = useParams()
    useEffect(() => {
        if (blogId) {
          fetchBlog({id:blogId})
        }
    }, [blogId])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#DEDBDC", minHeight: "100vh", marginTop: '29px'}}>
            <Toolbar/>
            <Breadcrumbs separator="⏵" aria-label="breadcrumb">
                <Link underline="none" color="black" href="/" className={s.header} >
                    Blogs
                </Link>
                <Link underline="none" color="black" className={s.nameBlog}>
                    {blog.name}
                </Link>
            </Breadcrumbs>
            <Divider sx={{marginBottom:'35px', marginTop: '7px'}}/>
            <NavLink to={'/'} className={s.link}>
                <div style={{display:'flex', alignItems: 'center'}}>
                    <WestIcon style={{color: 'black'}}/>
                    <div style={{marginLeft: '13px'}}>Back to blogs</div>
                </div>
            </NavLink>
        </Box>
    );
};

