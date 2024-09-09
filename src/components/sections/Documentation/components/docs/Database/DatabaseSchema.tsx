import CodeBlock from "../../../../../utils/CodeBlock";

const DatabaseSchema = () => {
    return (
        <article>

            <p>The schema interface provides low-level access to database structure operations. While it's primarily used behind the scenes and for testing purposes, it can be particularly useful when creating migrations.</p>

            <p><strong>Note:</strong> In most cases, you won't need to interact with the schema directly in your application code. It's mainly used internally and for database management tasks.</p>

            <p>You can access the schema for a specific connection like this:</p>

            <CodeBlock language="typescript">
{`const schema = App.container('db').schema(connectionName);`}
            </CodeBlock>

            <h5>Schema Operations Example</h5>

            <p>Here are some examples of how you might use the schema in migrations or for testing purposes:</p>

            <CodeBlock language="typescript">
{`const createTable = async (connectionName: string) => {
    const schema = App.container('db').schema(connectionName);
    await schema.createTable(tableName, {
        name: DataTypes.STRING,
        born: DataTypes.INTEGER,
        authorId: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });
};

const dropTable = async (connectionName: string) => {
    try {
        const schema = App.container('db').schema(connectionName);
        await schema.dropTable(tableName);
    }
    catch (err) {}
}

const truncate = async (connectionName: string) => {
    const schema = App.container('db').documentManager(connectionName).table(tableName);
    await schema.truncate();
}`}
            </CodeBlock>

            <p>These examples demonstrate how to:</p>
            <ul className="list-disc py-3">
                <li>Create a new table with specified columns and data types</li>
                <li>Drop an existing table</li>
                <li>Truncate (remove all data from) a table</li>
            </ul>

            <p>When working with migrations or setting up test environments, these schema operations can be very useful for managing your database structure programmatically.</p>

        </article>
    );
}

export default DatabaseSchema;