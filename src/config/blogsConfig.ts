import MyFirstBlog from "../components/sections/Blog/Posts/01/MyFirstBlog"
import { IBlog } from "../interfaces/IBlog"

const blogsConfig: IBlog[] = [
    {
        title: "From TypeScript Novice to Framework Creator: A Developer's Journey",
        subTitle: null,
        content: MyFirstBlog,
        author: "Benjamin S",
        updatedAt: new Date("2023-01-01T12:00:00.000Z"), // TODO: UPDATE THIS
        imageUrl: "/images/stock/coding-1841550_1280.jpg",
        link: "/blog/01-my-first-blog-post"
    }
]

export default blogsConfig