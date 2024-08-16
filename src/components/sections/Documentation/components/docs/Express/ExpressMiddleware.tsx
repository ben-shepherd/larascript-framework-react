import CodeBlock from "../../../../../utils/CodeBlock";

const ExpressMiddleware = () => {
    return (
        <article>
            <p>Middleware functions are an integral part of the Express.js ecosystem, allowing you to execute code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function. This framework provides an easy way to set up and use middleware in your application.</p>
            
            <h3>Generating Middleware Files</h3>
            
            <p>To quickly create a new middleware file, you can use the provided command-line tool:</p>
            
            <CodeBlock language="bash">
                yarn run dev -- make:middleware --name=User
            </CodeBlock>
            
            <p>This command will generate a new middleware file named <code>@src/app/middleware/userMiddleware.ts</code> with basic boilerplate code, saving you time and ensuring consistency across your middleware files.</p>
            
            <h3>Middleware Authentication Example</h3>
            
            <p>Here's an example of an authorization middleware that checks for a valid API token:</p>
            
            <CodeBlock language="typescript">
                {`import { NextFunction, Response } from 'express';

import UnauthorizedError from '@src/core/domains/auth/exceptions/UnauthorizedError';
import IAuthorizedRequest from '@src/core/domains/auth/interfaces/IAuthorizedRequest';
import responseError from '@src/core/domains/express/requests/responseError';
import { App } from '@src/core/services/App';

export const authorize = () => async (req: IAuthorizedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authorization = (req.headers.authorization ?? '').replace('Bearer ', '');

        const apiToken = await App.container('auth').attemptAuthenticateToken(authorization)

        const user = await apiToken?.user()

        if(!user || !apiToken) {
            throw new UnauthorizedError();
        }

        req.user = user;
        req.apiToken = apiToken

        next();
    }
    catch (error) {
        if(error instanceof UnauthorizedError) {
            responseError(req, res, error, 401)
            return;
        }

        if(error instanceof Error) {
            responseError(req, res, error)
        }
    }
};`}
            </CodeBlock>

            
            <p><strong>Note:</strong> After creating a middleware file, you will need to add it to your route configuration.</p>
        </article>
    );
}

export default ExpressMiddleware;