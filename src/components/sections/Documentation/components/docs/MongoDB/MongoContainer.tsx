import CodeBlock from "../../../../../utils/CodeBlock";
import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const MongoContainer = () => {
    return (
        <article>
            <p>Retrieve the <code>MongoDB</code> service from the container</p>
            <pre>
                <SimpleCodeBlock>
                    App.container('mongodb')
                </SimpleCodeBlock>
            </pre>

            <h3>Available Methods</h3>

            <p>Get the <a href="https://mongodb.github.io/node-mongodb-native/6.7/classes/MongoClient.html" target="_blank" rel="noopener noreferrer">MongoClient</a></p>
            <pre>
                <SimpleCodeBlock>
                    {`App.container('mongodb').getClient(): MongoClient`}
                </SimpleCodeBlock>
            </pre>

            <p>Get the <a href="https://mongodb.github.io/node-mongodb-native/6.7/classes/Db.html" target="_blank" rel="noopener noreferrer">Db</a></p>
            <pre>
                <SimpleCodeBlock>
                    {`App.container('mongodb').getDb(): Db`}
                </SimpleCodeBlock>
            </pre>

            <p>Attempt connecting by connection name</p>
            <pre>
                <SimpleCodeBlock>
                    {`App.container('mongodb').connect(connectionName: string): void`}
                </SimpleCodeBlock>
            </pre>

            <p>Query a collection</p>
            <pre>
                <CodeBlock language="typescript">
                    {`const results = App.container('mongodb')
    .getDb()
    .collection('movies')
    .find({author: 'Christopher Nolan'});`}
                </CodeBlock>
            </pre>

            <p>Accessing a collection on another database by providing the <code>connection</code> name</p>
            <pre>
                <CodeBlock language="typescript">
                    {`const results = App.container('mongodb')
    .getConnection('secondary') // Added this method
    .getDb()
    .collection('movies')
    .find({author: 'Christopher Nolan'});`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default MongoContainer;
