import CodeBlock from "../../../../../utils/CodeBlock";

const ObserverModel = () => {
    return (
        <article>

            <p>By default, all models have observer functionality implemented and can be enabled when required.</p>

            <h3>Enabling in Models</h3>
            <p>Use the <code>observeWith(Observer)</code> method to enable observer functionality.</p>
            <CodeBlock>
                {`constructor(data: MovieData | null) {
    super(data)
    this.observeWith(MovieObserver)
}`}
            </CodeBlock>

            <p>First, we'll create our MovieObserver at <code>@src/app/observers/MovieObserver.ts</code></p>
            <p>You can run the following command to make an Observer file automatically:</p>
            <pre>
                <code>
                    yarn run dev -- make:model --name=MovieObserver
                </code>
            </pre>

            <p className="my-3"><strong>Note:</strong></p>
            <ul>
                <li>The following changes have been made in the Observer:</li>
                <li>We've added predefined methods <code>updating</code> and <code>creating</code>, and also one custom method <code>onAuthorChanged</code>.</li>
                <li>We've also passed a type parameter to the extended <code>Observer&lt;MovieData&gt;</code> class. This helps with type hinting when interacting with your Observer.</li>
            </ul>

            <h3>Example</h3>
            <pre>
                <CodeBlock>
                    {`import Observer from "@src/core/observer/Observer";
import { UserData } from "../models/auth/User";
import { MovieData } from "../models/MovieModel";

export default class MovieObserver extends Observer<MovieData> {  
    creating = (data: MovieData): MovieData => {
        console.log('MovieData is being created for the first time!')
        return data;
    }

    updating = (data: MovieData): MovieData => {
        console.log('MovieData is updating!')
        return data;
    }

    onAuthorChanged = (data: UserData): UserData => {
        console.log('The author has changed!')
        return data;
    }
}`}
                </CodeBlock>
            </pre>

            <p>To enable the Observer on your model, simply execute <code>observeWith</code> in your <code>constructor</code> with your observer class as the first parameter.</p>
            <p>We've also defined the <code>observeProperties</code> to link the attribute <code>author</code> to our custom method.</p>

            <pre>
                <CodeBlock>
                    {`observeProperties = {
    author: 'onAuthorChanged'
}`}
                </CodeBlock>
            </pre>

            <p>See the full example below:</p>
            <pre>
                <CodeBlock>
                    {`import Model from '@src/core/base/Model';
import { ObjectId } from 'mongodb';
import MovieObserver from '../observers/MovieObserver';

export interface MovieData {
    _id?: ObjectId;
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

    observeProperties = {
        author: 'onAuthorChanged'
    }

    constructor(data: MovieData | null) {
        super(data)
        this.observeWith(MovieObserver)
    }

    getAuthor(): string | null {
        return this.data?.author ?? null;
    }
}`}
                </CodeBlock>
            </pre>
        </article>


    );
}

export default ObserverModel;
