import CodeBlock from "../../../../../utils/CodeBlock";

const MongoModelConnections = () => {
    return (
        <article>
            <h2>Example Model <code>@src/app/models/Movie.ts</code></h2>
            <pre>
                <CodeBlock language="typescript">
                    {`import Model from '@src/core/base/Model';

interface MovieData = {
    title: string;
    author: string;
    dateReleased: Date;
}

export default class Movie extends Model<MovieData> {

    /**
     * Change the connection to our secondary database
     */
    public connection: string = 'secondary'

    fields: string[] = [
        'title',
        'author',
        'dateReleased'
    ]
}`}
                </CodeBlock>
            </pre>

            <h2>Modules</h2>
            <p>Reference: <code>@src/core/domains/database/services/mongodb.ts</code></p>
            <p>Provided by <code>@src/core/providers/MongoDBProvider.ts</code></p>
        </article>

    );
}

export default MongoModelConnections;
