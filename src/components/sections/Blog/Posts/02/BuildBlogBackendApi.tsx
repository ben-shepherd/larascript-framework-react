import config from '../../../../../config/config';
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
                    <h2 className="underline">Introduction</h2>
                    <p>
                        In this tutorial, we'll walk through the process of creating a robust backend API for a blog using Larascript. This guide is designed for developers who are interested in learning how to build APIs with the Larascript framework.
                    </p>
                    <p>
                        We'll cover the entire journey, starting from setting up Models and Routes, to implement the necessary logic for a fully functional blog API.
                        By the end of this tutorial, you'll have a solid understanding of how to leverage Larascript to create efficient and scalable backend solutions for your API projects.
                    </p>
                </section>

                <section>
                    <h2 className="underline">What We'll Build</h2>
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
                    <h2 className="underline">Quick Setup (~5 minutes)</h2>
                    <p>Click the button below to see our quick setup guide. Once you are already, come back here to continue the tutorial.</p>
                    <p>For this tutorial, we'll be using <strong>Postgres</strong> as our default database.</p>
                    <a href="https://github.com/ben-shepherd/larascript-framework?tab=readme-ov-file#quick-setup-5-minutes" target="_blank">
                        <button>
                            Quick Setup Guide
                        </button>
                    </a>

                </section>

                <section>

                    <h2 className="underline">The Blog Model</h2>

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
                        <li>Update our <code className='code__secondary code__small'>IBlogPostModalData</code> interface with 'title', 'body', 'userId', 'createdAt' and 'updatedAt'.</li>
                        <li>Update the <code className='code__secondary code__small'>fields</code> string array on our model. This will allow these fields to be settable.</li>
                        <li>Remove comments and any unused fields such as json, dates, timestamps (which are set by default).</li>
                    </ul>

                    <p>Our updated model should look like this:</p>

                    <CodeBlock className='codeBlock__main'>
                        {`interface IBlogPostModelData extends IModelData {
    title: string;
    body: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

class BlogPostModel extends Model<IBlogPostModelData> {

    fields: string[] = [
        'title',
        'body',
        'userId',
        'createdAt',
        'updatedAt',
    ]

    public guarded: string[] = [
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
                    <h2 className="underline">Database Migrations</h2>

                    <p>Now that our model has been added, we need to tell postgres that the schema needs to be created. This can be achieved by utilising migrations.</p>

                    <p>We will use the make migration command to achieve this:</p>

                    <pre>
                        <code className="code__primary">
                            yarn dev make:migration --name=CreateBlogPostTable
                        </code>
                    </pre>

                    <p>This will create a file in the <code className="code__secondary code__small">@src/app/migrations</code> directory.</p>

                    <p>Now that our migration file has been created, the first two lines we'll add is to define our schema and fetch the models table name:</p>

                    <CodeBlock className='codeBlock__main'>
                        {`  // Get the schema helper
    const schema = App.container('db').schema();

    // Get the table name from the model
    const tableName = (new BlogPostModel).table;`}
                    </CodeBlock>

                    <p>Once these lines have been added, we can define our table structure.</p>

                    <p>The migration will look something like this:</p>

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
            userId: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
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

                <section>

                    <h2 className="underline">Defining The Routes</h2>

                    <p>Now that our model and migrations have been created, we can define our routes.</p>

                    <p>We will use the built in command to make our file:</p>

                    <pre>
                        <code className="code__primary">
                            yarn dev make:route --name=BlogRoutes
                        </code>
                    </pre>

                    <p>This will create a file in the <code className="code__secondary code__small">@src/app/routes</code> directory.</p>

                    <p>Our file will look something like this:</p>

                    <CodeBlock className='codeBlock__main'>
                        {`import Route from "@src/core/domains/express/routing/Route";
import RouteGroup from "@src/core/domains/express/routing/RouteGroup";
import { Request, Response } from 'express';

/**
 * Note:Remember to bind your routes to express in the AppProvider (@src/app/providers/AppProvider)
 * 
 * Example:
 *     App.container('express').bindRoutes(blogRoutes);
 */
const blogRoutes = RouteGroup([
    Route({
        name: 'index',
        method: 'get',
        path: '/',
        action: (req: Request, res: Response) => {
            res.send({
                success: true
            })
        } 
    }),
])

export default blogRoutes;`}
                    </CodeBlock>

                    <p>To define our routes for the newly created BlogPostModel, we will make the following changes:</p>

                    <ul>
                        <li><strong>Remove comments</strong></li>
                        <li><strong>Remove the default route</strong></li>
                        <li><strong>RouteResource</strong> - Import <code className="code__secondary code__small">RouteResource</code> for defining our CRUD endpoints</li>
                        <li><strong>Resource</strong> - Set our BlogPostModel as the resource</li>
                        <li><strong>Path</strong> - Set the path to 'blog/posts'</li>
                        <li><strong>Security</strong> - Define our security rules</li>
                        <li><strong>resourceOwner</strong> - Creates a link between our BlogPostModel and the authenticated user</li>
                        <li><strong>authorized</strong> - Define authorization security on routes ('create', 'update', 'delete')</li>
                    </ul>


                    <CodeBlock className='codeBlock__main'>
                        {`import BlogPostModel from "@src/app/models/BlogModel";
import RouteGroup from "@src/core/domains/express/routing/RouteGroup";
import RouteResource, { RouteResourceTypes } from "@src/core/domains/express/routing/RouteResource";
import Security from "@src/core/domains/express/services/Security";

const blogRoutes = RouteGroup([
    ...RouteResource({
        resource: BlogPostModel,
        path: 'blog/posts',
        security: [
            Security.never([RouteResourceTypes.SHOW, RouteResourceTypes.ALL]).authorized(),
            Security.never([RouteResourceTypes.SHOW, RouteResourceTypes.ALL]).resourceOwner(),
        ]
    })
])

export default blogRoutes;`}
                    </CodeBlock>

                    <p>By adding a <code className="code__secondary code__small">never()</code> condition to our <code className="code__secondary code__small">authorized</code> and <code className="code__secondary code__small">resourceOwner</code> security rule, we can essentially turn off protection for these routes.
                        This makes sense for this model as other users can still view the blog posts.</p>


                    <h2 className="underline">Registering The Routes</h2>

                    <p>The next step is step is to go to our <code className="code__secondary code__small">@src/app/providers/AppProvider.ts</code> file register these routes with Express.</p>

                    <p>We will add a new line at the end of our <code className="code__secondary code__small">addApiMethods()</code> function to register our routes.</p>

                    <CodeBlock className='codeBlock__main'>
{`/**
* Setup routing files
* Binds API routes to the Express instance if ExpressProvider is ready
* @private
*/
private addApiRoutes(): void {

    // ...
    
    // Bind routes
    expressService.bindRoutes(healthRoutes);
    expressService.bindRoutes(authService.getAuthRoutes() ?? [])
    expressService.bindRoutes(apiRoutes);
    expressService.bindRoutes(blogRoutes); // Addded this line
}`}
                    </CodeBlock>

                    <p>Lets confirm everything is working by running our app with <code className="code__secondary code__small">yarn dev</code> command.</p>

                    <p>We should see the blog routes now appear in the console during the boot process:</p>

                    <CodeBlock className='codeBlock__main'>
{`[Express] binding route GET: '/health' as 'health'
[Express] binding route POST: '/auth/login' as 'authLogin'
[Express] binding route POST: '/auth/create' as 'authCreate'
[Express] binding route PATCH: '/auth/user' as 'authUpdate'
[Express] binding route GET: '/auth/user' as 'authUser'
[Express] binding route POST: '/auth/revoke' as 'authRevoke'
[Express] binding route GET: '/' as 'index'
[Express] binding route GET: '/blog/posts' as 'blog/posts.index'
  SECURITY:  with partial scopes: [BlogPostModel:read, BlogPostModel:all]  (scopes disabled)
  SECURITY:  authorized  with never: [show, all]
  SECURITY:  resourceOwner
[Express] binding route GET: '/blog/posts/:id' as 'blog/posts.show'
  SECURITY:  with partial scopes: [BlogPostModel:read, BlogPostModel:all]  (scopes disabled)
  SECURITY:  authorized  with never: [show, all]
  SECURITY:  resourceOwner
[Express] binding route PUT: '/blog/posts/:id' as 'blog/posts.update'
  SECURITY:  with partial scopes: [BlogPostModel:write, BlogPostModel:all]  (scopes disabled)
  SECURITY:  authorized  with never: [show, all]
  SECURITY:  resourceOwner
[Express] binding route DELETE: '/blog/posts/:id' as 'blog/posts.destroy'
  SECURITY:  with partial scopes: [BlogPostModel:delete, BlogPostModel:all]  (scopes disabled)
  SECURITY:  authorized  with never: [show, all]
  SECURITY:  resourceOwner
[Express] binding route POST: '/blog/posts' as 'blog/posts.create'
  SECURITY:  with partial scopes: [BlogPostModel:create, BlogPostModel:all]  (scopes disabled)
  SECURITY:  authorized  with never: [show, all]
  SECURITY:  resourceOwner
[App]: Started`}
                    </CodeBlock>
                </section>

                <h2 className="underline">Testing with Postman Collection</h2>

                <p>Now that all your routes are registered, we can start testing them with Postman.</p>

                <p>Download the postman collection below:</p>

                <a href={`${config.websiteUrl}/data/LarascriptFramework.blog_tutorial_example.postman_collection.json`} download="LarascriptFramework.blog_tutorial_example.postman_collection.json" target="_blank">
                    <button>
                        Download Collection
                    </button>
                </a>

                <p>Once imported with Postman, we recommend this flow:</p>

                <ul>
                    <li>Make sure your App is running in development mode with <code className="code__secondary code__small">yarn dev</code></li>
                    <li>Create an account using 'Auth Create'. The credentials are prefilled, and the authorization token will be saved to the collection variables.</li>
                    <li>You can now use 'Create blog post', the blogPostId will be saved to the collection variables.</li>
                    <li>You can now use the 'show', 'update' and 'delete' endpoints.</li>
                </ul>


                <p></p>
            </article>
        </BlogPostContainer>
    );
}

export default BuildBlogBackendApi;