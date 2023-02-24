import React, {useEffect} from 'react';
import s from "../../../blogs/blogsPage/maincontent/MainContent.module.css";

import {Box, Card, CardActionArea, CardContent, CardMedia, Divider, Toolbar, Typography} from '@mui/material';
import {PostsSelect} from "./postsSelect/PostSelect";
import {useSelector} from "react-redux";
import {AsyncPostsActions, PostsSelector} from "../../index";
import {useActions} from "../../../../utils/useAction";
import {convertDataFormat} from "../../../../utils/convertDataFormat";


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
            <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '24px'}}>
                <PostsSelect/>
            </div>
            {
                posts.items &&  posts.items.map((el)=>
                    <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image="/"
                        // alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {el.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {el.shortDescription}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {el.createdAt !== undefined && convertDataFormat(el.createdAt)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    </Card>)
            }
        </Box>
    );
};

