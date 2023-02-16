import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import {useState} from "react";


const drawerWidth = 252;

export function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const changeButtonStyle = () => {
    }
    console.log(selectedIndex)
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <Box sx={{display: 'flex',}}>
            <CssBaseline/>
            <AppBar position="fixed" color={"default"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" style={{color: 'black'}}>
                        Blogger Platform
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box', border: 'none'}, backgroundColor: "#FCFBFB"
                }}
            >
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <List style={{marginTop: '37px',}}>
                        {['Blogs', 'Posts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={(event) => handleListItemClick(event, text === 'Blogs' ? 1 : 2)}
                                    style={{
                                        borderRight: selectedIndex === 1 && text === 'Blogs' ? '2px solid #F8346B'
                                            : selectedIndex === 2 && text === 'Posts' ? '2px solid #F8346B' : '',
                                        paddingLeft: '64px'
                                    }}
                                >

                                    <ListItemIcon>
                                        {index % 2 === 0 ?
                                            <ListIcon style={{color: selectedIndex === 1 ? "#F8346B" : ''}}/>
                                            : <GridViewIcon style={{color: selectedIndex === 2 ? "#F8346B" : ''}}/>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} style={{
                                        color: selectedIndex === 1 && text === 'Blogs'
                                            ? '#F8346B' : selectedIndex === 2 && text === 'Posts' ? '#F8346B' : ''
                                    }}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#DEDBDC", minHeight: "100vh"}}>
                <Toolbar/>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
        </Box>
    );
}

export default App;