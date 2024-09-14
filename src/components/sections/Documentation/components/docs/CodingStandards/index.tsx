import CodeBlock from "../../../../../utils/CodeBlock";

const CodingStandards = () => {
    return (
        <article>
            <h3>Naming Convention Casing</h3>
            <ul className="list-disc">
                <li><strong>Preferred casing for methods, variables:</strong> camelCase</li>
                <li><strong>Preferred casing for classes, interfaces and types, objects:</strong> PascalCase</li>
            </ul>

            <h3>Domains</h3>
            <ul className="list-disc">
                <li>Features should ideally be encapsulated within their own domains in either app/domains or core/domains.</li>
                <li>Each domain should have its own provider, which binds the domain's services to a container for external access.</li>
                <li>More generic utility functions and helpers can be placed outside of specific domains.</li>
            </ul>

            <h3>Classes, Types and Interfaces, Objects</h3>
            <ul className="list-disc">
                <li>Classes, Interfaces, Types should be PascalCase. Example: <code>MyService.ts</code></li>
                <li>Interfaces should start with a capital "i". Example: <code>IMyServiceInterface.ts</code></li>
                <li>Type files should be suffixed with ".t.ts" Example: <code>Types.t.ts</code></li>
                <li>Files that export Objects should follow PascalCase. Example: <code>MyObject.ts</code></li>
            </ul>

            <h4 className="mt-5">Service/Interface Example:</h4>
            <p>Filename: <code>MyService.ts</code></p>
            <CodeBlock>
                {`class MyService implements IMyService
{
    public myServiceMethod({ data }: MyServiceMethodArgs): array
    {
        /* logic */    
    }
}`}
            </CodeBlock>

            <h3>Type Example:</h3>
            <p>Filename: <code>MyServiceTypes.t.ts</code></p>
            <CodeBlock>
                {`export type MyServiceMethodArgs = {
    data: array;
}`}
            </CodeBlock>

            <h3>Methods and variables</h3>
            <ul>
                <li>Method file names should follow camelCasing.</li>
                <li>Method and variables should follow camelCasing.</li>
            </ul>

            <p>Example:</p>
            <p>Filename: <code>myServiceMethod.ts</code></p>
            <CodeBlock>
                {`const myServiceMethod = () => { 
    /* logic */
}

export default myServiceMethod`}
            </CodeBlock>

            <CodeBlock>
                {`import myServiceMethod from 'myServiceMethod'

const resultArray = myServiceMethod()`}
            </CodeBlock>

            <h2>Import Standards</h2>
            <ul>
                <li>All internal imports should use absolute pathing and one of available prefixes.</li>
            </ul>

            <p>Prefixes available:</p>
            <ul>
                <li><code>@src</code> -&gt; <code>/src</code></li>
            </ul>

            <p>Example</p>
            <CodeBlock>
                {`import MyService from '@app/domains/MyFeature/services/MyService';
import MongoDB from '@core/database/mongodb/services/MongoDB';`}
            </CodeBlock>

            <h2>Example Folder Structure</h2>
            <pre>
                <code>
                    {`├── app/
│   ├── commands/
│   ├── events/
│   ├── models/
│   ├── observers/
│   ├── providers/
│   ├── repositories/
│   ├── routes/
│   ├── utils/
│   │   ├── formatString.ts
│   │   └── formatNumber.ts
│   └── domains/
│       ├── user/
│       │   ├── factory/
│       │   │   └── UserFactory.ts
│       │   ├── repository/
│       │   │   └── UserRepository.ts
│       │   ├── models/
│       │   │   └── User.ts
│       │   ├── services/
│       │   │   └── UserService.ts
│       │   └── types/
│       │       └── user.t.ts
│       └── movie/
│           ├── factory/
│           │   └── MovieFactory.ts
│           ├── repository/
│           │   └── MovieRepository.ts
│           ├── exceptions/
│           │   └── fetchMovieException.ts
│           ├── interfaces/
│           │   └── IMovie.ts
│           ├── services/
│           │   └── MovieDescriptionService.ts
│           └── types/
│               └── MovieTypes.t.ts
├── core/
│   ├── domains/
│   │   └── database/
│   │       └── mongodb/
│   │           ├── services/
│   │           ├── interfaces/
│   │           ├── relationships/
│   │           └── exceptions/
│   └── make/
│       ├── base/
│       ├── commands/
│       ├── providers/
│       └── templates/
└── config/
    └── app.ts`}
                </code>
            </pre>
        </article>
    );
}

export default CodingStandards;