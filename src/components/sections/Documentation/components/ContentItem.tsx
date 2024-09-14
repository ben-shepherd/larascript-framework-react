import { IDocumentationItem } from "../../../../interfaces/IDocumentationItem";

type Props = {
    item: IDocumentationItem | null;
    scrollToTop: () => void;
}

const Content = ({ item, scrollToTop }: Props) => {
    if (!item) return null;

    const { title, href, children = [] } = item

    const getId = (href: string | undefined) => (href ?? '').replace('#', '')

    return (
        <div className="content-item" id={getId(href)}>
            {title && <h1 className="title"><a href={href}>{title}</a></h1>}

            {/* Render Content in children property */}
            {children.map((item: IDocumentationItem) => (
                <div key={`${item?.href}-${item?.title}`} className="documentation-content-child" id={getId(item?.href)}>
                    {item.title && <h2 className="title title-child"><a href={item.href}>{item.title}</a></h2>}
                    <button className={'responsive-scroll-to-top'} onClick={scrollToTop} role="button" aria-label="Scroll to top">
                        Scroll to top
                    </button>

                    {typeof item.content === 'function' ?
                        <div className="content">{item.content()}</div> : 'No yet available'}
                </div>
            ))}
        </div>
    )
}

export default Content