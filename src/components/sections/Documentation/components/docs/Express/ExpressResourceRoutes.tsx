import CodeBlock from "../../../../../utils/CodeBlock";

const ExpressResourceRoutes = () => (
  <div>
    <p>Resource Routing offers a more efficient approach to building CRUD (Create, Read, Update, Delete) endpoints. It streamlines development by automatically generating routes for common operations, ensuring consistency in API design across resources, allowing easy customization of default behaviors, and simplifying route management through grouping related endpoints. This approach significantly reduces boilerplate code and enhances overall API structure.</p>

    <p>The Resource Routing system provides several configurable options:</p>
    <ul className="list-disc py-3">
      <li><strong>name</strong>: Defines the resource identifier used in the URL path (e.g., 'blog/posts'), allowing for clear and RESTful route naming</li>
      <li><strong>resource</strong>: Specifies the model resource to which the CRUD endpoints will be bound, defining the structure and behavior of the resource</li>
      <li><strong>except</strong>: An array of ResourceType ('index' | 'create' | 'update' | 'show' | 'delete') to exclude from the generated routes, providing fine-grained control over which CRUD operations are exposed</li>
      <li><strong>only</strong>: An array of ResourceType to exclusively include, allowing you to limit the generated routes to specific CRUD operations</li>
      <li><strong>createValidator</strong>: Attaches a custom validation function to the create endpoint, ensuring data integrity before resource creation</li>
      <li><strong>updateValidator</strong>: Attaches a custom validation function to the update endpoint, verifying the validity of changes before applying</li>
      <li><strong>security</strong>: An array of security rules to be applied to the resource routes</li>
      <li><strong>scopes</strong>: An array of scope strings, defining the permission scopes for the resource</li>
      <li><strong>enableScopes</strong>: A boolean flag to enforce scope security checks on the resource routes</li>
      <li><strong>middlewares</strong>: Allows attaching additional middleware to all generated routes</li>
    </ul>

    <CodeBlock>
{`import Route from "@src/core/domains/express/routing/Route"
import RouteGroup from "@src/core/domains/express/routing/RouteGroup"
import RouteResource from "@src/core/domains/express/routing/RouteResource"
import { Request, Response } from "express"
import User from "@src/app/models/auth/User"
import CreateUserValidator from "@src/app/validators/user/CreateUserValidator"
import UpdateUserValidator from "@src/app/validators/user/UpdateUserValidator"
import { isAuthenticated } from "@src/app/middleware/auth"

const routes = RouteGroup([
    Route({
        name: 'index',
        method: 'get',
        path: '/',
        action: (req: Request, res: Response) => {
            res.send('Hello world!')
        }
    }),
    ...RouteResource({
        name: 'blog/posts',
        resource: BlogPostModel,
        except: ['index'],
        only: ['show', 'create', 'update'],
        createValidator: CreatePostValidator,
        updateValidator: UpdatePostValidator,
        security: [
            Security.resourceOwner(),
            Security.hasRole('user'),
            Security.rateLimited(1000, 60)
        ],
        scopes: ['customScope'],
        enableScopes: true,
        middlewares: [/* additional middlewares */]
    })
])

export default routes`}
    </CodeBlock>

    <p>This example demonstrates how to use RouteResource to quickly set up CRUD endpoints for a User model, with the ability to customize which operations are included, attach validators to specific actions, implement security rules, and define scopes for fine-grained access control.</p>
  </div>
);

export default ExpressResourceRoutes;