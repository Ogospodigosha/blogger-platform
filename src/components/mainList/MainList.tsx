import React, {useEffect} from 'react';
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../app/store";
import {BlogsResponseType, BlogType} from "../../api/BlogsApi";
import {fetchBlogs} from "../../features/blogs/blogsPage/blogs-reducer";
import {Link} from "react-router-dom";
import icon1 from '../../assets/img/icon1.svg'
type MainSelect = {
    items: BlogType[]
}
export const MainList: React.FC<MainSelect> = ({items}) => {
    console.log(items)
    const onClickHandler=()=>{
        console.log(1)
    }
    return (
        <List sx={{width: '100%'  }} >
            {items?.map(el =>
                <>
                <ListItem alignItems="flex-start" key={el.id} onClick={onClickHandler} >
                    <ListItemAvatar>
                        {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>*/}
                        <div style={{width:'156px', height:'156px', borderRadius:'50%',
                            backgroundColor:'white', marginRight: '12px', color:'#DEDBDC', position: 'relative'}}><img style={{position: 'absolute', left: '63px', top:'65px'}} src={icon1}/></div>
                    </ListItemAvatar>
                    <div style={{marginTop: '15px'}}>
                        <div style={{color: "#1A1718", fontWeight:'600', fontSize:'18px', lineHeight:'24px'}}>{el.name}</div>
                        <div style={{color:"#737067", fontSize:'14px', lineHeight:'24px', marginBottom:'24px'}}>Website:<a style={{color: "#3677F7"}} href={el.websiteUrl}>{el.websiteUrl}</a></div>
                        <div style={{color:"#1A1718",fontSize:'14px', lineHeight:'24px' }}>{el.description}</div>
                    </div>

                    {/*<ListItemText*/}
                    {/*    primary={el.name}*/}
                    {/*    secondary={*/}
                    {/*        <React.Fragment>*/}
                    {/*            <Typography*/}
                    {/*                sx={{display: 'inline'}}*/}
                    {/*                component="span"*/}
                    {/*                variant="body2"*/}
                    {/*                color="text.primary"*/}
                    {/*            >*/}
                    {/*                {el.websiteUrl}*/}
                    {/*            </Typography>*/}
                    {/*            {el.description}*/}
                    {/*        </React.Fragment>*/}
                    {/*    }*/}

                    {/*/>*/}


                </ListItem>
                    <Divider variant="fullWidth"/>
                </>)}

        </List>
    );
};

