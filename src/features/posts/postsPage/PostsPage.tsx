import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import {CustomDrawer} from "../../../components/customDrawer/CustomDrawer";
import {PostsContent} from "./postsContent/PostsContent";


export const PostsPage = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <CustomDrawer/>
            <PostsContent/>
        </Box>
    );
};

