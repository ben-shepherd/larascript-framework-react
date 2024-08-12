import { Dispatch, SetStateAction } from "react";
import { DocumentationItem, LinkHrefAndTitle } from "../types/DocumentationTypes.t";
import ListItemIcon, { ListItemIconType } from "./ListItemIcon.tsx";

export type ListItemProps = {
    onSelect: Dispatch<SetStateAction<DocumentationItem | null>>
    item: DocumentationItem;
    iconType?: ListItemIconType;
    isChild?: boolean;
}
export type ListItemExpandedProps = {
    expanded: string | null;
    setExpanded: Dispatch<SetStateAction<string | null>>;
}

const ListItem = ({ item, onSelect, iconType = null, isChild = false, expanded, setExpanded }: ListItemProps & ListItemExpandedProps) => {
    const { href, title, titleSmall, children = [] } = item;

    const childrenWithTitleAndHref = children.filter((item: LinkHrefAndTitle) => item.title && item.href)

    const handleSelect = (item: DocumentationItem) => {
        onSelect(item)

        // Prevent expanding on a list of it has no children
        const hasChildrenNoChildren = (item?.children ?? []).filter((item: LinkHrefAndTitle) => item.title && item.href).length === 0;

        if(hasChildrenNoChildren || !item.href) return;
        
        setExpanded(item.href)

    }

    const thisIsExpanded = expanded === item?.href

    const iconProps = {
        item,
        expanded: thisIsExpanded,
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

            {thisIsExpanded && childrenWithTitleAndHref.length > 0 && (
                <ul className="sub-list" >
                    {childrenWithTitleAndHref.map((item: LinkHrefAndTitle) =>
                        <ListItem 
                            key={item.href}
                            item={{ href: item.href, title: item?.titleSmall ?? item.title }}
                            onSelect={onSelect}
                            iconType={'dot'}
                            isChild={true} 
                            expanded={expanded}
                            setExpanded={setExpanded}
                        />
                    )}
                </ul>
            )}
        </li>
    )
}

export default ListItem