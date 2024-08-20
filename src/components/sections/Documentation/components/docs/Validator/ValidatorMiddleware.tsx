import CodeBlock from "../../../../../utils/CodeBlock";

const ExpandedValidationDocs = () => {
  return (
    <article>
      <p>The framework provides a robust and flexible way to incorporate validation into your routes. This ensures that incoming requests are validated before reaching your action handlers, improving the robustness and security of your API.</p>

      <h2>Adding a Validator to a Route</h2>
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

      <p>If you prefer to handle validation logic within your action, you can disable the automatic middleware validation by setting <code>validateBeforeAction: false</code> in your route configuration.</p>

    </article>
  );
};

export default ExpandedValidationDocs;