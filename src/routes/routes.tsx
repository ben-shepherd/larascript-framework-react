import { Route, Routes } from "react-router-dom"
import Blog from "./Blog"
import Homepage from "./Homepage"
const RoutesComponent = () => {
    return (
        <Routes>
            <Route {...{ exact: true, path: "/", Component: Homepage }} />
            <Route path="/blog" Component={Blog} />
        </Routes>
    )
}

export default RoutesComponent