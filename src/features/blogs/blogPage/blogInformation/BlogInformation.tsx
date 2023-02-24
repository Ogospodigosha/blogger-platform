import React, { useState } from 'react';
import s from "../blogPage.module.css";
import {BlogsSelector} from "../../index";
import {useSelector} from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {convertDataFormat} from "../../../../utils/convertDataFormat";



export const BlogInformation = () => {
    const blog = useSelector(BlogsSelector.selectBlog)
    const [showMore, setShowMore] = useState(false);
    const clickHandler = () =>{
        setShowMore(!showMore)
    }
    return (
        <div style={{display: 'flex'}}>
            <div className={s.img}></div>
            <div style={{marginBottom:'23px'}}>
                <div className={s.name}>{blog.name}</div>
                <div className={s.date}><span className={s.spanDate}>blog creation date:</span>{blog.createdAt !== undefined ? convertDataFormat(blog.createdAt): '' }</div>
                <div className={s.website}>Website:<a className={s.url} href={blog.websiteUrl}>{blog.websiteUrl}</a></div>
                <div className={s.description}>{showMore ? blog.description :`${blog.description && blog.description.substring(0, 200)}...`}</div>
                {blog.description && blog.description.length > 130 && <div className={s.btn} onClick={clickHandler}>
                    <div>{showMore ? "Hide" : "Show more"}</div>
                    {showMore ?<ExpandLessIcon/>: <ExpandMoreIcon/>}
                </div>}
            </div>
        </div>
    );
};

