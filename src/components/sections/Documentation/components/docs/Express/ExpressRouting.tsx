import CodeBlock from "../../../../../utils/CodeBlock";

const Routing = () => {
    return (
        <article>
            <p>Routes are centralized in <code>@src/app/routes</code>.</p>

            <p>Generate new route files using:</p>
            
            <CodeBlock language="bash">
                yarn dev -- make:routes --name=Blog
            </CodeBlock>

            <p>This creates <code>@src/app/routes/userRoutes.ts</code> with boilerplate code.</p>
            
            <h3>Example Routing File</h3>
            
            <CodeBlock language="typescript">
{`const userRoutes = RouteGroup([
    Route({
        name: 'index',
        method: 'get',
        path: '/blog/update',
        action: updateBlog,
        middlewares: [authorize()],
        validator: UpdateBlogValidator,
    }),
])

export default userRoutes;`}
            </CodeBlock>
        
            <h3>Route Interface</h3>

            <p>Each route is defined using the following interface:</p>

            <CodeBlock language="typescript">
{`interface IRoute {
    name: string;
    path: string;
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    action: IRouteAction;
    middlewares?: Middleware[];
    validator?: ValidatorCtor;
    validateBeforeAction?: boolean;
}`}
            </CodeBlock>

            <ul className="list-disc py-3">
                <li><strong>name:</strong> Identifier for the route</li>
                <li><strong>path:</strong> URI for the route</li>
                <li><strong>method:</strong> HTTP request type (get, post, put, patch, delete)</li>
                <li><strong>action:</strong> Function to handle the route logic</li>
                <li><strong>middlewares:</strong> Array of middleware functions to process the request before it reaches the action</li>
                <li><strong>validator:</strong> Validator class to validate the incoming request body</li>
                <li><strong>validateBeforeAction:</strong> Defaults to true. If set to false, validation will not occur before reaching the action, allowing manual handling of validation checks</li>
            </ul>

            <h3>Binding Routes</h3>

            <p>Bind routes to Express in your App provider:</p>

            <CodeBlock language="typescript">
{`export default class AppProvider extends BaseProvider {

    // ...

    public async boot(): Promise<void> {
        /**
         * Register your routes 
         */
        App.container('express').bindRoutes(routes);
        App.container('express').bindRoutes(userRoutes);    
    }
}`}
            </CodeBlock>
 
            <p>Maintain consistency by following established naming conventions and file structure when adding new routes.</p>
        </article>
    );
}

export default Routing;