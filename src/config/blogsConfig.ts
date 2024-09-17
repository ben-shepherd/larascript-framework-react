import BuildBlogBackendApi from "../components/sections/Blog/Posts/01/BuildBlogBackendApi"
import MyFirstBlog from "../components/sections/Blog/Posts/01/MyFirstBlog"
import { IBlog } from "../interfaces/IBlog"
import config from "./config"

const blogsConfig: IBlog[] = [
    {
        title: "From TypeScript Novice to Framework Creator: A Developer's Journey",
        subTitle: null,
        content: MyFirstBlog,
        author: "Benjamin S",
        updatedAt: new Date("2024-09-15T12:00:00.000Z"),
        imageUrl: `${config.websiteUrl}/images/stock/coding-1841550_1280.jpg`,
        link: "/blog/15-09-2024-novice-typescript-to-framework"
    },
    {
        title: "Creating a Blog API with Larascript: A Tutorial for Developers",
        subTitle: null,
        content: BuildBlogBackendApi,
        author: "Benjamin S",
        updatedAt: new Date("2024-09-17T12:00:00.000Z"),
        imageUrl: `${config.websiteUrl}/images/stock/laptop-1842297_1280.jpg`,
        link: "/blog/17-09-2024-creating-blog-api-with-larascript"
    }
]

export default blogsConfig