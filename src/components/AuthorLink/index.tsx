import { Link } from "react-router-dom";
import config from "../../config/config";

type Props = {
    author?: string;
    link?: string;
    className?: string;
    target?: string;
}

const AuthorLink = ({ author = config.author, link = config.githubProfile, className =  '', target = '_blank' }: Props) => {
    return (
        <div className={`author_link_container ${className}`}>
            <Link to={link} target={target}>
                {author}
            </Link>
        </div>
    )
}

export default AuthorLink