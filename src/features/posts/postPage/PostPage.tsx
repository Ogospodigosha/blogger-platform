import React from 'react';
import {Box, CssBaseline} from "@mui/material";
import {CustomDrawer} from "../../../components/customDrawer/CustomDrawer";
import {PostContent} from "./postContent/PostContent";


export const PostPage = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <CustomDrawer/>
            <PostContent/>
        </Box>
    );
};

