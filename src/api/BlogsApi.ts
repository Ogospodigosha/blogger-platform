import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://blogs-nest-torm.vercel.app/',
    withCredentials: true,
})

export const BlogsApi = {
    getBlogs(params:ParamsForGetBlogs){
        return instance.get<BlogsResponseType>('blogs', {
            params: {...params}
        })
    },
    getBlog(id: string){
        return instance.get(`blogs/${id}`)
    }
}
export type ParamsForGetBlogs = {
    pageNumber?: number
    pageSize?: number
}

export type BlogType = {
    id: string
    name: string
    description: string
    websiteUrl: string
    createdAt: string
    isMembership: boolean
}
export type BlogsResponseType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: Array<BlogType>
}