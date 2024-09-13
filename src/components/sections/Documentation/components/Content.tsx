import documentationConfig from '../../../../config/documentation';
import { DocumentationItem } from "../types/DocumentationTypes.t";
import ContentItem from './ContentItem';

type Props = {
    scrollToTop: () => void;
}

const Content = ({ scrollToTop }: Props) => {

    return (
        <div className='content-container w-full'>
            {documentationConfig.map((item: DocumentationItem, index: number) => (
                <div key={item?.href}>
                    <ContentItem key={item?.href} item={item} scrollToTop={scrollToTop} />
                
                    {index < documentationConfig.length - 1 && <div className='divider'></div>}
                </div>
            ))}
        </div>
    )
}

export default Content