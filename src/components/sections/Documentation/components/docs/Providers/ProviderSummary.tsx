import CodeBlock from "../../../../../utils/CodeBlock";

const Providers = () => {
    return (
        <article>
            <p>Providers are essential components that initialize and configure services during the application's startup phase.</p>
            
            <h3>Key Concepts</h3>
            <ul className="list-disc py-3">
                <li>Initialize services and bind them to the app container</li>
                <li>Configure services and set up dependencies</li>
                <li>Perform setup tasks before the application handles requests</li>
            </ul>
            
            <h3>Example Provider</h3>
            <CodeBlock language="typescript">
{`export default class ConsoleProvider extends BaseProvider {

    /**
     * The commands to register
     * Pulled from @src/config/app
     */
    protected config: ICommandConstructor[] = appConfig.commands;

    /**
     * Register method
     * Called when the provider is being registered
     * Use this method to set up any initial configurations or services
     */
    async register(): Promise<void> {
        this.log('Registering ConsoleProvider');

        /**
         * Add the console service to the container
         */
        App.setContainer('console', new ConsoleService())

        /**
         * Register commands from @src/config/app
         */
        App.container('console').register().registerAll(this.config)
    }

    /**
     * Boot method
     * Called after all providers have been registered
     * Use this method to perform any actions that require other services to be available
     */
    async boot(): Promise<void> {}
}`}
            </CodeBlock>
            
            <p>In this example, the ConsoleProvider:</p>
            <ul className="list-disc py-3">
                <li>Logs the registration process</li>
                <li>Creates a new ConsoleService and binds it to the app container</li>
                <li>Registers commands from the app configuration</li>
            </ul>

            <h3>Binding Services to the Container</h3>
            <p>Once a service is initialized and configured, it's bound to the application container. This allows for global access to the service throughout the application:</p>
            
            <CodeBlock language="typescript">
{`App.setContainer('serviceName', new ServiceClass())`}
            </CodeBlock>
            
            <h3>Accessing Bound Services</h3>
            <p>Once a service is bound to the container, it can be accessed globally using the container:</p>
            
            <CodeBlock language="typescript">
{`const myService = App.container('serviceName');
// Now you can use myService anywhere in your application`}
            </CodeBlock>

            <h3>Type Hinting for Container Access</h3>
            <p>For better type safety when accessing the container, it's recommended to update the <code>@src/core/interfaces/ICoreContainers.ts</code> file. This file defines the interface for the core containers, allowing TypeScript to provide accurate type hinting:</p>

            <CodeBlock language="typescript">
{`import { IAuthService } from '@src/core/domains/auth/interfaces/IAuthService';
import ICommandService from '@src/core/domains/console/interfaces/ICommandService';
import { IDatabaseService } from '@src/core/domains/database/interfaces/IDatabaseService';
import { IEventService } from '@src/core/domains/events/interfaces/IEventService';
import IValidatorService from '@src/core/domains/validator/interfaces/IValidatorService';
import IExpressService from '../domains/express/interfaces/IExpressService';

export interface ICoreContainers {
    [key: string]: any;

    events: IEventService;
    auth: IAuthService;
    db: IDatabaseService;
    express: IExpressService;
    console: ICommandService;
    validate: IValidatorService;
}`}
            </CodeBlock>

            <p>By defining the types for each service in the <code>ICoreContainers</code> interface, you ensure that TypeScript can provide accurate autocompletion and type checking when accessing services from the container.</p>
            
            <h3>AppProvider and Custom Providers</h3>
            <p>By default, your AppProvider (located in <code>@src/app/providers/AppProvider.ts</code>) might contain most of your service logic. However, if you wish to split out this logic, you can create a new provider:</p>
            
            <CodeBlock language="bash">
{`yarn dev make:provider --name=MyServiceProvider`}
            </CodeBlock>

            <p>This approach helps maintain a clean separation of concerns by centralizing service initialization and configuration. It makes it easier to manage dependencies and swap out implementations as needed.</p>

            <p><strong>Note:</strong> Remember to register your custom providers in the appropriate bootstrapping process to ensure they are executed during application startup.</p>
        </article>
    );
}

export default Providers;