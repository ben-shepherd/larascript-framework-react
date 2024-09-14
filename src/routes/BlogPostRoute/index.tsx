import Header from '../../components/Header'
import BlogPost from '../../components/sections/Blog/components/BlogPost'
import blogsConfig from '../../config/blogsConfig'
import config from '../../config/config'

const BlogPostRoute = () => {

  const slug = window.location.pathname
  const post = blogsConfig.find((post) => post.link === slug)

  if(typeof post === 'undefined') {
    window.location.href = '/blog'
    return null;
  }

  return (
    <div className='blog_theme'>
      <Header options={{
            ...config.headers['blog'],
            buttons: [
              {
                text: 'Go Back',
                to: '/blog',
                target: '_self',
              }
            ]
        }} />

      <BlogPost post={post} />
    </div>
  )
}

export default BlogPostRoute
