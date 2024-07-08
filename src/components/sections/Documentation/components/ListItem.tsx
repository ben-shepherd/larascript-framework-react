import { Dispatch, SetStateAction } from "react";
import { DocumentationItem, LinkHrefAndTitle } from "../types/DocumentationTypes.t";

export type ListItemProps = {
    onSelect: Dispatch<SetStateAction<DocumentationItem | null>>
    item: DocumentationItem;
}

const ListItem = ({ item, onSelect }: ListItemProps) => {
    const { href, title, titleSmall, children = [] } = item;

    return (
        <li>
            <a href={href} onClick={() => onSelect(item)}>{titleSmall ?? title}</a>
            {children.length > 0 && (
                <ul className="sub-list" >
                    {children.map((item: LinkHrefAndTitle) => 
                        <ListItem key={item.href} item={{ href: item.href, title: item?.titleSmall ?? item.title }} onSelect={onSelect} />
                    )}
                </ul>
            )}
        </li>
    )
}

export default ListItem