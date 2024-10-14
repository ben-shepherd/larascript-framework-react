import blogsConfig from "../../../config/blogsConfig";
import { IBlogPost } from "../../../interfaces/IBlog";
import BlogPreview from "./components/BlogPreview";
import './styles.scss';

type Props = {
    posts?: IBlogPost[]
}

const Blog = ({ posts = blogsConfig }: Props) => {

    const orderedBlogPosts = [...posts].reverse();

    return (
        <section id="blog_container" className="blog_theme">
            <div className="blog_container_title flex justify-center mt-10 text-xl">
                <h1>Developer Blog</h1>
            </div>
            <div className="flex justify-center">
                <div className="blog_container_posts py-10 w-full px-5 lg:px-0 md:w-4/5 lg:w-3/5 xl:w-2/5">
                    {orderedBlogPosts.map((post) => (
                        <BlogPreview key={post.title} {...post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog