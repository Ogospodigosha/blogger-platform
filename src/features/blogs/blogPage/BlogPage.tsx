import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import {CustomDrawer} from "../../../components/customDrawer/CustomDrawer";
import {BlogContent} from "./BlogContent";


export const BlogPage = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <CustomDrawer/>
            <BlogContent/>
        </Box>
    );
};

