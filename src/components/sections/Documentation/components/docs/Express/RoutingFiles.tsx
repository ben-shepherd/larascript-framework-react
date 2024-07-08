import CodeBlock from "../../../../../utils/CodeBlock";

const RoutingFiles = () => {
    return (
        <article>
            <p>Adding routes can be achieved by updating your <code>@src/app/routes/api.ts</code> routing file.</p>
            <p><em>Note:</em> It is recommended to create separate files in <code>@src/app/actions</code> for your endpoint logic to keep your project organized.</p>
            <CodeBlock language="typescript">
                {`import {Route} from "@src/core/interfaces/IRoute";
import {Request, Response} from "express";

const routes: Route[] = [
    {
        name: 'index',
        method: 'get',
        path: '/',
        action: (req: Request, res: Response) => {
            res.send('hello world');
        }
    }
];

export default routes;`}
            </CodeBlock>
        </article>

    );
}

export default RoutingFiles;
