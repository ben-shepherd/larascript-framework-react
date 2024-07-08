import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const ModelCRUD = () => {
    return (
        <article>
            <h2>Save the model</h2>
            <p><em>If there is no <code>_id</code> present, the record will be inserted, otherwise the existing record will update.</em></p>
            <pre>
                <SimpleCodeBlock>
                    {`save(): Promise<void>`}
                </SimpleCodeBlock>
            </pre>

            <h2>Update the existing record</h2>
            <p><em>No action will happen if there is no <code>_id</code> in the document.</em></p>
            <pre>
                <SimpleCodeBlock>
                    {`update(): Promise<void>`}
                </SimpleCodeBlock>
            </pre>

            <h2>Delete the record</h2>
            <p><em>No action will happen if there is no <code>_id</code> in the document.</em></p>
            <pre>
                <SimpleCodeBlock>
                    {`delete(): Promise<void>`}
                </SimpleCodeBlock>
            </pre>
        </article>

    );
}

export default ModelCRUD;
