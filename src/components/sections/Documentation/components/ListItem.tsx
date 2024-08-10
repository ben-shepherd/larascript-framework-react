import {Dispatch, SetStateAction, useState} from "react";
import { DocumentationItem, LinkHrefAndTitle } from "../types/DocumentationTypes.t";
import ListItemIcon, {ListItemIconType} from "./ListItemIcon.tsx";

export type ListItemProps = {
    onSelect: Dispatch<SetStateAction<DocumentationItem | null>>
    item: DocumentationItem;
    iconType?: ListItemIconType;
    isChild?: boolean;
}

const ListItem = ({ item, onSelect, iconType = null, isChild = false }: ListItemProps) => {
    const { href, title, titleSmall, children = [] } = item;
    const [expanded, setExpanded] = useState<boolean>(false)

    const childrenWithTitleAndHref = children.filter((item: LinkHrefAndTitle) => item.title && item.href)

    const handleSelect = (item: DocumentationItem) => {
        onSelect(item)
        setExpanded(true)
    }

    const iconProps = {
        expanded: expanded,
        setExpanded: setExpanded,
        onSelect: () => handleSelect(item),
        isChild,
        childrenWithTitleAndHref: childrenWithTitleAndHref,
        iconType,
    }

    return (
        <li className={`list-item ${expanded ? 'expanded' : ''}`}>
            <ListItemIcon {...iconProps} />

            <a href={href} onClick={() => handleSelect(item)}>{titleSmall ?? title}</a>
            {childrenWithTitleAndHref.length > 0 && (
                <ul className="sub-list" >
                    {childrenWithTitleAndHref.map((item: LinkHrefAndTitle) =>
                        <ListItem key={item.href} item={{ href: item.href, title: item?.titleSmall ?? item.title }} onSelect={onSelect} iconType={'dot'} isChild={true} />
                    )}
                </ul>
            )}
        </li>
    )
}

export default ListItem