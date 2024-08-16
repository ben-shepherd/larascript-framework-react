import CodeBlock from "../../../../../utils/CodeBlock";

const ExpressActions = () => {
    return (
        <article>
            <p>Actions in this framework are essentially equivalent to controllers in traditional MVC architectures. They serve as the primary location for your endpoint logic, handling the request processing and response generation for specific routes.</p>
            
            <h3>Location and Creation of Actions</h3>
            <p>All Action files should be placed in the <code>@src/app/actions</code> directory.</p>
            
            <p>To streamline the process of creating new Actions, you can use the provided command-line tool:</p>
            
            <CodeBlock language="bash">
                yarn run dev -- make:action --name=UpdateUser
            </CodeBlock>
            
            <p>This command will generate a new Action file named <code>@src/app/actions/updateUserAction.ts</code> in the correct directory, complete with basic boilerplate code to get you started quickly.</p>
            
            <h3>BaseRequest Type</h3>
            <p>To streamline the development of Actions, we provide a <code>BaseRequest</code> type. This type extends the standard Express request object with additional properties:</p>
            <ul>
                <li><code>validator</code>: Handling of request data validation</li>
                <li><code>user</code>: Accesing the user model</li>
                <li><code>apiToken</code>: Access to the current API token</li>
            </ul>
            
            <h3>Example Action</h3>
            <p>Here's an example of an Action that demonstrates the use of <code>BaseRequest</code>:</p>
            
            <CodeBlock language="typescript">
                {`import { Response } from 'express';
import responseError from '@src/core/domains/express/requests/responseError';
import { BaseRequest } from '../../express/types/BaseRequest.t';

export default (req: BaseRequest, res: Response) => {
    try {
        // Check validation result
        const successfullyValidated = req.validator?.validate(req.body).success
        
        // Get the authorized user
        const user = req.user?.getData({ excludeGuarded: true })

        // Get ApiToken
        const apiToken = req.apiToken?.getData({ excludeGuarded: true })

        res.send({ success: successfullyValidated, user, apiToken })
    }
    catch (error) {
        if(error instanceof Error) {
            responseError(req, res, error)   
        }
    }
}`}
            </CodeBlock>
            
            <p><strong>Note:</strong> When creating Actions, ensure they remain focused on orchestrating the request handling process. Complex business logic should be delegated to appropriate services or repositories to maintain separation of concerns.</p>
        </article>
    );
}

export default ExpressActions;