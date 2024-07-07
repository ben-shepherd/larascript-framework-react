import CodeBlock from "../../../../../utils/CodeBlock";

const ContainerExplained = () => {
    return (
        <>
            <p>A container is simply a globally accessed variable that can be <code>any</code>.</p>
            <p>The container name is unique, and will throw an error if a non-unique name is provided.</p>
            <p>
                Let's say you have a new service you'd like to have globally accessible; you may set up a container that provides it,
                whether it's an object, a single number, or an instance of a class.
            </p>

            <CodeBlock language="typescript">
                {`import {App} from '@src/core/services/App'

App.setContainer(container: string, data:any): void

App.container(name:string): any`}
            </CodeBlock>
        </>
    );
}

export default ContainerExplained;
