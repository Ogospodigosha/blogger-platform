import React, {useEffect} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import s from './MainContent.module.css'
import {Divider} from '@mui/material';
import {Search} from "../search/Search";
import {MainSelect} from "../mainSelect/MainSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../app/store";
import {BlogsResponseType} from "../../api/BlogsApi";
import {fetchBlogs} from "../../features/blogs/blogsPage/blogs-reducer";
export const MainContent = () => {
    const blogs = useSelector<AppRootState, BlogsResponseType>(state => state.blogs)
    const dispatch = useDispatch<any>()
    console.log(blogs.items)
    useEffect(()=>{
        dispatch(fetchBlogs())
    },[])
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3, backgroundColor: "#DEDBDC", minHeight: "100vh"}}>
            <Toolbar/>
            <div className={s.header}>Blogs</div>
            <Divider style={{marginBottom: '23px'}}/>
            <div style={{display: 'flex',  alignItems: 'center'}}>
                <Search/>
                <MainSelect/>
            </div>

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
    );
};

