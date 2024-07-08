import CodeBlock from "../../../../../utils/CodeBlock";

const MongoContainer = () => {
    return (
        <article>
            <h2>Retrieve the <code>MongoDB</code> service from the container</h2>
            <pre>
                <code>
                    App.container('mongodb')
                </code>
            </pre>

            <h3>Available Methods</h3>

            <p>Get the <a href="https://mongodb.github.io/node-mongodb-native/6.7/classes/MongoClient.html" target="_blank" rel="noopener noreferrer">MongoClient</a></p>
            <pre>
                <code>
                    {`App.container('mongodb').getClient(): MongoClient`}
                </code>
            </pre>

            <p>Get the <a href="https://mongodb.github.io/node-mongodb-native/6.7/classes/Db.html" target="_blank" rel="noopener noreferrer">Db</a></p>
            <pre>
                <code>
                    {`App.container('mongodb').getDb(): Db`}
                </code>
            </pre>

            <p>Attempt connecting by connection name</p>
            <pre>
                <code>
                    {`App.container('mongodb').connect(connectionName: string): void`}
                </code>
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
