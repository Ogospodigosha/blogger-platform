import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {CustomDrawer} from "./components/customDrawer/CustomDrawer";
import {MainContent} from "./components/maincontent/MainContent";




export function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" color={"default"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" style={{color: 'black', cursor: 'pointer'}}>
                        Blogger Platform
                    </Typography>
                </Toolbar>
            </AppBar>
            <CustomDrawer/>
            <MainContent/>
        </Box>
    );
}

export default App;