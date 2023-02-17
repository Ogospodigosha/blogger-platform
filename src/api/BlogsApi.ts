import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://blog-platforma-api.vercel.app/api',
    withCredentials: true,
})

export const BlogsApi = {
    getBlogs(){
        return axios.get<BlogsResponseType>('blogs')
    }
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