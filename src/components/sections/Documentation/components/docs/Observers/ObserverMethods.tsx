import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const ObserverMethods = () => {
    return (
        <article>
            <p>Each method expects <code>data</code> as the first parameter and is returned after being modified.</p>

            <h2>Method Signatures</h2>
            <p>Creating runs when your Model is saving for the first time.</p>
            <pre>
                <SimpleCodeBlock>
            {`creating?: (...args: any[]) => ReturnType;`}
                </SimpleCodeBlock>
            </pre>

            <p>Created runs when your Model has been saved for the first time.</p>
            <pre>
                <SimpleCodeBlock>
            {`created?: (...args: any[]) => ReturnType;`}
                </SimpleCodeBlock>
            </pre>

            <p>Updating runs if your Model exists in the database and is currently saving.</p>
            <pre>
                <SimpleCodeBlock>
            {`updating?: (...args: any[]) => ReturnType;`}
                </SimpleCodeBlock>
            </pre>

            <p>Updated runs if your Model exists in the database and has just saved.</p>
            <pre>
                <SimpleCodeBlock>
            {`updated?: (...args: any[]) => ReturnType;`}
                </SimpleCodeBlock>
            </pre>

            <p>Deleting runs if your Model exists in the database and is in the process of being deleted.</p>
            <pre>
                <SimpleCodeBlock>
            {`deleting?: (...args: any[]) => ReturnType;`}
                </SimpleCodeBlock>
            </pre>

            <p>Deleted runs if your Model exists in the database and has just been deleted.</p>
            <pre>
                <SimpleCodeBlock>
            {`deleted?: (...args: any[]) => ReturnType;`}
                </SimpleCodeBlock>
            </pre>

        </article>

    );
}

export default ObserverMethods;
