import CodeBlock from "../../../../../utils/CodeBlock";

const RoutingAction = () => {
    return (
        <article>
            <p>Actions, equivalent to controllers in MVC, handle endpoint logic. They're located in <code>@src/app/actions</code>.</p>
            
            <p>Generate a new action:</p>
            
            <CodeBlock language="bash">
                yarn dev make:action --name=UpdateUser
            </CodeBlock>
            
            <p>This creates <code>@src/app/actions/updateUserAction.ts</code> with boilerplate code.</p>
            
            <h3>BaseRequest Type</h3>
            <p>The <code>BaseRequest</code> type extends the Express request with:</p>
            <ul className="list-disc py-3">
                <li><code>validator</code>: For request data validation</li>
                <li><code>user</code>: Access to the user model</li>
                <li><code>apiToken</code>: Access to the current API token</li>
            </ul>
            
            <h3>Example Action</h3>
            
            <CodeBlock language="typescript">
                {`import { Response } from 'express';
import responseError from '@src/core/domains/express/requests/responseError';
import { BaseRequest } from '@src/core/domains/express/types/BaseRequest.t';

export const exampleRouteAction = (req: BaseRequest, res: Response) => {
    try {
        res.send({ success: true })
    }
    catch (error) {
        if(error instanceof Error) {
            responseError(req, res, error)   
            return;
        }
    }
}`}
            </CodeBlock>
            
            <p>Keep actions focused on request handling. Delegate complex logic to services or repositories.</p>
        </article>
    );
}

export default RoutingAction;