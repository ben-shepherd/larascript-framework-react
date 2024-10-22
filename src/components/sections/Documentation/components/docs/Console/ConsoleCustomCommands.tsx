import CodeBlock from "../../../../../utils/CodeBlock";

const CustomConsoleCommandsGuide = () => (
    <div>
        <p>You can create your own custom commands to extend the functionality of your application's CLI. This guide will walk you through the process of creating and implementing a custom command.</p>

        <h3>1. Generate the Command File</h3>
        <p>Use the <code>make:command</code> command to generate a new custom command file:</p>
        <pre><code>yarn dev make:command --name=MigrationUpCommand</code></pre>
        <p>This will create a new file in the <code>@src/app/commands/</code> directory. It's important to note that all new commands are created in this directory, not in <code>@src/commands/</code> as previously stated.</p>

        <h3>2. Implement the Command</h3>
        <p>Open the newly created file in <code>@src/app/commands/</code> and implement your command logic. Here's an example of a command for running migration up scripts:</p>
        <CodeBlock>
            {`class MigrateUpCommand extends BaseCommand {

    /**
     * The signature of the command
     */
    public signature: string = 'migrate:up';

    /**
     * Constructor
     * @param config
     */
    constructor(config: IMigrationConfig = {}) {
        super(config);
        // Allow for configurable keepProcessAlive for testing purposes
        this.keepProcessAlive = config?.keepProcessAlive ?? this.keepProcessAlive;
    }

    /**
     * Execute the command
     */
    execute = async () => {
        // Read the arguments
        const file = this.getArguementByKey('file')?.value;
        const group = this.getArguementByKey('group')?.value;

        // Run the migrations
        const service = new MigrationService(this.config);
        await service.boot();
        await service.up({ filterByFileName: file, group });
    }

}`}
        </CodeBlock>

        <h3>3. Understanding the ICommand Interface</h3>
        <ul className="list-disc py-3">
            <li><code>signature</code>: Defines the command structure and optional flags</li>
            <li><code>description</code>: Provides a brief explanation of the command's purpose</li>
            <li><code>keepProcessAlive</code>: If true, keeps the Node.js process running after command execution</li>
            <li><code>execute</code>: The main method where your command logic is implemented</li>
        </ul>

        <h3>4. Accessing Command Arguments</h3>
        <p>To access arguments passed to your command, use the <code>getArgumentByKey</code> method:</p>
        <pre><code>const steps = this.getArgumentByKey('steps')?.value;</code></pre>
        <p>This allows you to retrieve values for both required arguments and optional flags defined in your command's signature.</p>

        <h3>5. Registering Your Command</h3>
        <p>After creating your command, you need to register it. There are two ways to do this:</p>

        <h3>Option 1</h3>

        <p>You can register your new commands directly in the <code>@src/config/commands.ts</code> file. This is a centralized location for command registration.</p>
        <CodeBlock>
{`/**
 * Add your comments to be registered in the ConsoleProvider
 */
const commandsConfig: ICommandConstructor[] = [
    ExampleCommand,
]`}
        </CodeBlock>

        <h3>Option 2</h3>
        <p>Alternatively, you can register commands in a provider. This is useful when you want to group related commands or have more control over when and how commands are registered. Here's an example of registering commands in a provider:</p>
        <CodeBlock>
            {`export default class MigrationProvider extends BaseProvider {
    async register(): Promise<void> {
        console.log('Registering MigrationProvider');   

        App.container('console').register().registerAll([
            MigrateUpCommand,
            MigrateDownCommand
        ]);
    }

    async boot(): Promise<void> {
        console.log('Booting MigrationProvider');
    }
}`}
        </CodeBlock>

        <p>Choose the registration method that best fits your application's structure and needs. The first option is simpler and centralized, while the second option offers more flexibility and organization, especially for larger applications with many custom commands.</p>
    </div>
);

export default CustomConsoleCommandsGuide;