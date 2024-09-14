import { Link } from "react-router-dom";
import { IBlog } from "../../../../interfaces/IBlog";
import AuthorLink from "../../../AuthorLink";
import DateText from "../../../DateText";

const BlogPreview = (options: IBlog) => {
    const { title, subTitle, author, updatedAt, imageUrl, link } = options;

    return (
        <div className="blog_preview">
            <h1 className="blog_preview__title">
                <Link to={link} target="_self">
                    {title}
                </Link>
            </h1>
            <p className="blog_preview__subtitle mt-3">{subTitle}</p>
            <Link to={link}>
                <div className="blog_preview__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            </Link>
            <div className="blog_preview__author">
                <div className="blog_preview_author__image" style={{ backgroundImage: "url('/images/author.jpg')"}}></div>
                <div className="blog_preview__author__posted_by">Posted by</div>
                <AuthorLink className="blog_preview__author__name" author={author} />
                <DateText date={updatedAt} className="blog_preview__author__updated_at" />
            </div>
        </div>
    )
}

export default BlogPreview