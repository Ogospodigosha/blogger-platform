import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import {CustomDrawer} from "../../../components/customDrawer/CustomDrawer";
import {MainContent} from "../../../components/maincontent/MainContent";
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

