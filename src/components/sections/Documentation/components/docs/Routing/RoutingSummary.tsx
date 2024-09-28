import CodeBlock from "../../../../../utils/CodeBlock";

const RoutingSummary = () => {
    return (
        <article>
            <p>
                The routing system offers a powerful and flexible way to define your application's endpoints. It excels in three key areas: quick route definition, automatic CRUD route generation for models, and built-in security rules. This approach significantly reduces boilerplate code and enhances the overall structure and security of your application.
            </p>

            <h2>Quick Route Definition</h2>
            <p>
                Routes can be quickly defined using a declarative syntax. This method allows you to specify the route name, HTTP method, path, and action in a single, easy-to-read structure. For example:
            </p>
            <p>This file would exist here <code>@src/app/routes/userRoutes.ts</code>.</p>
            
            <CodeBlock language="typescript">
{`const myRoutes = RouteGroup([
    Route({
        name: 'index',
        method: 'get',
        path: '/example-route',
        action: exampleRouteAction,
        middlewares: [authorize()],
        validator: ExampleValidator,
    }),
])

export default userRoutes;`}
            </CodeBlock>
        
            <h2>Route Interface</h2>

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

            <h2>Binding Routes to Express</h2>

            <p>Navigate to <code>@src/core/providers/AppProvider.ts</code> and use the following to bind your routes:</p>

            <CodeBlock language="typescript">
{`export default class AppProvider extends BaseProvider {

    // ...

    public async boot(): Promise<void> {
        /**
         * Register your routes 
         */
        App.container('express').bindRoutes(routes);
        App.container('express').bindRoutes(myRoutes);    
    }
}`}
            </CodeBlock>
 
            <p>Maintain consistency by following established naming conventions and file structure when adding new routes.</p>
        </article>
    );
}

export default RoutingSummary;