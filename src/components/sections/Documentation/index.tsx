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
    const [expanded, setExpanded] = useState<string | null>(null)

    /**
     * Scroll to position on page when a documentation item is clicked in sidemenu
     */
    useScrollOnSidebarClick({ documentationItemSelected})

    /**
     * Position fixed the sidebar when user scrolls past main "Documentation" title
     */
    useSidebarFixed({ sectionRef })

    /**
     * Scroll to top (for mobile devices)
     */
    const scrollToTop = () => {
        window.scrollTo({ top: sectionRef.current?.offsetTop ?? 0, behavior: 'smooth' })
    }
    
    return (
        <section id="documentation" ref={sectionRef}>
            <h1 className='text-center pt-10'>Documentation</h1>

            <div className="docs-container container mb-10">
                <Divider/>

                <div className="docs-flex flex flex-wrap lg:flex-nowrap">
                    <List
                        onSelect={setDocumentationItemSelected}
                        data={DocumentationData}
                        expanded={expanded}
                        setExpanded={setExpanded} />

                    <Content scrollToTop={scrollToTop} />
                </div>
            </div>
        </section>
    )
}

export default Documentation

