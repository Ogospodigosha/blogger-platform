import axios from "axios"
import {BlogType} from "./BlogsApi";

const instance = axios.create ({
    baseURL: 'https://blogs-nest-torm.vercel.app/',
    withCredentials: true,
})
export const PostsApi = {
    getPostsById(id: string) {
        return instance.get<PostsResponseType>(`blogs/${id}/posts`)
    }
}
export type ExtendedLikesInfoType = {
    likesCount: number
    dislikesCount: number
    myStatus: string
    newestLikes: Array<any>
}
export type PostType = {
    id: string
    shortDescription: string
    title: string
    blogName: string
    createdAt: string
    blogId: string
    content: string
    extendedLikesInfo: ExtendedLikesInfoType
}

export type PostsResponseType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: Array<PostType>
}