import CodeBlock from "../../../../../utils/CodeBlock";

const DatabaseService = () => {
    return (
        <article>
            <h3>Database Service</h3>
            
            <p>The database service is accessible through the app container using <code>App.container('db')</code>. While models typically handle database operations in the background, the service provides more fine-grained control when needed.</p>

            <h3>IDatabaseService Interface</h3>

            <p>The <code>IDatabaseService</code> interface defines the structure of the database service:</p>

            <CodeBlock language="typescript">
{`export interface IDatabaseService {

    // Internal methods
    boot(): Promise<void>;
    provider<T = Provider>(connectionName?: string): T;
    isProvider(driver: string, connectionName?: string): boolean;
    getDefaultConnectionName(): string;
    setDefaultConnectionName(connectionName: string): void;

    // Methods for managing the database
    getClient<T = Client>(connectionName?: string): T;
    documentManager<T = DocumentManager>(connectionName?: string): T;
    schema<T = Schema>(connectionName?: string): T;
}`}
            </CodeBlock>

            <h3>Key Components</h3>

            <ul className="list-disc py-3">
                <li><strong>getClient&lt;T&gt;(connectionName?):</strong><br /><span className="pl-3"> Retrieves the raw database client. For MongoDB, this would be the MongoClient. For PostgreSQL, it would be the Sequelize instance.</span></li>
                <li className="py-3"><strong>documentManager&lt;T&gt;(connectionName?):</strong><br /><span className="pl-3"> Provides an abstract interface for reading and writing documents to the database.</span></li>
                <li><strong>schema&lt;T&gt;(connectionName?):</strong><br /><span className="pl-3"> Offers an abstract interface for creating and deleting database tables or collections.</span></li>
            </ul>


        </article>
    );
}

export default DatabaseService;