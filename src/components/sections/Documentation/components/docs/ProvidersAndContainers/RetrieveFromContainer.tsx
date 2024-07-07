import CodeBlock from "../../../../../utils/CodeBlock";

const RetrieveFromContainer = () => {
    return (
        <section>
            <p>Using <code>App</code>, you can retrieve the contents of a container.</p>
            <p><strong>Example</strong></p>

            <CodeBlock language="typescript">
                {`const weatherInstance = App.container('weather');

weatherInstance.getRegion() // United Kingdom
weatherInstance.getTemperature() // Cold!`}
            </CodeBlock>
        </section>
    );
}

export default RetrieveFromContainer;
