import { Dispatch, SetStateAction } from "react";
import { DocumentationItem } from "../types/DocumentationTypes.t";
import ListItem from "./ListItem";

export type ListProps = {
    data: DocumentationItem[];
    onSelect: Dispatch<SetStateAction<DocumentationItem | null>>;
}
const List = ({ data, onSelect }: ListProps) => {
    return (
        <div className="docs-list-container">
            <div className="docs-list flex-initial">
                <ul className="parent-list">
                    {data.map((item: DocumentationItem) => (
                        <ListItem key={item.href} item={item} onSelect={onSelect}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default List