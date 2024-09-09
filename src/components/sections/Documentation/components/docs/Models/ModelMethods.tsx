import CodeBlock from "../../../../../utils/CodeBlock";
import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const ModelExamples = () => {
    return (
        <article>
            <h3>Common Model Methods</h3>
            <p>Here are some frequently used methods when working with models:</p>

            <h3>Setting an Attribute</h3>
            <p>Use <code>setAttribute</code> to set a single attribute value:</p>
            <SimpleCodeBlock>
                {`movie.setAttribute('genre', 'Science Fiction')`}
            </SimpleCodeBlock>

            <h3>Filling Multiple Attributes</h3>
            <p>Use <code>fill</code> to set multiple attributes at once:</p>
            <SimpleCodeBlock>
                {`movie.fill({
    director: 'Christopher Nolan',
    genre: 'Science Fiction',
    releaseYear: 2014
})`}
            </SimpleCodeBlock>

            <h3>Getting an Attribute Value</h3>
            <p>Use <code>getAttribute</code> to retrieve the value of a specific attribute:</p>
            <SimpleCodeBlock>
                {`const genre = movie.getAttribute('genre') // Returns 'Science Fiction' or null if not set`}
            </SimpleCodeBlock>

            <h3>Retrieving Model Data</h3>
            <p>Use <code>getData</code> to get the current state of the model, with an option to exclude guarded properties:</p>
            <SimpleCodeBlock>
                {`type GetDataOptions = {
    excludeGuarded: boolean
}

getData(options: GetDataOptions): Data | null`}
            </SimpleCodeBlock>

            <h3>Example: Retrieving Model Data</h3>
            <p>Here's an example of how to retrieve a movie from the database and get its data, excluding guarded attributes:</p>
            <CodeBlock>
                {`// Fetch a movie from the database
const movie = await (new Repository<Movie>('movies', Movie)).findOne({ director: 'Christopher Nolan' })

// Get the movie data, excluding guarded attributes
const movieData = movie.getData({ excludeGuarded: true })

console.log(movieData)`}
            </CodeBlock>

            <p>The output might look like this:</p>
            <CodeBlock>
                {`{
    director: 'Christopher Nolan',
    title: 'Interstellar',
    genre: 'Science Fiction',
    releaseYear: 2014
}`}
            </CodeBlock>
            <p>Note: Guarded attributes (if any) would not appear in this output.</p>

            <h3>Full Example: User Model</h3>
            <p>Here's a complete example of a User model, demonstrating how various concepts come together:</p>

            <CodeBlock>
{`import { Model } from '@core/base/Model';
import { IModelData } from '@core/interfaces/IModelData';
import UserObserver from './UserObserver';
import ApiToken from '../auth/ApiToken';

export interface IUserData extends IModelData {
    email: string
    password?: string;
    hashedPassword: string
    roles: string[],
    firstName?: string;
    lastName?: string;
    createdAt?: Date,
    updatedAt?: Date,
}

export default class User extends Model<IUserData> implements IUserModel {

    /**
     * Table name
     */
    public table: string = 'users';

    /**
     * @param data User data
     */
    constructor(data: IUserData | null = null) {
        super(data);
        this.observeWith(UserObserver);
    }

    /**
     * Guarded fields
     */
    guarded: string[] = [
        'hashedPassword',
        'password',
        'roles'
    ];

    /**
     * The fields that are allowed to be set directly
     */
    fields: string[] = [
        'email',
        'password',
        'hashedPassword',
        'roles',
        'firstName',
        'lastName',
        'createdAt',
        'updatedAt',
    ]

    /**
     * Fields that should be returned as JSON
     */
    json = [
        'roles'
    ]

    /**
     * @returns The tokens associated with this user
     */
    async tokens(): Promise<ApiToken[]> {
        return this.hasMany(ApiToken, {
            localKey: 'id',
            foreignKey: 'userId'
        }) 
    }
}`}
            </CodeBlock>

            <p>This User model example demonstrates several key concepts:</p>
            <ul className="list-disc py-3">
                <li>Extending the base <code>Model</code> class and implementing a custom interface (<code>IUserModel</code>)</li>
                <li>Defining the data interface (<code>IUserData</code>) that extends <code>IModelData</code></li>
                <li className="py-2">Setting up the table name</li>
                <li>Using an observer (<code>UserObserver</code>) in the constructor</li>
                <li className="py-2">Defining guarded fields that cannot be read directly</li>  
                <li className="py-2">Setting up JSON serialization preferences</li>
                <li>Implementing a relationship method (<code>tokens()</code>) using <code>hasMany</code></li>
            </ul>

            <p>This example showcases how to structure a model to encapsulate data, control access to fields, and define relationships with other models.</p>

        </article>
    );
}

export default ModelExamples;