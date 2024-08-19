import CodeBlock from "../../../../../utils/CodeBlock";

const Providers = () => {
    return (
        <article>
            <p>Providers play a crucial role in the application's bootstrapping process. Their primary purpose is to initialize services and provide configuration to these services during the application's startup phase.</p>
            
            <h3>Purpose of Providers</h3>
            <ul>
                <li>Initialize and configure services</li>
                <li>Bind services to the application container for global access</li>
                <li>Set up any necessary dependencies or connections</li>
                <li>Perform any required setup tasks before the application starts handling requests</li>
            </ul>
            
            <h3>How Providers Work</h3>
            <p>Providers typically follow these steps:</p>
            <ol>
                <li>Define the necessary configurations for a service</li>
                <li>Initialize the service with the provided configuration</li>
                <li>Bind the initialized service to the application container</li>
            </ol>
            
            <h3>Binding Services to the Container</h3>
            <p>Once a service is initialized and configured, it can be bound to the application container. This allows for global access to the service throughout the application. Here's an example:</p>
            
            <CodeBlock language="typescript">
                {`import expressConfig from '@src/config/http/express';
import BaseProvider from "@src/core/base/Provider";
import IExpressConfig from "@src/core/domains/express/interfaces/IExpressConfig";
import Express from '@src/core/domains/express/services/Express';
import { App } from "@src/core/services/App";

export default class ExpressProvider extends BaseProvider
{
    protected config: IExpressConfig = expressConfig;

    public async register(): Promise<void> 
    {
        this.log('Registering ExpressProvider');

        App.setContainer('express', new Express(this.config));
    }

    public async boot(): Promise<void>
    {
        if(!this.config.enabled) {
            return;
        }
        
        this.log('Booting ExpressProvider');

        const express = App.container('express');
        express.init();
        await express.listen();

        this.log('Express successfully listening on port ' + express.getConfig()?.port);
    }
}`}
            </CodeBlock>
            
            <h3>Accessing Bound Services</h3>
            <p>Once a service is bound to the container, it can be accessed globally using the container:</p>
            
            <CodeBlock language="typescript">
                {`const myService = App.container('myService');
// Now you can use myService anywhere in your application`}
            </CodeBlock>
            
            <p><strong>Note:</strong> Providers help maintain a clean separation of concerns by centralizing service initialization and configuration. This approach makes it easier to manage dependencies and swap out implementations as needed.</p>
        </article>
    );
}

export default Providers;