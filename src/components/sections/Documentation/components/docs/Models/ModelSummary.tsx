import CodeBlock from "../../../../../utils/CodeBlock";

const Models = () => {
    return (
        <article>

            <p>Models provide an intuitive and efficient way to interact with your database data. They encapsulate the structure and behavior of your database entities, allowing for easy manipulation and retrieval of data.</p>

            <h3>Creating a New Model</h3>

            <p>You can create a new model using the following command:</p>

            <CodeBlock language="bash">
                {`yarn dev -- make:model --name=YourModelName`}
            </CodeBlock>

            <p>This command will generate the necessary files in the <code>@src/app/models</code> directory. These files typically include the model class itself and any associated interfaces or types.</p>

            <h3>IModel Interface</h3>

            <p>The <code>IModel</code> interface defines the structure and capabilities of a model:</p>

            <CodeBlock language="typescript">
                {`export interface IModel<Data extends IModelData = IModelData> extends IWithObserve {
    connection: string;
    primaryKey: string;
    table: string;
    fields: string[];
    guarded: string[];
    data: Data | null;
    dates: Dates;
    timestamps: boolean;
    json: string[];
    observeProperties: Record<string, string>;
    prepareDocument<T = object>(): T;
    getDocumentManager(): IDocumentManager;
    getId(): string | undefined;
    setAttribute(key: keyof Data, value: any): void;
    getAttribute(key: keyof Data): any;
    setTimestamp(dateTimeField: string, value: Date): void;
    fill(data: Partial<Data>): void;
    getData(options: GetDataOptions): Data | null;
    refresh(): Promise<Data | null>;
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
                <li className="py-2"><strong>fields, guarded:</strong> Specify which fields are part of the model and which should be protected from mass assignment.</li>
                <li className="py-2"><strong>data:</strong> Holds the actual data of the model instance.</li>
                <li className="py-2"><strong>dates, timestamps:</strong> Handle date and timestamp fields.</li>
                <li className="py-2"><strong>json:</strong> Handles fields that are serialized as JSON.</li>
                <li className="py-2"><strong>setAttribute, getAttribute:</strong> Methods for getting and setting individual field values.</li>
                <li className="py-2"><strong>fill:</strong> Populate the model with data.</li>
                <li className="py-2"><strong>save, update, delete:</strong> Perform database operations.</li>
                <li className="py-2"><strong>belongsTo, hasMany:</strong> Define relationships with other models.</li>
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

            <h3>Observer Pattern</h3>

            <p>Models can utilize the observer pattern by extending the <code>withObserver</code> class. This adds observer logic to the model, which can be enabled by adding the following line in the constructor of your model:</p>

            <CodeBlock language="typescript">
{`constructor(data: IModelData | null = null) {
    super(data);
    this.observeWith(MyModelObserver);
}`}
            </CodeBlock>

            <p>This allows you to implement custom logic that runs when certain events occur on the model, such as creation, update, or deletion.</p>

            <h3>Usage Example</h3>

            <CodeBlock language="typescript">
                {`import { BaseModel } from '@src/core/base/BaseModel';
import UserObserver from './UserObserver';

export default class User extends BaseModel<IUserData> {
    protected connection = 'default';
    protected table = 'users';
    protected primaryKey = 'id';
    protected fields = ['id', 'name', 'email', 'password'];
    protected guarded = ['password'];
    
    constructor(data?: Partial<IUserData>) {
        super(data);
        this.observeWith(UserObserver);
    }

    // Custom methods can be added here
    fullName(): string {
        return \`\${this.getAttribute('firstName')} \${this.getAttribute('lastName')}\`;
    }
}

// Usage
const user = new User({ name: 'John Doe', email: 'john@example.com' });
await user.save();

const users = await User.getDocumentManager().findMany<User>();
`}
            </CodeBlock>

            <p>By using models, you can interact with your database in an object-oriented manner, making your code more readable, maintainable, and less prone to errors. The built-in methods handle the complexities of database operations, allowing you to focus on your application logic.</p>

        </article>
    );
}

export default Models;