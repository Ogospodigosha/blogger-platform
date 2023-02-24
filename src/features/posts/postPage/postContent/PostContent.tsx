import React from 'react';
import {Box, Breadcrumbs, Divider, Link, Toolbar} from "@mui/material";
import s from "../../postsPage/postsContent/PostsContent.module.css";


export const PostContent = () => {
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

