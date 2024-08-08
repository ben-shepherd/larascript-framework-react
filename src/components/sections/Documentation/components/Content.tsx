import documentationData from '../data/DocumentationData';
import { DocumentationItem } from "../types/DocumentationTypes.t";
import ContentItem from './ContentItem';

const Content = () => {

    return (
        <div className='content-container w-full'>
            {documentationData.map((item: DocumentationItem, index: number) => (
                <>
                    <ContentItem key={item?.href} item={item} />
                
                    {index < documentationData.length - 1 && <div className='divider'></div>}
                </>
            ))}
        </div>
    )
}

export default Content