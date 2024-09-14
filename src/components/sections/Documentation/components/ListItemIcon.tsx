import { Dispatch, SetStateAction } from "react";
import { IDocumentationItem, LinkHrefAndTitle } from "../../../../interfaces/IDocumentationItem.ts";
import DefaultIcon from "../../../icons/DefaultIcon.tsx";
import ExpandIcon from "../../../icons/ExpandIcon.tsx";

export type ListItemIconType = 'expand' | 'staticExpand' | 'dot' | null;
type ListItemIcon = {
    item: IDocumentationItem;
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<string | null>>;
    onSelect: () => void;
    isChild: boolean;
    childrenWithTitleAndHref: LinkHrefAndTitle[];
    iconType?: ListItemIconType;
}

const ListItemIcon = ({ item, expanded, setExpanded, onSelect, isChild, childrenWithTitleAndHref, iconType }: ListItemIcon) => {
    if(!iconType) {
        return null;
    }

    const handleClickExpand = () => {
        if(expanded) {
            setExpanded(null);
        }
        else if(typeof item?.href === 'string') {
            setExpanded(item.href);
        }
    }

    const iconMap = {
        expand: <ExpandIcon expanded={expanded} onClick={handleClickExpand} />,
        staticExpand: <ExpandIcon expanded={false} onClick={onSelect} noPointerEvents={true} />,
        dot: <DefaultIcon />
    };

    // Is a parent list item, with no children.
    // It can be a static expand icon. (No change on click)
    if(!isChild && childrenWithTitleAndHref.length === 0) {
        return iconMap['staticExpand'];
    }

    return iconMap[iconType] ? iconMap[iconType] : null
}

export default ListItemIcon