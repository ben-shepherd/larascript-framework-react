import ExpandIcon from "../../../icons/ExpandIcon.tsx";
import DefaultIcon from "../../../icons/DefaultIcon.tsx";
import {Dispatch, SetStateAction} from "react";
import {LinkHrefAndTitle} from "../types/DocumentationTypes.t.ts";

export type ListItemIconType = 'expand' | 'staticExpand' | 'dot' | null;
type ListItemIcon = {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    onSelect: () => void;
    isChild: boolean;
    childrenWithTitleAndHref: LinkHrefAndTitle[];
    iconType?: ListItemIconType;
}

const ListItemIcon = ({ expanded, setExpanded, onSelect, isChild, childrenWithTitleAndHref, iconType }: ListItemIcon) => {
    if(!iconType) {
        return null;
    }

    const iconMap = {
        expand: <ExpandIcon expanded={expanded} onClick={() => setExpanded(!expanded)} />,
        staticExpand: <ExpandIcon expanded={false} onClick={onSelect} />,
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