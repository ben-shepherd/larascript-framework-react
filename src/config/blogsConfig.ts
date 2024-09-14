import MyFirstBlog from "../components/sections/Blog/Posts/01/MyFirstBlog"
import { IBlog } from "../interfaces/IBlog"

const blogsConfig: IBlog[] = [
    {
        title: "Larascript Node - The future of Node.js development",
        subTitle: "Larascript Node is a Node.js framework inspired by Laravel, built with TypeScript.",
        content: MyFirstBlog,
        author: "Benjamin S",
        updatedAt: new Date("2023-01-01T12:00:00.000Z"),
        imageUrl: "https://picsum.photos/800/500",
        link: "/blog/01-my-first-blog-post"
    },
    {
        title: "My second blog post",
        subTitle: "This is a second blog post.",
        content: MyFirstBlog,
        author: "Benjamin S",
        updatedAt: new Date("2023-01-01T12:00:00.000Z"),
        imageUrl: "https://picsum.photos/800/500?v2",
        link: "/blog/02-second-post"
    }
]

export default blogsConfig