import CodeBlock from "../../../../../utils/CodeBlock";

const ValidatorInRoutes = () => {
    return (
        <article>
            
            <p>The framework provides a streamlined way to incorporate validation into your routes. This ensures that incoming requests are validated before reaching your action handlers, improving the robustness and security of your API.</p>
            
            <h3>Adding a Validator to a Route</h3>
            <p>You can add a validator to your route by including the `validator` property in the Route configuration. Here's an example:</p>
            
            <CodeBlock language="typescript">
                {`import { authorize } from "@src/core/domains/express/middleware/authorize";
import Route from "@src/core/domains/express/routing/Route";
import RouteGroup from "@src/core/domains/express/routing/RouteGroup";
import updateUser from "@/src/app/actions/updateUser";
import UpdateUserValidator from "@/src/app/validators/UpdateUserValidator";

const routes = RouteGroup([
    Route({
        name: 'updateUser',
        method: 'post',
        path: '/api/user/update',
        action: updateUser,
        middlewares: [authorize()],
        validator: UpdateUserValidator,
        validateBeforeAction: true
    })
])

export default routes;`}
            </CodeBlock>
            
            <p>By default, the validation is executed in the middleware pipeline before your action is called. If validation fails, the middleware automatically handles the response, typically by sending a 400 Bad Request error with validation details.</p>
            
            <p>If you prefer to handle validation logic within your action, you can disable the automatic middleware validation by setting <code>validateBeforeAction: false</code> in your route configuration:</p>
            
            <h3>Creating a Validator</h3>
            <p>To create a new validator, you can use the provided command-line tool:</p>
            
            <CodeBlock language="bash">
                yarn run dev -- make:validator --name=UpdateUser
            </CodeBlock>
            
            <p>This command generates a new validator file named `UpdateUserValidator.ts` with the following structure:</p>
            
            <CodeBlock language="typescript">
                {`import BaseValidator from "@src/core/domains/validator/base/BaseValidator";
import Joi, { ObjectSchema } from "joi";

class UpdateUserValidator extends BaseValidator
{
    rules(): ObjectSchema {
        return Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    }
}

export default UpdateUserValidator`}
            </CodeBlock>
            
            <p><strong>Note:</strong> By integrating validators directly into your route configurations, you ensure that data validation occurs automatically for each request, reducing the need for repetitive validation code in your action handlers.</p>
        </article>
    );
}

export default ValidatorInRoutes;