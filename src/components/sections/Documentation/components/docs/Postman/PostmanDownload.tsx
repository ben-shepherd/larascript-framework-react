import { useRef } from 'react';
import './styles.scss';

const PostmanCollection = () => {

    const linkRef: React.MutableRefObject<HTMLAnchorElement | null> = useRef(null);

    const handleClick = () => {
        if(linkRef.current) {
            linkRef.current.click();
        }
    }

    return (
        <article>
            <a href="/data/LarascriptNode.postman_collection.json" download="LarascriptNode.postman_collection.json" className="postman__download__link" ref={linkRef}>Download Postman Collection (Hidden Link)</a>

            <button className="postman__download__button" onClick={handleClick}>Download Postman Collection</button>
        </article>
    );
}

export default PostmanCollection;