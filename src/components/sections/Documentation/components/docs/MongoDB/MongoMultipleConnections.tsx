
const MongoMultipleConnections = () => {
    return (
        <article>
            <p>On app launch, only the default <code>connection</code> is connected.</p>
            <p>Update <code>keepAliveConnections</code> with your <code>connection</code> name in order to connect to multiple databases.</p>
            <h3>Example</h3>
            <pre>
                <code>
                    MONGO_CONNECTIONS_KEEP_ALIVE=connectionTwo,connectionThree
                </code>
            </pre>
        </article>

    );
}

export default MongoMultipleConnections;
