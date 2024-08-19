import CodeBlock from "../../../../../utils/CodeBlock";

const ProviderContainers = () => {
    return (
        <article>
            <p>References <code>@src/config/containers.ts</code></p>

            <h2>Containers</h2>
            
            <p>This section defines the structure of our application's dependency injection containers.</p>
            
            <h3>Why Interfaces?</h3>
            <p>Using interfaces in this context helps write safer code by:</p>
            <ul>
                <li>Providing a clear contract for what services should be available in the container.</li>
                <li>Enabling static type checking, which catches errors at compile-time rather than runtime.</li>
                <li>Facilitating better code organization and modularity.</li>
            </ul>
            
            <h3>Type Hinting</h3>
            <p>By defining our containers using interfaces, we enable type hinting across the entire application. This means that when you use the container elsewhere in your code, your IDE can provide intelligent suggestions and catch potential errors before they become runtime issues.</p>
            
            <h3>Example</h3>
            <p>Here's an example of how to define your container interfaces:</p>
            
            <CodeBlock language="typescript">
                {`import { IAppService } from "@src/app/interfaces/IAppService";
import { ICoreContainers } from "@src/core/interfaces/ICoreContainers";

export interface IContainers extends ICoreContainers {
    /**
     * Add interfaces to your container services here
     */
    app: IAppService;
}`}
            </CodeBlock>
            
            <p>In this example, we're extending the <code>ICoreContainers</code> interface and adding an <code>app</code> property of type <code>IAppService</code>. This ensures that our container will have all the core services plus our custom app service.</p>
        </article>
    );
}

export default ProviderContainers;