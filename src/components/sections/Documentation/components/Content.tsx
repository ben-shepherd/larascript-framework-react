import documentationData from '../data/DocumentationData';
import { DocumentationItem } from "../types/DocumentationTypes.t";
import ContentItem from './ContentItem';

const Content = () => {

    return (
        <div className='content-container'>
            {documentationData.map((item: DocumentationItem) => <ContentItem key={item?.href} item={item} />)}
        </div>
    )
}

export default Content