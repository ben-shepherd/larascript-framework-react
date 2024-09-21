import { useMetaTags } from 'react-metatags-hook'
import Header from '../../components/Header'
import Blog from '../../components/sections/Blog'
import blogsConfig from '../../config/blogsConfig'
import config from '../../config/config'
import generateFacebookMetaTags from '../../utils/meta/generateFacebookMetaTags'
import generateOpenGraphMetaTags from '../../utils/meta/generateOpenGraphMetaTags'
import withSitename from '../../utils/meta/withSitename'

const BlogsRoute = () => {

  const title = withSitename('Developer Blog')

  useMetaTags({
    ...(config.meta ?? {}),
    title,
    description: 'Insights, updates, and tips for Larascript Framework developers',
    openGraph: generateOpenGraphMetaTags({
      title: 'Developer Blog',
      site_name: config.siteName,
      image: `${config.websiteUrl}/images/stock/coding-1841550_1280.jpg`,
    }),
    metas: [
      ...generateFacebookMetaTags({
        title,
        description: 'Insights, updates, and tips for Larascript Framework developers',
        image: `${config.websiteUrl}/images/stock/coding-1841550_1280.jpg`,
        type: 'website',
      }),
    ]
  }, [window.location.href])

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
