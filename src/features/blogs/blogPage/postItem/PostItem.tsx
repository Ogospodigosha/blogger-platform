import React from 'react';
import s from "../blogPage.module.css";
import {convertDataFormat} from "../../../../utils/convertDataFormat";

type PropsType = {
    title: string
    shortDescription: string
    createdAt: string
}

export const PostItem:React.FC<PropsType> = ({title, createdAt, shortDescription}) => {
    return (
        <>
            <div className={s.postImg}></div>
            <div className={s.title}>{title}</div>
            <div className={s.shortDescription}>{shortDescription}</div>
            <div className={s.postDate}>{createdAt!== undefined && convertDataFormat(createdAt)}</div>
        </>
    );
};

