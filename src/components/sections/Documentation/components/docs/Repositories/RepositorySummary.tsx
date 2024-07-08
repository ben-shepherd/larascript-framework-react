import CodeBlock from "../../../../../utils/CodeBlock";
import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const RepositorySummary = () => {
    return (
        <article>
            <p>The repository design pattern is a way to organize your code and keep all your database queries in one centralized place, separate from the rest of your application logic.</p>
            <p>Making use of this pattern makes your code easier to read, predictable, and ensures all your queries are consistent, reliable, and most importantly reusable.</p>
            <p>Additionally, repositories query methods return an instance of your model, giving you access to your custom methods, methods to perform CRUD operations, and a way to set and retrieve your data using the methods provided.</p>

            <h3>Example</h3>
            <p>You can run the following command to automatically create the Repository for you:</p>
            <pre>
                <code>
                    npm run dev:console -- make:repository --name=MovieRepository
                </code>
            </pre>
            <p>We will create our file here: <code>@src/app/repositories/MovieRepository.ts</code></p>
            <pre>
                <CodeBlock>
                    {`import MovieModel from "@src/app/models/Movie";
import Repository from "@src/core/base/Repository";

export default class MovieRepository extends Repository<MovieModel>
{
    constructor() {
        super('movies', MovieModel)
    }

    findByAuthor(author: string) {
        return this.findOne({author})
    }

    findComedies() {
        return this.findMany({genre: 'Comedy'}, {
            sort: {
                createdAt: 'descending'
            }
        })
    }
}`}
                </CodeBlock>
            </pre>

            <h4>Constructor</h4>
            <p>The <code>super</code> called in <code>constructor()</code> accepts two arguments:</p>
            <ul>
                <li>The first being the MongoDB collection name.</li>
                <li>The second is a reference of a Model that can be instantiated.</li>
            </ul>
            <pre>
                <SimpleCodeBlock>
                    {`constructor(collectionName: string, modelConstructor: ModelConstructor<Model>)`}
                </SimpleCodeBlock>
            </pre>

            <h4>Type Hinting</h4>
            <p>The <code>Repository</code> base class accepts a type parameter of your Model class. This is for the purpose of making TypeScript aware of the type of Model and provide type hinting when interacting with the repository.</p>
            <pre>
                <SimpleCodeBlock>
                    {`class Repository<Model extends IModel> implements IRepository<Model>`}
                </SimpleCodeBlock>
            </pre>
        </article>

    );
}

export default RepositorySummary;
