import { Dispatch, SetStateAction } from "react";
import { IDocumentationItem } from "../../../../interfaces/IDocumentationItem";
import ListItem, { ListItemExpandedProps } from "./ListItem";

export type ListProps = {
    data: IDocumentationItem[];
    onSelect: Dispatch<SetStateAction<IDocumentationItem | null>>;
}
const List = ({ data, onSelect, expanded, setExpanded }: ListProps & ListItemExpandedProps) => {
    return (
        <div className="docs-list-container w-auto xs:w-full">
                <ul className="parent-list">
                    {data.map((item: IDocumentationItem) => (
                        <ListItem key={item.href} item={item} onSelect={onSelect} iconType={'expand'} expanded={expanded} setExpanded={setExpanded} />
                    ))}
                </ul>
        </div>
    )
}

export default List