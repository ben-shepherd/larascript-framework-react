import CodeBlock from "../../../../../utils/CodeBlock";

const ExpressMiddleware = () => {
    return (
        <article>
            <p>Middleware functions are an integral part of the Express.js ecosystem, allowing you to execute code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function. This framework provides an easy way to set up and use middleware in your application.</p>
            
            <h3>Generating Middleware Files</h3>
            
            <p>To quickly create a new middleware file, you can use the provided command-line tool:</p>
            
            <CodeBlock language="bash">
                yarn dev -- make:middleware --name=User
            </CodeBlock>
            
            <p>This command will generate a new middleware file named <code>@src/app/middleware/userMiddleware.ts</code> with basic boilerplate code, saving you time and ensuring consistency across your middleware files.</p>
            
            <h3>Middleware Example</h3>
            
            <CodeBlock language="typescript">
{`import { BaseRequest } from '@src/core/domains/express/types/BaseRequest.t';
import { NextFunction, Response } from 'express';

export const basicLoggerMiddleware = () => async (req: BaseRequest, res: Response, next: NextFunction): Promise<void> => {
    console.log('New request: ', 'Method: ', req.method, 'Path: ', req.path, 'Headers: ', req.headers);
    next();
};`}
            </CodeBlock>

            
            <p><strong>Note:</strong> After creating a middleware file, you will need to add it to your route configuration.</p>

            <CodeBlock>
{`const routes: IRoute[] = [
    {
        name: 'health',
        method: 'get',
        path: '/health',
        action: health,
        middlewares: [basicLoggerMiddleware()], // Add one or more middleware
    }
]

export default routes;`}
            </CodeBlock>
        </article>
    );
}

export default ExpressMiddleware;