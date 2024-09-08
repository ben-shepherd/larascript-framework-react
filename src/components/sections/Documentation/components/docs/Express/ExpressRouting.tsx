import CodeBlock from "../../../../../utils/CodeBlock";

const Routing = () => {
    return (
        <article>
            <p>Routes are centralized in <code>@src/app/routes</code>.</p>

            <p>Generate new route files using:</p>
            
            <CodeBlock language="bash">
                yarn run dev -- make:routes --name=Blog
            </CodeBlock>

            <p>This creates <code>@src/app/routes/userRoutes.ts</code> with boilerplate code.</p>
            
            <h3>Example Routing File</h3>
            
            <CodeBlock language="typescript">
{`const UserRoutes = RouteGroup([
    Route({
        name: 'index',
        method: 'get',
        path: '/blog/update',
        action: updateBlog,
        middlewares: [authorize()],
        validator: UpdateBlogValidator,
    }),
])

export default UserRoutes;`}
            </CodeBlock>
        
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