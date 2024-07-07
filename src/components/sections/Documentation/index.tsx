import { useEffect, useState } from "react"
import Divider from "../../utils/Divider"
import Content from "./components/Content"
import List from "./components/List"
import DocumentationData from './data/DocumentationData'
import { DocumentationItem } from "./types/DocumentationTypes.t"

const Documentation = () => {
    const [documentationItemSelected, setDocumentationItemSelected] = useState<DocumentationItem | null>(null)

    /**
     * Scroll to URL on document selected changing
     */
    useEffect(() => {
        if(!documentationItemSelected?.href) {
            return;
        }

        window.history.pushState({}, '', documentationItemSelected?.href)
    }, [documentationItemSelected])

    return (
        <section id="section-documentation">
            <h1 className='text-center pt-10'>Documentation</h1>

            <div className="docs-container container mb-10">
                <Divider />

                <div className="docs-flex">
                    <List
                        onSelect={setDocumentationItemSelected}
                        data={DocumentationData} />

                    <Content selected={documentationItemSelected} />
                </div>
            </div>
        </section>
    )
}

export default Documentation

