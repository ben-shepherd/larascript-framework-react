import { useMetaTags } from 'react-metatags-hook'
import Header from '../../components/Header'
import blogsConfig from '../../config/blogsConfig'
import config from '../../config/config'
import generateFacebookMetaTags from '../../utils/meta/generateFacebookMetaTags'
import generateOpenGraphMetaTags from '../../utils/meta/generateOpenGraphMetaTags'
import withSitename from '../../utils/meta/withSitename'

const BlogPostRoute = () => {

  const slug = window.location.pathname
  const post = blogsConfig.find((post) => post.link === slug)

  const title = withSitename(post?.title ?? 'Developer Blog')
  const content = post?.content

  useMetaTags({
    ...(config.meta ?? {}),
    title,
    description: 'Insights, updates, and tips for Larascript Node developers',
    openGraph: generateOpenGraphMetaTags({
      title,
      site_name: config.siteName,
      image: post?.imageUrl ?? `${config.websiteUrl}/images/stock/coding-1841550_1280.jpg`,
    }),
    metas: [
      ...generateFacebookMetaTags({
        title,
        description: 'Insights, updates, and tips for Larascript Node developers',
        image: post?.imageUrl ?? `${config.websiteUrl}/images/stock/coding-1841550_1280.jpg`,
        type: 'website',
      }),
    ]
  }, [window.location.href, post])

  if(typeof post === 'undefined' || !content) {
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


      {content({ post })}

    </div>
  )
}

export default BlogPostRoute
