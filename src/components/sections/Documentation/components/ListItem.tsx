import { Dispatch, SetStateAction, useState } from "react";
import { DocumentationItem, LinkHrefAndTitle } from "../types/DocumentationTypes.t";
import DefaultIcon from "./DefaultIcon";
import ExpandIcon from "./ExpandIcon";

export type ListItemProps = {
    onSelect: Dispatch<SetStateAction<DocumentationItem | null>>
    item: DocumentationItem;
    showExpandIcon?: boolean;
}

const ListItem = ({ item, onSelect, showExpandIcon = false }: ListItemProps) => {
    const { href, title, titleSmall, children = [] } = item;
    const [expanded, setExpanded] = useState<boolean>(showExpandIcon)

    const hasChildrenWithTitles = children.filter((child: LinkHrefAndTitle) => child?.title).length > 0
    const expandIconIsVisible = hasChildrenWithTitles;

    const handleSelect = (item: DocumentationItem) => {
        onSelect(item)
        setExpanded(true)
    }

    return (
        <li className={`list-item ${expanded ? 'expanded' : ''}`}>
            <DefaultIcon visible={!expandIconIsVisible} />
            <ExpandIcon visible={expandIconIsVisible} expanded={expanded} onClick={() => setExpanded(!expanded)} />

            <a href={href} onClick={() => handleSelect(item)}>{titleSmall ?? title}</a>
            {children.length > 0 && (
                <ul className="sub-list" >
                    {children.map((item: LinkHrefAndTitle) => 
                        <ListItem key={item.href} item={{ href: item.href, title: item?.titleSmall ?? item.title }} onSelect={onSelect} showExpandIcon={false} />
                    )}
                </ul>
            )}
        </li>
    )
}

export default ListItem