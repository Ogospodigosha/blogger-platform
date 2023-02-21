import React, {useEffect, useState} from 'react';
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
    const [date, setDate] = useState(blog.createdAt)
    const {blogId} = useParams()
    const convertDataFormat = (value: string) => {
        return new Intl.DateTimeFormat('ru-RU').format(new Date(value))
    }

    useEffect(() => {
        if (blogId) {
          fetchBlog({id:blogId})
        }

    }, [blogId])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh", marginTop: '29px'}}>
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
                <div className={s.flex}>
                    <WestIcon className={s.colorIcon}/>
                    <div className={s.margin}>Back to blogs</div>
                </div>
            </NavLink>
            <div style={{width: '100%', height: '312px', backgroundColor: 'white', marginBottom: '28px'}}></div>
            <div style={{display: 'flex'}}>
                <div className={s.img}></div>
                <div>
                    <div className={s.name}>{blog.name}</div>
                    <div className={s.date}><span className={s.spanDate}>blog creation date:</span>{blog.createdAt}</div>
                    <div className={s.website}>Website:<a className={s.url} href={blog.websiteUrl}>{blog.websiteUrl}</a></div>
                    <div className={s.description}>{blog.description}</div>
                </div>

            </div>
        </Box>
    );
};

