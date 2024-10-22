import CodeBlock from "../../../../../utils/CodeBlock";
import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const RepositorySummary = () => {
    return (
        <article>

            <p>The repository pattern is a design approach that centralizes data access logic and separates it from business logic. This pattern offers several benefits:</p>

            <ul className="list-disc py-3">
                <li>Centralized data access logic</li>
                <li>Improved code organization and readability</li>
                <li>Consistent and reusable database queries</li>
                <li>Easier unit testing of data access code</li>
                <li>Abstraction of the data layer, allowing for easier switching between different data sources or ORMs</li>
            </ul>

            <p>In this implementation, repositories return instances of your models, providing access to custom methods, CRUD operations, and data manipulation functionalities.</p>

            <h3>Creating a Repository</h3>

            <p>You can generate a new repository using the following command:</p>

            <CodeBlock language="bash">
                {`yarn dev make:repository --name=MovieRepository`}
            </CodeBlock>

            <p>This command creates a new file at <code>@src/app/repositories/MovieRepository.ts</code></p>

            <h3>Repository Structure</h3>

            <p>Here's an example of a typical repository structure:</p>

            <CodeBlock language="typescript">
{`import MovieModel from "@src/app/models/MovieModel";
import Repository from "@src/core/base/Repository";

export default class MovieRepository extends Repository<MovieModel> {
    constructor() {
        super(MovieModel)
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

            <h3>Constructor</h3>

            <p>The constructor calls the parent class constructor with two arguments:</p>

            <ol className="list-decimal pl-5">
                <li>The name of the database collection (e.g., 'movies')</li>
                <li>The model class (e.g., MovieModel)</li>
            </ol>

            <SimpleCodeBlock>
                {`constructor(modelConstructor: ModelConstructor<Model>, collectionName?: string)`}
            </SimpleCodeBlock>

            <h3>Type Hinting</h3>

            <p>The base <code>Repository</code> class uses a generic type parameter to provide type safety and intellisense for your specific model:</p>

            <SimpleCodeBlock>
                {`class Repository<Model extends IModel> implements IRepository<Model>`}
            </SimpleCodeBlock>

            <h3>Custom Query Methods</h3>

            <p>You can define custom query methods in your repository to encapsulate common or complex queries:</p>

            <CodeBlock>
{`findByAuthor(author: string) {
    return this.findOne({author})
}

findComedies() {
    return this.findMany({genre: 'Comedy'}, {
        sort: {
            createdAt: 'descending'
        }
    })
}`}
            </CodeBlock>

            <h3>Using Repositories</h3>

            <p>To use a repository in your application:</p>

            <CodeBlock language="typescript">
{`import MovieRepository from '@src/app/repositories/MovieRepository';

const movieRepo = new MovieRepository();

// Find a movie by author
const movie = await movieRepo.findByAuthor('Christopher Nolan');

// Find all comedies, sorted by creation date
const comedies = await movieRepo.findComedies();`}
            </CodeBlock>

            <p>By using repositories, you centralize your data access logic, making your code more maintainable and testable. It also provides a consistent interface for working with your data across your application.</p>
        </article>
    );
}

export default RepositorySummary;