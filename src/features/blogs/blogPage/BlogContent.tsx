import React, {useEffect} from 'react';
import s from './blogPage.module.css'
import {Box, Breadcrumbs, Divider, Link, Toolbar} from '@mui/material';
import {NavLink, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import WestIcon from '@mui/icons-material/West';
import {AsyncBlogActions, BlogsSelector} from "../index";
import {useActions, useAppDispatch} from "../../../utils/useAction";

import {PostsResponseType} from "../../../api/PostsApi";
import {fetchPostsById} from "../../posts/posts-reducer";
import {AppRootState} from "../../../app/store";
import {PostItem} from "./postItem/PostItem";
import {BlogInformation} from "./blogInformation/BlogInformation";
export const BlogContent = () => {
    const {fetchBlog} = useActions(AsyncBlogActions)
    const blog = useSelector(BlogsSelector.selectBlog)
    const post = useSelector<AppRootState, PostsResponseType>(state=> state.posts)
    const {blogId} = useParams()
    const dispatch = useAppDispatch()
    const convertDataFormat = (value: string) => {
        return new Intl.DateTimeFormat('ru-RU').format(new Date(value))
    }
    useEffect(() => {
        if (blogId) {
          fetchBlog({id:blogId})
            dispatch(fetchPostsById({id:blogId}))
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
            <BlogInformation convertDataFormat={convertDataFormat}/>
            <Divider variant="fullWidth" sx={{marginBottom:'48px'}}/>
            <div className={s.flexPosts}>
            {post.items && post.items.map((el)=><div style={{marginRight:'20px'}}>
                <PostItem convertDataFormat={convertDataFormat} title={el.title} shortDescription={el.shortDescription} createdAt={el.createdAt} key={el.id} />
            </div>)}
            </div>
        </Box>
    );
};

