import CodeBlock from "../../../../../utils/CodeBlock";

const Extendables = () => {
    return (
        <article>

            <p>Our framework provides several base classes that you can extend when creating your own classes. These base classes are designed to offer common functionality and structure, making it easier to create consistent and predictable components in your application.</p>

            <p>All of these base classes are located in the <code>@src/core/base</code> directory.</p>

            <h3>Available Base Classes</h3>

            <ul className="list-disc py-3">
                <li className="py-2"><strong>Model</strong>: Base model for creating your own model classes.
                    <p className="ml-3">Interface described in the 'Models' section.</p>
                </li>
                <li className="py-2">
                    <strong>Factory</strong>: Used for creating predictable and reusable data objects or models.
                    <CodeBlock>
                        {`export default interface IFactory {
    create(...args: any[]): any;
}`}
                    </CodeBlock>
                </li>
                <li className="py-2"><strong>Provider</strong>: Base provider class for creating service providers.
                    <CodeBlock>
                        {`export interface IProvider {
    register(): Promise<void>;
    boot(): Promise<void>;
    getProviderName(): string | null;
}`}
                    </CodeBlock>
                </li>
                <li className="py-2"><strong>Repository</strong>: Base repository class for creating a centralized location for your queries.
                    <CodeBlock>
                        {`export interface IRepository<Model extends IModel = IModel> {
    collectionName: string;
    connection: string;
    modelCtor: ModelConstructor<Model>;
    query(): IDocumentManager;
    findOrFail: (filter: object) => Promise<Model>
    findById: (id: string) => Promise<Model | null>
    findOne: (query: object) => Promise<Model | null>
    findMany: (query: object, options?: object) => Promise<Model[]>
}`}
                    </CodeBlock>
                </li>
                <li className="py-2">
                    <p><strong>Service, Singletons</strong>: A useful service extendable that can be provided with configuration.</p>
                    <CodeBlock>
                        {`export default interface IService {
    getConfig(...args: any[]): any;
}

// Service Usage 
const myService = new MyService({ ... });

// Singleton Usage
const mySingleton = MySingleton.getInstance({ ... });`}
                    </CodeBlock>
                </li>
            </ul>

            <p>By extending these base classes, you ensure that your custom classes have a consistent structure and behavior, making your codebase more maintainable and easier to understand.</p>
        </article>
    );
}

export default Extendables;