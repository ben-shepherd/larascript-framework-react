import { Route, Routes } from "react-router-dom"
import blogsConfig from "../config/blogsConfig"
import { IBlog } from "../interfaces/IBlog"
import BlogPostRoute from "./BlogPostRoute"
import BlogsRoute from "./BlogsRoute"
import Homepage from "./HomepageRoute"
const RoutesComponent = () => {
    return (
        <Routes>
            <Route {...{ exact: true, path: "/", Component: Homepage }} />
            <Route path="/blog" Component={BlogsRoute} />

            {[...blogsConfig].reverse().map((post: IBlog) => {
                return <Route {...{ 
                    exact: true,
                    path: post.link,
                    Component: BlogPostRoute
                }} />
            })}
        </Routes>
    )
}

export default RoutesComponent