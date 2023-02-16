import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import {CustomDrawer} from "../customDrawer/CustomDrawer";
import {MainContent} from "../maincontent/MainContent";
import Box from "@mui/material/Box";

export const BlogsPage = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <CustomDrawer/>
            <MainContent/>
        </Box>
    );
};

