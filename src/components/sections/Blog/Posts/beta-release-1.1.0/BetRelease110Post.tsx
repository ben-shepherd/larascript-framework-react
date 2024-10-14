import { IBlogPost } from '../../../../../interfaces/IBlog';
import '../../../../../styles/components/CodeBlock.scss';
import CodeBlock from "../../../../utils/CodeBlock";
import BlogPostContainer from "../../components/BlogPostContainer";

const BetRelease110Post = ({ post }: { post: IBlogPost }) => {
    return (
        <BlogPostContainer post={post}>
            <article>
                <div>
                    <h1>What's new in Larascript Framework?</h1>

                    <p>Beta Version: 1.1.0</p>

                    <h2 className="underline">Authentication and Authorization</h2>
                    <ul>
                        <li>Added permission groups, user groups, roles, and ApiToken scopes</li>
                        <li>Removed hasScope from Security</li>
                        <li>Made tokens configurable for expiration</li>
                    </ul>

                    <p>@src/config/auth.ts</p>
                    <div className="py-5">
                        <CodeBlock className='codeBlock__main'>
                            {`permissions: {

    /**
     * The default user group
     */
    user: {
        defaultGroup: GROUPS.User,
    },

    /**
     * The list of groups
     */
    groups: [
        {
            name: GROUPS.User,
            roles: [ROLES.USER],
            scopes: []
        },
        {
            name: GROUPS.Admin,
            roles: [ROLES.USER, ROLES.ADMIN],
            scopes: []
        }
    ]
}`}
                        </CodeBlock>
                    </div>

                    <h2 className="underline">Express and Routing</h2>
                    <ul>
                        <li>Added security rules to Express routes</li>
                        <li>Added Resource owner security rule</li>
                        <li>Added Rate limit security rule</li>
                        <li>Added Scopes security rule</li>
                        <li>Updated CurrentRequest to only store userId</li>
                        <li>Added pagination to route resource</li>
                        <li>Renamed 'name' to 'path' in IRouteResourceOptions</li>
                        <li>Added filters to  'show' and 'all' to RouteResources</li>
                        <li>Added pageSizeAllowOverride option</li>
                        <li>Refactored resource operations (index, show, create, update, delete) into services</li>
                    </ul>

                    <p>Example</p>
                    <div className="py-5">
                        <CodeBlock className='codeBlock__main'>
{`const blogRoutes = RouteGroup([
    ...RouteResource({
        resource: BlogPostModel,
        path: 'blog/posts',
        middlewares: [
            basicLoggerMiddleware(),
        ],
        security: [
            Security.never([RouteResourceTypes.SHOW, RouteResourceTypes.ALL]).authorized(),
            Security.never([RouteResourceTypes.SHOW, RouteResourceTypes.ALL]).resourceOwner(),
            Security.rateLimited(5)
        ],
        paginate: {
            pageSize: 10
        },
        searching: {
            fields: ['title', 'content'],
        }
    })
])
`}
                        </CodeBlock>
                    </div>

                    <h2 className="underline">Request Handling</h2>
                    <ul>
                        <li>Refactored CurrentRequest to RequestContext</li>
                        <li>Added ability to store request context in RequestContext over a request life cylce</li>
                        <li>Added ability to store information in RequestContext by IP Address</li>
                    </ul>

                    <div className="py-5">
                        <CodeBlock className='codeBlock__main'>
                            {`const userId = App.container('requestContext').getByRequest<string>(req, 'userId');`}
                        </CodeBlock>
                    </div>

                    <h2>Database and Models</h2>
                    <ul>
                        <li>Fixed migration failing when file missing</li>
                        <li>Added partial searching to Postgres Document Manager</li>
                        <li>Added partial searching to MongoDB DocumentManager</li>
                        <li>Fixed unhandled non-string type in Postgres builder</li>
                        <li>Added 'attr' method shorthand for setAttribute and getAttribute</li>
                        <li>Added dirty methods to models, updated data property</li>
                    </ul>

                    <h2 className="underline">Logging</h2>
                    <ul>
                        <li>Added loggerService using winston logger</li>
                        <li>Updated console methods to use new logger service</li>
                        <li>Turned off Sequelize package SQL query logging for production environments</li>
                    </ul>

                    <p>Example</p>
                    <div className="py-5">
                        <CodeBlock language="typescript">
                            {`App.container('logger').info('[App]: Started');
App.container('logger').error('[App]: Failed to start', err);`}
                        </CodeBlock>
                    </div>


                    <p>storage/logs/larascript.log</p>
                    <div className="py-5">
                        <CodeBlock className='codeBlock__main'>
                        {`2024-10-13 01:29:57 info: Registering ConsoleProvider 
2024-10-13 01:29:57 info: Registering EventProvider 
2024-10-13 01:29:57 info: Registering DatabaseProvider 
2024-10-13 01:29:57 info: Registering ExpressProvider 
2024-10-13 01:29:57 info: Registering AuthProvider 
2024-10-13 01:29:57 info: Registering MigrationProvider 
2024-10-13 01:29:57 info: Registering MakeProvider 
2024-10-13 01:29:57 info: Registering SetupProvider 
2024-10-13 01:29:57 info: Registering AppProvider 
2024-10-13 01:29:57 info: Booting DatabaseProvider 
2024-10-13 01:29:57 info: Booting ExpressProvider 
2024-10-13 01:29:57 info: Express successfully listening on port 5000 
2024-10-13 01:29:57 info: Registering MigrationProvider 
2024-10-13 01:29:57 info: Booting SetupProvider 
2024-10-13 01:29:57 info: Booting AppProvider 
2024-10-13 01:29:57 info: [Express] binding route GET: '/health' as 'health' 
2024-10-13 01:29:57 info: [Express] binding route POST: '/auth/login' as 'authLogin' 
2024-10-13 01:29:57 info: [Express] binding route POST: '/auth/create' as 'authCreate' 
2024-10-13 01:29:57 info: [Express] binding route PATCH: '/auth/user' as 'authUpdate' 
2024-10-13 01:29:57 info: [Express] binding route GET: '/auth/user' as 'authUser' 
2024-10-13 01:29:57 info: [Express] binding route POST: '/auth/revoke' as 'authRevoke' 
2024-10-13 01:29:57 info: [Express] binding route GET: '/' as 'index' 
2024-10-13 01:29:57 info: [App]: Started `}
                        </CodeBlock>
                    </div>

                    <h2 className="underline">Commands</h2>
                    <ul>
                        <li>Commands can be registered with configs in the same method</li>
                    </ul>

                    <h2 className="underline">Miscellaneous</h2>
                    <ul>
                        <li>Fixed arguments in ListRoutesCommand</li>
                        <li>Updated Observer with awaitable methods</li>
                        <li>Set app environment before loading providers</li>
                        <li>Added ResourceErrorService</li>
                        <li>Allow configurable migration model, uses different table for tests</li>
                        <li>Validator strips unknown properties from request body</li>
                        <li>Added changelist.md and bumped version to 1.1.0</li>
                    </ul>

                </div>
            </article>
        </BlogPostContainer>
    );
}

export default BetRelease110Post;
