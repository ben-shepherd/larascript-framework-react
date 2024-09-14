import CodeBlock from "../../../../../utils/CodeBlock";
import Divider from "../../../../../utils/Divider";

const AuthEndpoints = () => {
    return (
        <article>
            <p>These endpoints are automatically configured and exposed by the authentication system. They provide a solid foundation for implementing user authentication in your application, handling tasks such as user registration, login, and retrieving user details.</p>
            <p>To use these endpoints, ensure that the authentication routes are enabled in your configuration (refer to the Auth Configuration section). You can then integrate these endpoints into your frontend or use them directly for API authentication.</p>

            <h2>Provider</h2>
            <p><code>src/core/providers/AuthProvider.ts</code></p>

            <Divider />

            <h2>Create a User</h2>
            <p>Allows for the creation of a new user account.</p>
            <p><strong>POST</strong> <code>{`{baseUrl}`}/auth/create</code></p>
            <p><strong>Body</strong></p>
            <CodeBlock>
                {`{
    "email": "tony.stark@example.com",
    "password": "ironMan70"
}`}
            </CodeBlock>
            <p><strong>Response</strong></p>
            <CodeBlock>
                {`{
    "success": true,
    "token": "eyJh...",
    "user": {
        "_id": "66be18de88d483fc29e2dfff",
        "email": "tony.stark@example.com",
        "createdAt": "2024-08-15T15:03:58.368Z",
        "updatedAt": "2024-08-15T15:03:58.368Z"
    }
}`}
            </CodeBlock>

            <Divider />

            <h2>User Login</h2>
            <p>Authenticates a user and returns a token for subsequent API calls.</p>
            <p><strong>POST</strong> <code>{`{baseUrl}`}/auth/login</code></p>
            <p><strong>Body</strong></p>
            <CodeBlock>
                {`{
    "email": "tony.stark@example.com",
    "password": "ironMan70"
}`}
            </CodeBlock>
            <p><strong>Response</strong></p>
            <CodeBlock>
                {`{
    "success": true,
    "token": "eyJh...",
    "user": {
        "_id": "66be18de88d483fc29e2dfff",
        "email": "tony.stark@example.com",
        "createdAt": "2024-08-15T15:03:58.368Z",
        "updatedAt": "2024-08-15T15:03:58.368Z"
    }
}`}
            </CodeBlock>
            
            <Divider />

            <h2>Get User Information</h2>
            <p>Retrieves information about the currently authenticated user.</p>
            <p><strong>GET</strong> <code>{`{baseUrl}`}/auth/user</code></p>
            <p><strong>Header</strong></p>
            <CodeBlock>
                {`{
    "Authorization": "Bearer eyJh..."
}`}
            </CodeBlock>
            <p><strong>Response</strong></p>
            <CodeBlock>
                {`{
    "success": true,
    "user": {
        "_id": "66be18de88d483fc29e2dfff",
        "email": "tony.stark@example.com",
        "createdAt": "2024-08-15T15:03:58.368Z",
        "updatedAt": "2024-08-15T15:03:58.368Z"
    }
}`}
            </CodeBlock>
            
            <Divider />

            <h2>Logout</h2>
            <p>Revokes the users token.</p>
            <p><strong>POST</strong> <code>{`{baseUrl}`}/auth/revoke</code></p>
            <p><strong>Header</strong></p>
            <CodeBlock>
                {`{
    "Authorization": "Bearer eyJh..."
}`}
            </CodeBlock>
            <p><strong>Response</strong></p>
            <CodeBlock>
                {`{
    "success": true
}`}
            </CodeBlock>
            
        </article>
    );
}

export default AuthEndpoints;