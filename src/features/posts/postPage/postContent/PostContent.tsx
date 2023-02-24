import React, {useEffect} from 'react';
import {Box, Breadcrumbs, Divider, Link, Toolbar} from "@mui/material";
import s from "../../postsPage/postsContent/PostsContent.module.css";
import {useActions} from "../../../../utils/useAction";
import {AsyncPostActions, PostsSelector} from "../../index";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";


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
                   blablabla
                </Link>
            </Breadcrumbs>
            <Divider sx={{marginBottom:'35px', marginTop: '7px'}}/>
        </Box>
    );
};

