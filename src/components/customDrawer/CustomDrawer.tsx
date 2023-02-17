import React, {useState} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import ListItemText from "@mui/material/ListItemText";
import { Drawer } from '@mui/material';
import {useNavigate} from "react-router-dom";

export const CustomDrawer = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate()
    const drawerWidth = 252;
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
        text: string
    ) => {
        setSelectedIndex(index);
        if (text === 'Blogs') {
            navigate('/blogs')
        } else if (text === 'Posts') {
            navigate('/posts')
        }
    };
    return (
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
                                onClick={(event) => handleListItemClick(event, text === 'Blogs' ? 1 : 2, text)}
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
    );
};

