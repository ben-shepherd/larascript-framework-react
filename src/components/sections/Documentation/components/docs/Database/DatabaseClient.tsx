import CodeBlock from "../../../../../utils/CodeBlock";

const DatabaseClient = () => {
    return (
        <article>

            <p>To access the raw database client, you can use the <code>getClient()</code> method. If you're using a single database, you can simply call:</p>

            <CodeBlock language="typescript">
{`const client = App.container('db').getClient();`}
            </CodeBlock>

            <p>When using multiple databases, if you don't provide a <code>connectionName</code>, the method will use the default connection. To specify a particular connection, provide its name as an argument:</p>

            <CodeBlock language="typescript">
{`const client = App.container('db').getClient('myConnectionName');`}
            </CodeBlock>

            <p>For type safety when working with multiple databases, you should specify the client type:</p>

            <CodeBlock language="typescript">
{`import MongoDB from '@src/core/domains/database/providers-db/MongoDB';

const mongoClient = App.container('db').getClient<MongoDB>('mongoConnectionName');`}
            </CodeBlock>

            <CodeBlock language="typescript">
{`import Postgres from '@src/core/domains/database/providers-db/Postgres';

const sequelize = App.container('db').getClient<Postgres>('postgresConnectionName');`}
            </CodeBlock>

            <p>This approach ensures you get the correct client type for each database, enabling proper autocompletion and type checking in your IDE.</p>

        </article>
    );
}

export default DatabaseClient;