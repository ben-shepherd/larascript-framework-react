import Header from '../../components/Header'
import Blog from '../../components/sections/Blog'
import blogsConfig from '../../config/blogsConfig'
import config from '../../config/config'

const BlogsRoute = () => {

  return (
    <div className='blog_theme'>
      <Header options={{
            ...config.headers['blog'],
            buttons: [
              {
                text: 'Go Back',
                to: '/',
                target: '_self',
              }
            ]
        }} />

      <Blog posts={blogsConfig} />
    </div>
  )
}

export default BlogsRoute
