import { IBlogPost } from '../../../../../interfaces/IBlog';
import '../../../../../styles/components/CodeBlock.scss';
import CodeBlock from "../../../../utils/CodeBlock";
import BlogPostContainer from '../../components/BlogPostContainer';

type Props = {
    post: IBlogPost
}

const BuildBlogBackendApi = ({ post }: Props) => {
    return (
        <BlogPostContainer post={post} responsiveClassNames='w-full lg:px-0 md:w-4/5 lg:w-3/5 xl:w-3/5'>
            <article>
                <h1>Creating a Blog API with Larascript</h1>

                <section>
                    <h2>Table of Contents</h2>
                    <ul>
                        <li>Todo</li>
                    </ul>
                </section>

                <section>
                    <h2>Introduction</h2>
                    <p>
                        In this tutorial, we'll walk through the process of creating a robust backend API for a blog using Larascript. This guide is designed for developers who are interested in learning how to build APIs with the Larascript framework.
                    </p>
                    <p>
                        We'll cover the entire journey, starting from setting up a new repository to implementing the necessary logic for a fully functional blog API. By the end of this tutorial, you'll have a solid understanding of how to leverage Larascript to create efficient and scalable backend solutions for your API projects.
                    </p>
                </section>

                <section>
                    <h2>What We'll Build</h2>
                    <p>
                        Our goal is to create a backend API that supports common blog functionalities, including:
                    </p>
                    <ul>
                        <li>Creating, reading, updating, and deleting blog posts</li>
                        <li>Managing user authentication and authorization</li>
                        <li>Handling comments on blog posts</li>
                        <li>Implementing basic search functionality</li>
                    </ul>
                </section>

                <section>
                    <h2>Quick Setup (~5 minutes)</h2>
                    <p>Click the button below to see our quick setup guide. Once you are already, come back here to continue the tutorial.</p>
                    <p>For this tutorial, we'll be using <strong>Postgres</strong> as our default database.</p>
                    <a href="https://github.com/ben-shepherd/larascript-framework?tab=readme-ov-file#quick-setup-5-minutes" target="_blank">
                        <button>
                            Quick Setup Guide
                        </button>
                    </a>

                </section>

                <section>

                    <h2>The Blog Model</h2>

                    <p>Now that we've got our API setup, the first step in creating our Blog API is to create models.</p>

                    <p>This can be done manually, but we can automate this process by using the built in make command.</p>

                    <p>Open your terminal and navigate to your project:</p>

                    <pre>
                        <code className="code__primary">
                            cd /path/to/project
                        </code>
                    </pre>

                    <p>Run the make model command and specify the name:</p>

                    <pre>
                        <code className="code__primary">
                            yarn dev make:model --name=Blog
                        </code>
                    </pre>

                    <p>The model will be created in <code className="code__secondary code__small">@src/app/models</code> directory.</p>

                    <p>Your model will look something like this:</p>

                    <CodeBlock className='codeBlock__main'>
                        {`
import Model from '@src/core/base/Model';
import IModelData from '@src/core/interfaces/IModelData';

/**
 * Add your models fields here, e.g.
 *
 * foo: string;
 * bar: number;
 * baz: boolean;
 */
interface IBlogPostModelData extends IModelData {
    
}

class BlogPostModel extends Model<IBlogPostModelData> {

    // Add your models fields here, e.g: ['foo', 'bar', 'baz']
    fields: string[] = []

    // Add your guarded fields here, e.g: ['sensitiveField']
    guarded: string[] = [];

    // Add your JSON fields heere, e.g. ['arrayOfObjects']
    json: string[] = [];

    // Add your date fields here, e.g: ['postedAt']
    dates: string[] = [];

    // Enable or disable automatic generation of createdAt, updatedAt fields
    timestamps: boolean = true;

    /**
     * Constructs a new instance of the Test model.
     * 
     * @param {IBlogPostModelData | null} data - Initial data to populate the model.
     */
    constructor(data: IBlogPostModelData | null = null) {
        super(data)
    }

}

export default BlogPostModel`}
                    </CodeBlock>

                    <p>We will make the following changes:</p>

                    <ul>
                        <li>Update our <code className='code__secondary code__small'>IBlogPostModalData</code> interface with 'title', 'body' and 'userId'</li>
                        <li>Update the <code className='code__secondary code__small'>fields</code> string array on our model. This will allow these fields to be settable.</li>
                        <li>Remove comments and any unused fields such as guarded, json, dates, timestamps.</li>
                    </ul>

                    <p>Our updated model should look like this:</p>

                    <CodeBlock className='codeBlock__main'>
{`interface IBlogPostModelData extends IModelData {
    title: string;
    body: string;
    userId: string;
}

class BlogPostModel extends Model<IBlogPostModelData> {

    fields: string[] = [
        'title',
        'body',
        'userId'
    ]

    constructor(data: IBlogPostModelData | null = null) {
        super(data)
    }

}
`}
                    </CodeBlock>

                </section>

                <section>
                    <h2>Database Migrations</h2>

                    <p>Now that our model has been added, we need to tell postgres that the schema needs to be created. This can be achieved by utilising migrations.</p>

                    <p>We will use the make migration command to achieve this:</p>

                    <pre>
                        <code className="code__primary">
                            yarn dev make:migration --name=CreateBlogPostTable
                        </code>
                    </pre>

                    <p>This will create a file in the <code className="code__secondary code__small">@src/app/migrations</code> directory.</p>

                    <p>Now that our migration file has been created, the first line we'll add is the schema helper service.</p>

                    <p>We can also retrieve the table name from our model.</p>

                    <CodeBlock className='codeBlock__main'>
{`  // Get the schema helper
    const schema = App.container('db').schema();

    // Get the table name from the model
    const tableName = (new BlogPostModel).table;`}
                    </CodeBlock>

                    <p>Using this schema helper, define our up and down methods:</p>

                    <CodeBlock className='codeBlock__main'>
{`export class CreateBlogPostTableMigration extends BaseMigration {

    async up(): Promise<void> {

        // Get the schema helper
        const schema = App.container('db').schema();

        // Get the table name from the model
        const tableName = (new BlogPostModel).table;

        // Define our schema
        await schema.createTable(tableName, {
            title: DataTypes.STRING,
            body: DataTypes.TEXT,
            userId: DataTypes.STRING
        })

    }

    async down(): Promise<void> {

        // Get the schema helper
        const schema = App.container('db').schema();

        // Get the table name from the model
        const tableName = (new BlogPostModel).table;

        // Drop the table
        await schema.dropTable(tableName);
    }

}`}
                    </CodeBlock>
                </section>

                <p>Todo: Explain observer purpose</p>
            </article>
        </BlogPostContainer>
    );
}

export default BuildBlogBackendApi;