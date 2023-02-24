import React from 'react';
import s from "../blogPage.module.css";
import {convertDataFormat} from "../../../../utils/convertDataFormat";
import {useNavigate} from "react-router-dom";

type PropsType = {
    title: string
    shortDescription: string
    createdAt: string
    id: string
}

export const PostItem:React.FC<PropsType> = ({title, createdAt, shortDescription, id}) => {
    const navigate = useNavigate()
    const onClickHandler = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <>
            <div className={s.postImg}></div>
            <div className={s.title} onClick={onClickHandler}>{title}</div>
            <div className={s.shortDescription}>{shortDescription}</div>
            <div className={s.postDate}>{createdAt!== undefined && convertDataFormat(createdAt)}</div>
        </>
    );
};

