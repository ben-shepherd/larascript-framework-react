import CodeBlock from "../../../../../utils/CodeBlock";

const ProtectedRoutes = () => {
    return (
        <article>
            <h2>Middleware</h2>
            <p><code>@src/core/http/middleware/authorize</code></p>
            <p>Routes that require authorization should use the authorize middleware.</p>
            <h2>Example</h2>
            <p><code>@src/app/routes/user.ts</code></p>
            <pre>
                <CodeBlock language="typescript">
                    {`import {authorize} from "@src/core/http/middleware/authorize";
import {Route} from "@src/core/interfaces/IRoute";
import updateUser from "@src/app/actions/updateUser";

const routes: Route[] = [
    {
        name: '',
        method: 'get',
        path: '/api/auth/update-user',
        action: updateUser,
        middlewares: [authorize()]
    }
];

export default routes;`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default ProtectedRoutes;
