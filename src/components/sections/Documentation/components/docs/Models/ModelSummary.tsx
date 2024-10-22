import CodeBlock from "../../../../../utils/CodeBlock";

const Models = () => {
    return (
        <article>

            <p>Models provide an intuitive and efficient way to interact with your database data. They encapsulate the structure and behavior of your database entities, allowing for easy manipulation and retrieval of data.</p>

            <h3>Creating a New Model</h3>

            <p>You can create a new model using the following command:</p>

            <CodeBlock language="bash">
                {`yarn dev make:model --name=YourModelName`}
            </CodeBlock>

            <p>This command will generate the necessary files in the <code>@src/app/models</code> directory. These files typically include the model class itself and any associated interfaces or types.</p>

            <h3>IModel Interface</h3>

            <p>The <code>IModel</code> interface defines the structure and capabilities of a model:</p>

            <CodeBlock language="typescript">
            {`export interface IModel<Attributes extends IModelAttributes = IModelAttributes> extends IWithObserve {
    connection: string;
    primaryKey: string;
    table: string;
    fields: string[];
    guarded: string[];
    attributes: Attributes | null;
    dates: string[];
    timestamps: boolean;
    json: string[];
    observeProperties: Record<string, string>;
    prepareDocument<T = object>(): T;
    getDocumentManager(): IDocumentManager;
    getId(): string | undefined;
    attr<K extends keyof Attributes = keyof Attributes>(key: K, value?: unknown): Attributes[K] | null | undefined
    setAttribute(key: keyof Attributes, value: any): void;
    getAttribute(key: keyof Attributes): any;
    getOriginal<K extends keyof Attributes = keyof Attributes>(key: K): Attributes[K] | null
    isDirty(): boolean;
    getDirty(): Record<keyof Attributes, any> | null
    setTimestamp(dateTimeField: string, value: Date): void;
    fill(data: Partial<Attributes>): void;
    getData(options: GetDataOptions): Attributes | null;
    refresh(): Promise<Attributes | null>;
    update(): Promise<void>;
    save(): Promise<void>;
    delete(): Promise<void>;
    belongsTo<T extends IModel = IModel>(foreignModel: ICtor<T>, options: IBelongsToOptions): Promise<T | null>;
    hasMany<T extends IModel = IModel>(foreignModel: ICtor<T>, options: IHasManyOptions): Promise<T[]>;
}`}
            </CodeBlock>

            <h5>Key Properties and Methods</h5>

            <ul className="list-disc py-3">
                <li className="py-2"><strong>connection, table, primaryKey:</strong> Define the database connection, table name, and primary key field.</li>
                <li className="py-2"><strong>getId:</strong> Get the ID of the model.</li>
                <li className="py-2"><strong>fields, guarded:</strong> Specify which fields are part of the model and which should be protected from mass assignment.</li>
                <li className="py-2"><strong>dates, timestamps:</strong> Handle date and timestamp fields.</li>
                <li className="py-2"><strong>json:</strong> Handles fields that are serialized as JSON.</li>
                <li className="py-2"><strong>setAttribute, getAttribute:</strong> Methods for getting and setting individual field values.</li>
                <li className="py-2"><strong>attr:</strong> Short hand for getting and setting field values.</li>
                <li className="py-2"><strong>fill:</strong> Populate the model with data.</li>
                <li className="py-2"><strong>save, update, delete:</strong> Perform database operations.</li>
                <li className="py-2"><strong>belongsTo, hasMany:</strong> Define relationships with other models.</li>
                <li className="py-2"><strong>getDirty:</strong> Return the dirty attributes.</li>
                <li className="py-2"><strong>isDirty:</strong> Check if the model has any dirty attributes.</li>
                <li className="py-2"><strong>refresh:</strong> Refresh the model's data.</li>
                <li className="py-2"><strong>prepareDocument:</strong> Prepare the model for serialization.</li>
                <li className="py-2"><strong>getDocumentManager:</strong> Get the document manager for the model.</li>
                <li className="py-2"><strong>getData:</strong> Get the model's data.</li>
                <li className="py-2"><strong>getOriginal:</strong> Get the model's original data.</li>
            </ul>

            <h3>IModelData Interface</h3>

            <p>The <code>IModelData</code> interface provides a base template for model data:</p>

            <CodeBlock language="typescript">
{`export default interface IModelData {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    [key: string]: any;
}`}
            </CodeBlock>

            <p>This interface includes common fields like <code>id</code>, <code>createdAt</code>, and <code>updatedAt</code>, while allowing for additional fields through the index signature <code>[key: string]: any</code>.</p>

            <p>When creating interfaces for your model's data, you should extend this base <code>IModelData</code> interface. For example:</p>

            <CodeBlock language="typescript">
{`interface IUserData extends IModelData {
    name: string;
    email: string;
    password: string;
    // Add any other user-specific fields
}`}
            </CodeBlock>

            <p>By extending <code>IModelData</code>, your model's data interface inherits the common fields and maintains consistency across your application's data structures.</p>

        </article>
    );
}

export default Models;