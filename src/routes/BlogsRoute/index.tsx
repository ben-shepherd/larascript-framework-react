import Header from '../../components/Header'
import Blog from '../../components/sections/Blog'
import blogsConfig from '../../config/blogsConfig'
import config from '../../config/config'

const BlogsRoute = () => {

  return (
    <>
      <Header options={config.headers['blog']} />

      <Blog posts={blogsConfig} />
    </>
  )
}

export default BlogsRoute
