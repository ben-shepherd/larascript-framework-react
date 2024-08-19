import CodeBlock from "../../../../../utils/CodeBlock";

const Routing = () => {
    return (
        <article>
            <p>The application's routing structure is centralized in the <code>@src/app/routes</code> directory. This directory serves as the main entry point for defining and organizing all routes in your application.</p>
            
            <h3>Generating Route Files</h3>
            
            <p>To streamline the process of creating new route files, you can use the provided command-line tool:</p>
            
            <CodeBlock language="bash">
                yarn run dev -- make:routes --name=User
            </CodeBlock>

            <p>This command will:</p>
            <ul className="list-disc">
                <li>Generate a new route file with boilerplate code.</li>
                <li>Name the file based on the provided <code>--name</code> parameter (e.g., <code>userRoutes.ts</code>).</li>
                <li>Place the file in the <code>@src/app/routes/userRoutes.ts</code>.</li>
            </ul>
            
            <p>For example, to add a new User route:</p>
            
            <CodeBlock language="typescript">
                {`import Route from "@src/core/domains/express/routing/Route";
import RouteGroup from "@src/core/domains/express/routing/RouteGroup";
import UpdateUserValidator from '@src/app/validators/user/UpdateUserValidator';
import updateUser from '@src/app/actions/updateUser';
import { authorize } from '@src/core/domains/express/middleware/authorize';

const UserRoutes = RouteGroup([
    Route({
        name: 'index',
        method: 'get',
        path: '/api/user/update',
        action: updateUser,
        middlewares: [authorize()],
        validator: UpdateUserValidator,
    }),
])

export default UserRoutes;;`}
            </CodeBlock>
        

            <p><strong>Important:</strong> Make sure to bind your routes to Express in your App provider.</p>

            <CodeBlock language="typescript">
                {`import routes from "@src/app/routes/api";
import userRoutes from "@src/app/routes/userRoutes";
import BaseProvider from "@src/core/base/Provider";
import { App } from "@src/core/services/App";

export default class AppProvider extends BaseProvider
{
    /** rest of the logic */

    public async boot(): Promise<void> 
    {
        this.log('Booting AppProvider');

        /**
         * Bind routes to Express
         */
        this.routes();

        /**
         * Boot your services here
         */
    }

    /**
     *  Setup routing files
     */
    private routes(): void
    {
        App.container('express').bindRoutes(routes);
        App.container('express').bindRoutes(userRoutes);    
    }
}`}
            </CodeBlock>
 
            <p><strong>Note:</strong> Remember to follow the established naming conventions and file structure when adding new routes to maintain consistency across your application.</p>
        </article>
    );
}

export default Routing;