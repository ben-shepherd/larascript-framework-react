import CodeBlock from "../../../../../utils/CodeBlock";

const AdvancedRoutingSummary = () => {
    return (
        <article>
            <p>
                The routing system offers a powerful and flexible way to define your application's endpoints. It excels in three key areas: quick route definition, automatic CRUD route generation for models, and built-in security rules. This approach significantly reduces boilerplate code and enhances the overall structure and security of your application.
            </p>

            <h2>Quick Route Definition</h2>
            <p>
                Routes can be quickly defined using a declarative syntax. This method allows you to specify the route name, HTTP method, path, and action in a single, easy-to-read structure. For example:
            </p>

            <CodeBlock language="typescript">
{`Route({
    name: 'index',
    method: 'get',
    path: '/',
    action: (req: Request, res: Response) => {
        res.send('OK!')
    }
})`}
            </CodeBlock>

            <h2>Automatic CRUD Routes for Models</h2>
            <p>
                The system can automatically generate CRUD (Create, Read, Update, Delete) routes for your models using the RouteResource function. This feature saves time and ensures consistency across your API. Simply specify the model and a base name for the routes:
            </p>

            <CodeBlock language="typescript">
{`RouteResource({
    resource: BlogPostModel,
    name: 'blog/post'
})`}
            </CodeBlock>

            <h2>Built-in Security Rules</h2>
            <p>
                Security is a crucial aspect of any application. The routing system provides built-in security rules that can be easily applied to routes or groups of routes. These rules can handle common scenarios like resource ownership, role-based access, and rate limiting:
            </p>

            <CodeBlock language="typescript">
{`security: [
    Security.resourceOwner(),
    Security.hasRole('user'),
    Security.rateLimited(1000, 60)
]`}
            </CodeBlock>

            <h2>Putting It All Together</h2>
            <p>
                Here's how these features come together in a complete routing setup:
            </p>

            <CodeBlock language="typescript">
{`const apiRoutes = RouteGroup([
    Route({
        name: 'index',
        method: 'get',
        path: '/',
        action: (req: Request, res: Response) => {
            res.send('OK!')
        }
    }),
    ...RouteResource({
        resource: BlogPostModel,
        name: 'blog/post',
        security: [
            Security.resourceOwner(),
            Security.hasRole('admin'),
            Security.rateLimited(1000, 60)
        ],
        scopes: ['customScope'],
        enableScopes: true
    })
])`}
            </CodeBlock>

            <p>
                This example demonstrates how to combine a custom route, automatically generated CRUD routes for a BlogPost model, and various security rules. The result is a concise, yet powerful routing configuration that covers a wide range of common use cases.
            </p>
        </article>
    );
}

export default AdvancedRoutingSummary;