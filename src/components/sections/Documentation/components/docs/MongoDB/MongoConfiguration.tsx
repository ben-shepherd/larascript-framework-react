import CodeBlock from "../../../../../utils/CodeBlock";

const MongoConfiguration = () => {
    return (
        <article>
            <h2>Provider</h2>
            <p><code>@src/core/domains/database/mongodb/providers/MongoDBProvider.ts</code></p>
            <h2>Configuration</h2>
            <p><code>@src/config/database/mongodb.ts</code></p>
            <pre>
                <CodeBlock language="typescript">
                    {`import IMongoDbConfig from "@src/core/domains/database/mongodb/interfaces/IMongoDbConfig";

const config: IMongoDbConfig = {
    /**
     * The default connection when accessing database
     */
    connection: (process.env.MONGODB_CONNECTION as string) ?? 'default',
    
    /**
     * The additional connections to keep-alive.
     * 
     * Value must be your connection name commma seperated.
     * Example: secondary,externalDb
     */
    keepAliveConnections: (process.env.MONGO_CONNECTIONS_KEEP_ALIVE as string) ?? '',
    
    /**
     * Configure your connections
     */
    connections: {
        default: {
            uri: process.env.MONGODB_URI as string,
            options: {}
        }
    }
};

export default config;`}
                </CodeBlock>
            </pre>

            <h2>Environment variables</h2>
            <blockquote>
                <p>MONGODB_URI=mongodb://username:SuperSecretPwd@localhost:27017/app?authSource=admin</p>
            </blockquote>
        </article>

    );
}

export default MongoConfiguration;
