import documentationConfig from '../../../../config/documentationConfig';
import { IDocumentationItem } from "../../../../interfaces/IDocumentationItem";
import ContentItem from './ContentItem';

type Props = {
    scrollToTop: () => void;
}

const Content = ({ scrollToTop }: Props) => {

    return (
        <div className='content-container w-full'>
            {documentationConfig.map((item: IDocumentationItem, index: number) => (
                <div key={item?.href}>
                    <ContentItem key={item?.href} item={item} scrollToTop={scrollToTop} />
                
                    {index < documentationConfig.length - 1 && <div className='divider'></div>}
                </div>
            ))}
        </div>
    )
}

export default Content