import { useEffect } from "react";
import { IDocumentationItem } from "../../../../interfaces/IDocumentationItem";

type Props = {
    documentationItemSelected: IDocumentationItem | null
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