import { Dispatch, SetStateAction, useState } from "react";
import { DocumentationItem, LinkHrefAndTitle } from "../types/DocumentationTypes.t";
import ExpandIcon from "./ExpandIcon";

export type ListItemProps = {
    onSelect: Dispatch<SetStateAction<DocumentationItem | null>>
    item: DocumentationItem;
    showExpandIcon?: boolean;
}

const ListItem = ({ item, onSelect, showExpandIcon = false }: ListItemProps) => {
    const { href, title, titleSmall, children = [] } = item;
    const [expanded, setExpanded] = useState<boolean>(showExpandIcon)

    const childrenWithTitleAndHref = children.filter((item: LinkHrefAndTitle) => item.title && item.href)

    console.log(title, children)

    const handleSelect = (item: DocumentationItem) => {
        onSelect(item)
        setExpanded(true)
    }

    return (
        <li className={`list-item ${expanded ? 'expanded' : ''}`}>
            <ExpandIcon expanded={expanded} onClick={() => setExpanded(!expanded)} />

            <a href={href} onClick={() => handleSelect(item)}>{titleSmall ?? title}</a>
            {childrenWithTitleAndHref.length > 0 && (
                <ul className="sub-list" >
                    {childrenWithTitleAndHref.map((item: LinkHrefAndTitle) =>
                        <ListItem key={item.href} item={{ href: item.href, title: item?.titleSmall ?? item.title }} onSelect={onSelect} showExpandIcon={false} />
                    )}
                </ul>
            )}
        </li>
    )
}

export default ListItem