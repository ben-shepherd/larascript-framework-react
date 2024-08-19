import CodeBlock from "../../../../../utils/CodeBlock";

const CustomConsoleCommands = () => {
    return (
        <article>
            <p>Custom console commands allow you to extend the functionality of your application's CLI. This guide will walk you through the process of creating and registering your own commands based on the ICommand interface.</p>

            <h3>Step 1: Create the Command File</h3>
            <p>Use the following command to generate a new custom command file:</p>
            <CodeBlock language="bash">
                yarn run start -- make:command --name=MovieCommand
            </CodeBlock>
            <p>This will create a new file in the <code>@src/commands/</code> directory.</p>

            <h3>Step 2: Implement the Command</h3>
            <p>Open the newly created file and implement your command logic. Here's an example structure that adheres to the ICommand interface:</p>
            <CodeBlock language="typescript">
{`import { ICommand } from '@src/core/domains/console/interfaces/ICommand';

export default class MovieCommand implements ICommand {
    public signature: string = 'movie:action {id} {--name=}';
    public description?: string = 'Perform an action on a movie';
    public keepProcessAlive?: boolean = false;

    public async execute(): Promise<void> {
        const id = this.getArgumentByKey('id')?.value;
        const name = this.getArgumentByKey('name')?.value;

        console.log(\`Performing action on movie \${id}\`);
        if (name) {
            console.log(\`Movie name: \${name}\`);
        }
        // Your command logic here
    }
}`}
            </CodeBlock>

            <h3>Accessing Command Arguments</h3>
            <p>To access the arguments passed to your command, use the <code>getArgumentByKey</code> method. This method allows you to fetch the value for a specific CLI argument.</p>
            
            <ul className="list-disc my-3">
                <li>For optional arguments defined with double dashes <code>{'{--name=}'}</code>, use: <code>this.getArgumentByKey('name')?.value</code></li>
            </ul>

            <p>Example usage in the command:</p>
            <CodeBlock language="typescript">
{`public async execute(): Promise<void> {
    const id = this.getArgumentByKey('id')?.value;
    const name = this.getArgumentByKey('name')?.value;

    console.log(\`Movie ID: \${id}\`);
    if (name) {
        console.log(\`Movie name: \${name}\`);
    }
    // Implement your logic here
}`}
            </CodeBlock>

            <h3>Step 3: Register the Command</h3>
            <p>To make your command available, you need to register it in a provider. Navigate to your App provider in <code>@src/app/providers/AppProvider.ts</code> and add your command to the registration process:</p>
            <CodeBlock language="typescript">
{`import { App } from "@src/core/services/App";
import BaseProvider from "../../core/base/Provider";
import MovieCommand from '@src/commands/MovieCommand';

export default class AppProvider extends BaseProvider {
    public async register(): Promise<void> {
        this.log('Registering AppProvider');

        /**
         * Register multiple commands at once
         */
        App.container('console').register().registerAll([
            MovieCommand,
            // Add other commands here
        ]);
    }

    public async boot(): Promise<void> {
        this.log('Booting AppProvider');
    }
}`}
            </CodeBlock>

            <h3>Step 4: Using Your Custom Command</h3>
            <p>After registering, you can use your custom command like this:</p>
            <CodeBlock language="bash">
                yarn run start -- movie:action --id=123 --name="The Matrix"
            </CodeBlock>

            <h3>Understanding the ICommand Interface</h3>
            <ul className="list-disc my-3">
                <li><code>signature</code>: Defines the command structure, required arguments, and optional flags</li>
                <li><code>description</code>: Provides a brief explanation of the command's purpose</li>
                <li><code>keepProcessAlive</code>: If true, keeps the Node.js process running after command execution</li>
                <li><code>execute</code>: The main method where your command logic is implemented</li>
            </ul>

            <h3>Best Practices for Custom Commands</h3>
            <ul className="list-disc my-3">
                <li>Use descriptive signatures that clearly indicate required arguments and optional flags</li>
                <li>Provide clear and concise descriptions for each command</li>
                <li>Implement proper error handling within your execute method</li>
                <li>Use the keepProcessAlive flag judiciously, typically for commands that involve ongoing processes</li>
                <li>Consider grouping related commands under a common namespace in the signature</li>
                <li>Always check if optional arguments are provided before using them in your logic</li>
            </ul>

            <p>By creating custom console commands that adhere to the ICommand interface and utilize the <code>getArgumentByKey</code> method, you can extend your application's CLI functionality in a structured and flexible manner.</p>
        </article>
    );
}

export default CustomConsoleCommands;