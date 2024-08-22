import CodeBlock from "../../../../../utils/CodeBlock";

const ConsoleMake = () => {
    return (
        <article>
            <p>The 'make' commands are powerful tools designed to generate boilerplate code for various components of your application. These commands help maintain consistency and save time when creating new files.</p>

            <h3>Available Make Commands</h3>

            <h3>1. Create a Model</h3>
            <p>Generates a new Model file in <code>@src/app/models/{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:model --name=MovieModel --collection=movies
            </CodeBlock>
            <p><strong>Options:</strong></p>
            <ul>
                <li><code>--name</code>: Name of the model (required)</li>
                <li><code>--collection</code>: Name of the associated database collection</li>
            </ul>

            <h3>2. Create a Repository</h3>
            <p>Generates a new Repository file in <code>@src/app/repositories/{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:repository --name=MovieRepository --collection=movies
            </CodeBlock>
            <p><strong>Options:</strong></p>
            <ul>
                <li><code>--name</code>: Name of the repository (required)</li>
                <li><code>--collection</code>: Name of the associated database collection</li>
            </ul>

            <h3>3. Create a Service</h3>
            <p>Generates a new Service file in <code>@src/app/services/{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:service --name=MovieService
            </CodeBlock>

            <h3>4. Create a Singleton Service</h3>
            <p>Generates a new Singleton Service file in <code>@src/app/services/{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:singleton --name=MovieSingleton
            </CodeBlock>

            <h3>5. Create a Provider</h3>
            <p>Generates a new Provider file in <code>@src/app/providers/{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:provider --name=MovieProvider
            </CodeBlock>

            <h3>6. Create an Event Listener</h3>
            <p>Generates a new Listener file in <code>@src/app/events/listeners/{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:listener --name=MovieListener
            </CodeBlock>

            <h3>7. Create an Event Subscriber</h3>
            <p>Generates a new Subscriber file in <code>@src/app/events/subscribers/{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:subscriber --name=MovieSubscriber
            </CodeBlock>

            <h3>8. Create an Observer</h3>
            <p>Generates a new Observer file in <code>@src/app/observers/{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:observer --name=MovieObserver
            </CodeBlock>

            <h3>8. Create a a Validator</h3>
            <p>Generates a new Validator file in <code>@src/app/validators{'{fileName}'}</code></p>
            <CodeBlock language="bash">
                yarn run dev -- make:validator --name=CreateMovieValidator
            </CodeBlock>

            <h3>Best Practices</h3>
            <ul className='list-disc my-3'>
                <li>Use consistent naming conventions across your project</li>
                <li>Always review and customize the generated files to fit your specific needs</li>
                <li>Consider creating your own custom make commands for project-specific boilerplate</li>
            </ul>

            <h3>Customizing Generated Files</h3>
            <p>The templates for these generated files can be found in the <code>@src/core/domains/make/templates</code> directory. You can modify these templates to change the structure of the generated files to better suit your project's needs.</p>

            <h3>Extending Make Commands</h3>
            <p>If you find yourself repeatedly creating the same set of files, consider creating a custom make command that generates multiple related files at once. This can be done by extending the existing console command system.</p>

            <p>These make commands are designed to streamline your development process and maintain consistency across your project. Use them to quickly scaffold new components of your application.</p>
        </article>
    );
}

export default ConsoleMake;