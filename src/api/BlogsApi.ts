import axios from "axios";

const instance = axios.create ({
    baseURL: "https://blog-platforma-api.vercel.app/api/"
})
export const BlogsApi = {
    getBlogs(){
        return instance.get('blogs')
    }
}