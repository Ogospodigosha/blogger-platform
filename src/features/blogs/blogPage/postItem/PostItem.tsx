import React from 'react';
import s from "../blogPage.module.css";

type PropsType = {
    title: string
    shortDescription: string
    createdAt: string
    convertDataFormat: (value: string)=> string
}

export const PostItem:React.FC<PropsType> = ({title, createdAt, shortDescription, convertDataFormat}) => {
    return (
        <>
            <div className={s.postImg}></div>
            <div className={s.title}>{title}</div>
            <div className={s.shortDescription}>{shortDescription}</div>
            <div className={s.postDate}>{createdAt!== undefined && convertDataFormat(createdAt)}</div>
        </>
    );
};

