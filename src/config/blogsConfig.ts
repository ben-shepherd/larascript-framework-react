import MyFirstBlog from "../components/sections/Blog/Posts/01/MyFirstBlog";
import BetRelease110Post from "../components/sections/Blog/Posts/beta-release-1.1.0/BetRelease110Post";
import { IBlogContent, IBlogPost } from "../interfaces/IBlog";
import config from "./config";

type IBlogWithContent = IBlogPost & IBlogContent;

const blogsConfig: IBlogWithContent[] = [
    {
        title: "From TypeScript Novice to Framework Creator: A Developer's Journey",
        subTitle: null,
        content: MyFirstBlog,
        author: "Benjamin S",
        updatedAt: new Date("2024-09-15T12:00:00.000Z"),
        imageUrl: `${config.websiteUrl}/images/stock/coding-1841550_1280.jpg`,
        link: "/blog/15-09-2024-novice-typescript-to-framework"
    },
    // {
    //     title: "Creating a Blog API with Larascript: A Tutorial for Developers",
    //     subTitle: null,
    //     content: BuildBlogBackendApi,
    //     author: "Benjamin S",
    //     updatedAt: new Date("2024-09-17T12:00:00.000Z"),
    //     imageUrl: `${config.websiteUrl}/images/stock/laptop-1842297_1280.jpg`,
    //     link: "/blog/17-09-2024-creating-blog-api-with-larascript"
    // },
    {
        title: "What's new in Larascript Framework Beta?",
        subTitle: null,
        content: BetRelease110Post,
        author: "Benjamin S",
        updatedAt: new Date("2024-10-13T12:00:00.000Z"),
        imageUrl: `${config.websiteUrl}/images/stock/frequency-wave-7776034_1280.jpg`,
        link: "/blog/13-10-2024-whats-new-in-larascript-framework-1.1.0"
    }
]

export default blogsConfig