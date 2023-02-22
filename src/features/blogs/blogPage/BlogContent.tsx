import React, {useEffect, useState} from 'react';
import s from './blogPage.module.css'
import {Box, Breadcrumbs, Divider, Link, Toolbar} from '@mui/material';
import {NavLink, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import WestIcon from '@mui/icons-material/West';
import {AsyncBlogActions, BlogsSelector} from "../index";
import {useActions} from "../../../utils/useAction";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {PostsApi} from "../../../api/PostsApi";
export const BlogContent = () => {
    const [showMore, setShowMore] = useState(false);
    const {fetchBlog} = useActions(AsyncBlogActions)
    const blog = useSelector(BlogsSelector.selectBlog)
    const {blogId} = useParams()

    const convertDataFormat = (value: string) => {
        return new Intl.DateTimeFormat('ru-RU').format(new Date(value))
    }
    const clickHandler = () =>{
        setShowMore(!showMore)
    }
    console.log(blog.createdAt)
    useEffect(() => {
        if (blogId) {
          fetchBlog({id:blogId})
            // let a = PostsApi.getPostsById(blogId)
            // console.log(a)
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
                <div style={{marginBottom:'23px'}}>
                    <div className={s.name}>{blog.name}</div>
                    <div className={s.date}><span className={s.spanDate}>blog creation date:</span>{blog.createdAt !== undefined ? convertDataFormat(blog.createdAt): '' }</div>
                    <div className={s.website}>Website:<a className={s.url} href={blog.websiteUrl}>{blog.websiteUrl}</a></div>
                    <div className={s.description}>{showMore ? blog.description :`${blog.description && blog.description.substring(0, 200)}...`}</div>
                    {blog.description && blog.description.length > 130 && <div className={s.btn} onClick={clickHandler}>
                        <div>{showMore ? "Hide" : "Show more"}</div>
                        {showMore ?<ExpandLessIcon/>: <ExpandMoreIcon/>}
                    </div>}
                </div>
            </div>
            <Divider variant="fullWidth"/>
        </Box>
    );
};

