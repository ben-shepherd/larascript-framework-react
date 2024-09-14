import CodeBlock from "../../../../../utils/CodeBlock";

const ObserverModel = () => {
    return (
        <article>
            <p>Observer functionality is built into every model in our system. However, it's turned off by default for performance reasons and to avoid unnecessary complexity when not needed.</p>

            <h3>Enabling Observers in Models</h3>
            <p>To enable observer functionality for a specific model, use the <code>observeWith(Observer)</code> method in the model's constructor:</p>
            <CodeBlock>
{`constructor(data: MovieData | null) {
    super(data)
    this.observeWith(MovieObserver)
}`}
            </CodeBlock>

            <h3>Creating an Observer</h3>
            <p>Before enabling the observer, you need to create an Observer class for your model. You can do this manually or use our CLI tool:</p>
            <CodeBlock language="bash">
                yarn dev -- make:model --name=MovieObserver
            </CodeBlock>
            <p>This will create a new Observer file at <code>@src/app/observers/MovieObserver.ts</code></p>

            <h3>Observer Implementation Example</h3>
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

            <h3>Key Points</h3>
            <ul className='list-disc my-3'>
                <li>We've added predefined methods <code>updating</code> and <code>creating</code>, and a custom method <code>onAuthorChanged</code>.</li>
                <li>The Observer extends <code>Observer&lt;MovieData&gt;</code>, providing type hinting for better development experience.</li>
            </ul>

            <h3>Linking Custom Methods to Model Properties</h3>
            <p>To link specific model properties to custom observer methods, define the <code>observeProperties</code> object in your model:</p>
            <CodeBlock>
{`observeProperties = {
    author: 'onAuthorChanged'
}`}
            </CodeBlock>

            <h3>Complete Model Example with Observer</h3>
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

            <h3>Best Practices</h3>
            <ul className='list-disc my-3'>
                <li>Only enable observers on models where you need reactive behavior.</li>
                <li>Keep observer logic focused and lightweight to avoid performance issues.</li>
                <li>Use custom methods for complex property-specific logic.</li>
                <li>Always consider the performance implications when adding observers to frequently used models.</li>
            </ul>
        </article>
    );
}

export default ObserverModel;