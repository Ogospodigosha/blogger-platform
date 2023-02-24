import React from 'react';
import {PostType} from "../../../../../api/PostsApi";
import {convertDataFormat} from "../../../../../utils/convertDataFormat";
import s from './Post.module.css'

type PropsType = {
    el: PostType
}
export const Post:React.FC<PropsType> = ({el}) => {
    return (
        <div className={s.card}>
            <img className={s.img}/>
            <div className={s.flex}>
                <img className={s.smallImg}/>
                <div>
                    <div className={s.title}>
                        {el.title}
                    </div>
                    <div className={s.shortDescription}>
                        {el.shortDescription}
                    </div>
                    <div className={s.data}>
                        {el.createdAt !== undefined && convertDataFormat(el.createdAt)}
                    </div>
                </div>
            </div>
        </div>
    );
};

