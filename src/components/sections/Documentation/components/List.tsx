import { Dispatch, SetStateAction } from "react";
import { DocumentationItem } from "../types/DocumentationTypes.t";
import ListItem, { ListItemExpandedProps } from "./ListItem";

export type ListProps = {
    data: DocumentationItem[];
    onSelect: Dispatch<SetStateAction<DocumentationItem | null>>;
}
const List = ({ data, onSelect, expanded, setExpanded }: ListProps & ListItemExpandedProps) => {
    return (
        <div className="docs-list-container w-auto xs:w-full">
                <ul className="parent-list">
                    {data.map((item: DocumentationItem) => (
                        <ListItem key={item.href} item={item} onSelect={onSelect} iconType={'expand'} expanded={expanded} setExpanded={setExpanded} />
                    ))}
                </ul>
        </div>
    )
}

export default List