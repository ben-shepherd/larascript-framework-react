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
    <>
      <Header options={{
            ...config.headers['blog'],
            buttons: [
              ...config.headers['blog'].buttons.filter((button) => button.text !== 'Go Back'),
              {
                text: 'Go Back',
                to: '/blog',
                target: '_self',
              }
            ]
        }} />

      <BlogPost post={post} />
    </>
  )
}

export default BlogPostRoute
