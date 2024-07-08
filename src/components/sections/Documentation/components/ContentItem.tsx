import { DocumentationItem } from "../types/DocumentationTypes.t";

type Props = {
    item: DocumentationItem | null
}

const Content = ({ item }: Props) => {
    if (!item) return null;

    const { title, href, children = [] } = item

    const getId = (href: string | undefined) => (href ?? '').replace('#', '')

    return (
        <div className="documentation-content" id={getId(href)}>
            {title && <h1 className="title"><a href={href}>{title}</a></h1>}

            {/* Render Content in children property */}
            {children.map((item: DocumentationItem) => (
                <div key={item.href} className="documentation-content-child" id={getId(item?.href)}>
                    {item.title && <h2 className="title title-child"><a href={item.href}>{item.title}</a></h2>}

                    {typeof item.content === 'function' ? <div className="content">{item.content()}</div> : 'No yet available'}
                </div>
            ))}
        </div>
    )
}

export default Content