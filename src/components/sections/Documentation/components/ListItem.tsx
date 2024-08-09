import {Dispatch, SetStateAction, useMemo, useState} from "react";
import { DocumentationItem, LinkHrefAndTitle } from "../types/DocumentationTypes.t";
import ExpandIcon from "./ExpandIcon";
import DefaultIcon from "./DefaultIcon.tsx";

export type ListItemProps = {
    onSelect: Dispatch<SetStateAction<DocumentationItem | null>>
    item: DocumentationItem;
    iconType?: 'expand' | 'dot' | null;
}

const ListItem = ({ item, onSelect, iconType = null }: ListItemProps) => {
    const { href, title, titleSmall, children = [] } = item;
    const [expanded, setExpanded] = useState<boolean>(false)

    const childrenWithTitleAndHref = children.filter((item: LinkHrefAndTitle) => item.title && item.href)

    const handleSelect = (item: DocumentationItem) => {
        onSelect(item)
        setExpanded(true)
    }

    const icon = useMemo(() => {
        if(!iconType) {
            return null;
        }

        const iconMap = {
            expand: <ExpandIcon expanded={expanded} onClick={() => setExpanded(!expanded)} />,
            dot: <DefaultIcon />
        };

        return iconMap[iconType] ? iconMap[iconType] : null
    }, [iconType, expanded]);

    return (
        <li className={`list-item ${expanded ? 'expanded' : ''}`}>
            {icon}

            <a href={href} onClick={() => handleSelect(item)}>{titleSmall ?? title}</a>
            {childrenWithTitleAndHref.length > 0 && (
                <ul className="sub-list" >
                    {childrenWithTitleAndHref.map((item: LinkHrefAndTitle) =>
                        <ListItem key={item.href} item={{ href: item.href, title: item?.titleSmall ?? item.title }} onSelect={onSelect} iconType={'dot'} />
                    )}
                </ul>
            )}
        </li>
    )
}

export default ListItem