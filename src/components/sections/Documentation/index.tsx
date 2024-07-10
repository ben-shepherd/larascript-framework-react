import { useRef, useState } from "react"
import Divider from "../../utils/Divider"
import Content from "./components/Content"
import List from "./components/List"
import DocumentationData from './data/DocumentationData'
import useScrollOnSidebarClick from "./hooks/useScrollOnSidebarClick"
import useSidebarFixed from "./hooks/useSidebarFixed"
import { DocumentationItem } from "./types/DocumentationTypes.t"

const Documentation = () => {
    const [documentationItemSelected, setDocumentationItemSelected] = useState<DocumentationItem | null>(null)
    const sectionRef = useRef<HTMLElement | null>(null)

    /**
     * Scroll to position on page when a documentation item is clicked in sidemenu
     */
    useScrollOnSidebarClick({ documentationItemSelected})

    /**
     * Position fixed the sidebar when user scrolls past main "Documentation" title
     */
    useSidebarFixed({ sectionRef })

    return (
        <section id="section-documentation" ref={sectionRef}>
            <h1 className='text-center pt-10'>Documentation</h1>

            <div className="docs-container container mb-10">
                <Divider />

                <div className="docs-flex flex flex-wrap lg:flex-nowrap">
                    <List
                        onSelect={setDocumentationItemSelected}
                        data={DocumentationData} />

                    <Content />
                </div>
            </div>
        </section>
    )
}

export default Documentation

