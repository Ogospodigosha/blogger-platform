import React, {useEffect} from 'react';
import {Box, Breadcrumbs, Divider, Link, Toolbar} from "@mui/material";
import s from './PostContent.module.css'
import {useActions} from "../../../../utils/useAction";
import {AsyncPostActions, PostsSelector} from "../../index";
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import WestIcon from "@mui/icons-material/West";
import {convertDataFormat} from "../../../../utils/convertDataFormat";


export const PostContent = () => {
    const post = useSelector(PostsSelector.selectPost)
    const {fetchPost} = useActions(AsyncPostActions)
    const {postId} = useParams()
    console.log(post)
    useEffect(()=>{
        if (postId) {
            fetchPost({id: postId})
        }
    },[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}}>
            <Toolbar/>
            <Breadcrumbs separator="⏵" aria-label="breadcrumb">
                <Link underline="none" color="black" href="/posts" className={s.header} >
                    Posts
                </Link>
                <Link underline="none" color="black" className={s.nameBlog}>
                    {post.blogName}
                </Link>
            </Breadcrumbs>
            <Divider sx={{marginBottom:'35px', marginTop: '7px'}}/>
            <NavLink to={'/posts'} className={s.link} >
                <div className={s.flex}>
                    <WestIcon className={s.colorIcon}/>
                    <div className={s.margin}>Back to posts</div>
                </div>
            </NavLink>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '28px'}}>
                <img style={{width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', marginRight:'12px'}}/>
                <div>
                    <div className={s.blogName}>{post.blogName}</div>
                </div>
            </div>
            <div className={s.title}>{post.title}</div>
            <div className={s.date}>{post.createdAt && convertDataFormat(post.createdAt)}</div>
            <img style={{backgroundColor: 'white', width:'100%', height: '432px', marginBottom: '30px'}}/>
            <div className={s.content}>{post.content}</div>
        </Box>
    );
};

