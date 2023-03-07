import React from 'react';
import { Divider, List, ListItem, ListItemAvatar} from "@mui/material";
import s from './mainList.module.css'
import {BlogsResponseType, BlogType} from "../../../../api/BlogsApi";

import {useNavigate} from "react-router-dom";
import icon1 from '../../../../assets/img/icon1.svg'
type MainSelect = {
    items: BlogType[]
    blogs: BlogsResponseType
    next: number
    addBlog: ()=>void
}
export const MainList: React.FC<MainSelect> = ({items, blogs, next, addBlog}) => {
    const navigate = useNavigate()
    const onClickHandler=(id: string)=>{
        navigate(`/blog/${id}`)
    }
    const add = ()=>{
        addBlog()
    }
    return (
        <List sx={{width: '100%'  }} >
            {items?.map(el =>
                <>
                <ListItem alignItems="flex-start" key={el.id} >
                    <ListItemAvatar>
                        <div className={s.avatar}><img className={s.img} src={icon1}/></div>
                    </ListItemAvatar>
                    <div className={s.div}>
                        <div className={s.blogName} onClick={()=>onClickHandler(el.id)} >{el.name}</div>
                        <div className={s.website}>Website:<a className={s.link} href={el.websiteUrl}>{el.websiteUrl}</a></div>
                        <div className={s.description}>{el.description}</div>
                    </div>
                </ListItem>
                    <Divider variant="fullWidth"/>
                </>)}
            {next< blogs.totalCount && <button onClick={add}>добавить блогов</button>}
        </List>
    );
};

