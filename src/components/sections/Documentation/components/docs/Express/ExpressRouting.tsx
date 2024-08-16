import CodeBlock from "../../../../../utils/CodeBlock";

const Routing = () => {
    return (
        <article>
            <p>The application's routing structure is centralized in the <code>@src/app/routes</code> directory. This directory serves as the main entry point for defining and organizing all routes in your application.</p>
            
            <h3>Adding a New Route File</h3>
            
            <p>To add a new routing file to your application:</p>
            
            <ol>
                <li>Create a new route file in the appropriate directory.</li>
                <li>Import and add the new route to the <code>routes.ts</code> file.</li>
            </ol>
            
            <p>For example, to add a new User route:</p>
            
            <CodeBlock language="typescript">
                {`import updateUser from "@src/app/actions/updateUser";
import UpdateUserValidator from "@src/app/validators/UpdateUserValidator
import Route from "@src/core/domains/express/routing/Route";
import RouteGroup from "@src/core/domains/express/routing/RouteGroup";
import { authorize } from "../../express/middleware/authorize";

const routes = RouteGroup([
    Route({
        name: 'userUpdate',
        method: 'patch',
        path: '/api/user/update',
        action: updateUser,
        middlewares: [authorize()],
        validator: UpdateUserValidator
    }),
])

export default routes;`}
            </CodeBlock>
            
            <h3>Generating Route Files</h3>
            
            <p>To streamline the process of creating new route files, you can use the provided command-line tool:</p>
            
            <CodeBlock language="bash">
                yarn run dev -- make:routes --name=User
            </CodeBlock>
            
            <p>This command will:</p>
            <ul>
                <li>Generate a new route file with boilerplate code.</li>
                <li>Name the file based on the provided <code>--name</code> parameter (e.g., <code>userRoutes.ts</code>).</li>
                <li>Place the file in the <code>@src/app/routes/userRoutes.ts</code>.</li>
            </ul>
 
            <p><strong>Note:</strong> Remember to follow the established naming conventions and file structure when adding new routes to maintain consistency across your application.</p>
        </article>
    );
}

export default Routing;