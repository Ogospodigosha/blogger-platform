import React, {useEffect} from 'react';


import {Box, Divider, Toolbar} from '@mui/material';
import {PostsSelect} from "./postsSelect/PostSelect";
import {useSelector} from "react-redux";
import {AsyncPostsActions, PostsSelector} from "../../index";
import {useActions} from "../../../../utils/useAction";
import {Post} from "./post/Post";
import s from './PostsContent.module.css'

export const PostsContent = () => {
    const posts = useSelector(PostsSelector.selectPosts)
    console.log(posts)
    const {fetchAllPosts} = useActions(AsyncPostsActions)
    useEffect(() => {
        fetchAllPosts()
    }, [])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#FAF7F8", minHeight: "100vh"}}>
            <Toolbar/>
            <div className={s.header}>Posts</div>
            <Divider sx={{marginBottom: '29px'}}/>
            <div className={s.select}>
                <PostsSelect/>
            </div>
            <div className={s.flex}>
                {
                    posts.items && posts.items.map((el) => <Post el={el} key={el.id}/>)
                }
            </div>
        </Box>
    );
};

