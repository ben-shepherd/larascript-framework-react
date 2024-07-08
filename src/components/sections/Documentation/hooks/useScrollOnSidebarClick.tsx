import { useEffect } from "react";
import { DocumentationItem } from "../types/DocumentationTypes.t";

type Props = {
    documentationItemSelected: DocumentationItem | null
}

const useScrollOnSidebarClick = ({ documentationItemSelected }: Props) => {
    useEffect(() => {
        if(!documentationItemSelected?.href) {
            return;
        }

        window.history.pushState({}, '', documentationItemSelected?.href)
    }, [documentationItemSelected])
}

export default useScrollOnSidebarClick