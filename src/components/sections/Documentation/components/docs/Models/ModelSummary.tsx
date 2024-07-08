import CodeBlock from "../../../../../utils/CodeBlock";

const ModelSummary = () => {
    return (
        <article>
            <p>Models are essential components in your application and provide a standard way of structuring and handling your data across your application.</p>

            <h3>Example</h3>
            <p>You can run the following command to make a model file automatically:</p>
            <pre>
                <code>
                    npm run dev:console -- make:model --name=Movie
                </code>
            </pre>

            <p>We will create our model file here: <code>@src/app/models/MovieModel.ts</code></p>
            <pre>
                <CodeBlock>
                    {`import Model from '@src/core/base/Model';
import { ObjectId } from 'mongodb';

interface MovieData {
    _id: ObjectId;
    subscriptionId: string;
    author: string;
    genre: string;
}

export default class Movie extends Model<MovieData> {

    fields: string[] = [
        ...this.fields,
        'subscriptionId',
        'author',
        'genre',
    ]

    guarded: string[] = [
        'subscriptionId'
    ]

    getAuthor(): string | null {
        return this.data?.author ?? null;
    }
}`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default ModelSummary;
