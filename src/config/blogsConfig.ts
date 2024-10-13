import MyFirstBlog from "../components/sections/Blog/Posts/01/MyFirstBlog"
import BetRelease110Post from "../components/sections/Blog/Posts/beta-release-1.1.0/BlogPost"
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