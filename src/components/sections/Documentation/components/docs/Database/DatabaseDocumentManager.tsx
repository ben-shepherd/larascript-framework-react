import CodeBlock from "../../../../../utils/CodeBlock";

const DatabaseDocumentManager = () => {
    return (
        <article>

            <p>The document manager is responsible for retrieving, updating, inserting, and deleting documents in your database. It provides an abstraction layer over the database operations, making it easier to work with documents regardless of the underlying database system.</p>

            <p>You can access the document manager for a specific table like this:</p>

            <CodeBlock language="typescript">
{`const documentManager = App.container('db').documentManager().table('posts')`}
            </CodeBlock>

            <h5>IDocumentManager Interface</h5>

            <p>The <code>IDocumentManager</code> interface defines the following methods and properties:</p>

            <CodeBlock language="typescript">
{`export interface IDocumentManager {
    validator: IDocumentValidator;
    prepareDocument(document: IDatabaseDocument, options?: IPrepareOptions): IDatabaseDocument;
    table(table: string): IDocumentManager;
    findById<T>(id: string): Promise<T | null>;
    findOne<T>(...args: any[]): Promise<T | null>;
    findMany<T>(...args: any[]): Promise<T>;
    insertOne<T>(document: IDatabaseDocument, ...args: any[]): Promise<T>;
    insertMany<T>(documents: IDatabaseDocument[], ...args: any[]): Promise<T>;
    updateOne<T>(document: IDatabaseDocument, ...args: any[]): Promise<T>;
    updateMany<T>(documents: IDatabaseDocument[], ...args: any[]): Promise<T>;
    deleteOne<T>(document: IDatabaseDocument): Promise<T>;
    deleteMany<T>(documents: IDatabaseDocument[]): Promise<T>;
    truncate(): Promise<void>;
    belongsTo<T>(document: IDatabaseDocument, options: IBelongsToOptions): Promise<T | null>;
    hasMany<T>(document: IDatabaseDocument, options: IHasManyOptions): Promise<T>;
}`}
            </CodeBlock>

            <h5>Key Components</h5>

            <ul className="list-disc py-3">
                <li><strong>validator:</strong> An instance of <code>IDocumentValidator</code> used internally for document validation.</li>
                <li className="py-2"><strong>prepareDocument:</strong> An internal method to prepare documents before operations.</li>
                <li className="py-2"><strong>table(table: string):</strong> Specifies the table or collection to operate on.</li>
                <li className="py-2"><strong>findById, findOne, findMany:</strong> Methods for retrieving documents.</li>
                <li className="py-2"><strong>insertOne, insertMany:</strong> Methods for inserting new documents.</li>
                <li className="py-2"><strong>updateOne, updateMany:</strong> Methods for updating existing documents.</li>
                <li className="py-2"><strong>deleteOne, deleteMany:</strong> Methods for deleting documents.</li>
                <li className="py-2"><strong>truncate:</strong> Removes all documents from the table or collection.</li>
                <li className="py-2"><strong>belongsTo, hasMany:</strong> Methods for handling relationships between documents.</li>
            </ul>

            <p>The document manager uses generic types (<code>&lt;T&gt;</code>) for most methods, allowing you to specify the expected return type for better type safety.</p>

            <h5>Usage Example</h5>

            <CodeBlock language="typescript">
{`// Find a post by ID
const post = await App.container('db').documentManager().table('posts').findById<Post>('123');

// Insert a new post
const newPost = await App.container('db').documentManager().table('posts').insertOne<Post>({
    title: 'New Post',
    content: 'This is a new post.'
});

// Update a post
const updatedPost = await App.container('db').documentManager().table('posts').updateOne<Post>({
    id: '123',
    title: 'Updated Title'
});

// Delete a post
await App.container('db').documentManager().table('posts').deleteOne({ id: '123' });`}
            </CodeBlock>

            <p>The document manager provides a consistent interface for database operations across different database systems, simplifying your data access code and making it more portable.</p>

        </article>
    );
}

export default DatabaseDocumentManager;