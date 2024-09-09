import CodeBlock from "../../../../../utils/CodeBlock";

const DatabaseConfig = () => {
    return (
        <article>
            <p>The application supports both MongoDB and PostgreSQL out of the box. While it's generally recommended to stick with one database system, the configuration allows for multiple connections if needed.</p>

            <p>The database configuration is defined in <code>@src/config/database.ts</code>. Here's a breakdown of its key components:</p>

            <ul className="list-disc py-3">
                <li><strong>defaultConnectionName:</strong> Specifies the primary database connection to use.</li>
                <li><strong>keepAliveConnections:</strong> A comma-separated list of connection names to keep active. This is useful when you need multiple database connections to remain open.</li>
                <li><strong>connections:</strong> An object containing the configuration for each database connection.</li>
            </ul>

            <p>Each connection in the <code>connections</code> object is defined with the following properties:</p>

            <ul className="list-disc py-3">
                <li><strong>driver:</strong> Specifies the database type (MongoDB or PostgreSQL).</li>
                <li><strong>uri:</strong> The connection string for the database, typically pulled from environment variables for security and flexibility across different deployment environments.</li>
                <li><strong>options:</strong> An object for any additional connection options specific to the database driver.</li>
            </ul>

            <p>Here's an example configuration:</p>

            <CodeBlock language="typescript">
{`const config: IDatabaseConfig = {
    defaultConnectionName: DEFAULT_CONNECTION,
    keepAliveConnections: process.env.DATABASE_CONNECTIONS_KEEP_ALIVE ?? '',
    connections: {
        [DEFAULT_CONNECTION]: {
            driver: DEFAULT_PROVIDER,
            uri: process.env.DATABASE_DEFAULT_URI as string,
            options: {}
        },
        // You can add more connections here if needed
    },
};`}
            </CodeBlock>

            <p>This setup allows for flexible database configuration, enabling you to easily switch between different databases or use multiple databases as your application requirements evolve.</p>

            <p>Example .env</p>
            <CodeBlock>
{`DATABASE_DEFAULT_CONNECTION=default
DATABASE_DEFAULT_PROVIDER=postgres
DATABASE_DEFAULT_URI=postgresql://root:example@localhost:5432/app
DATABASE_CONNECTIONS_KEEP_ALIVE=secondaryConnection`}
            </CodeBlock>
        </article>
    );
}

export default DatabaseConfig;