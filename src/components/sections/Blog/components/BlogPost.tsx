import { IBlog } from "../../../../interfaces/IBlog"
import AuthorLink from "../../../AuthorLink"
import DateText from "../../../DateText"

type Props = {
    post: IBlog
}

const BlogPost = ({ post }: Props) => {
    const { title, subTitle, author, updatedAt, imageUrl, content } = post

    return (
        <section id="blog_posts_container" className="blog_text_colors flex justify-center mt-0 lg:mt-10">
            <div className="blog_posts_container py-10 w-full px-5 lg:px-0 md:w-4/5 lg:w-3/5 xl:w-2/5">

                <div className="text-center">
                    <div className="blog_posts_container__title">
                        <h1>{title}</h1>
                    </div>
                    <div className="blog_posts_container__sub_title">
                        <h2>{subTitle}</h2>
                    </div>
                </div>
                <div className="blog_posts_container__author_container flex justify-center">
                    <div className="blog_posts_container__author_image" style={{ backgroundImage: "url('/images/author.jpg')" }}></div>
                    <div className="blog_posts_container__author">
                        <AuthorLink className="blog_posts_container__author_name" author={author} />
                        {`, `}
                        <DateText date={updatedAt} className="blog_preview__author__updated_at" />
                    </div>
                </div>
                
                

                <div className="flex justify-center">
                    <div className="blog_posts_container__image w-full lg:w-3/5" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                </div>

                <hr className="blog_posts_container__divider" />
                <div className="blog_posts_container__content">
                    {content()}
                </div>
            </div>
        </section>
    )
}

export default BlogPost