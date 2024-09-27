import CodeBlock from "../../../../../utils/CodeBlock";

const AuthConfiguration = () => {
    return (
        <article>
            <p>To configure authentication settings, navigate to <code>@src/config/auth/auth.ts</code>.</p>
            <p>The current configuration allows you to control these aspects of authentication:</p>
            <ol className="my-5">
                <li><strong>service</strong> The services used by the authentication service.</li>
                <li><strong>models</strong> A reference to the models used by the authentication service.</li>
                <li><strong>repositories</strong> A reference to the repositories used by the authentication service.</li>
                <li><strong>validators</strong> The validators used by the authentication service.</li>
                <li><strong>jwtSecret</strong> The JWT Secret used to sign tokens.</li>
                <li><strong>enableAuthRoutes:</strong> Enable or disable authentication routes.</li>
                <li><strong>enableAuthRoutesAllowCreate:</strong> Enable or disable the endpoint for creating new users.</li>
                <li><strong>permissions</strong> The place to define your user permissions.</li>
            </ol>
            <pre>
                <CodeBlock language="typescript">
{`export const GROUPS = {
    User: 'group_user',
    Admin: 'group_admin',
} as const

export const ROLES = {
    USER: 'role_user',
    ADMIN: 'role_admin'
} as const

const config: IAuthConfig = {
    service: {
        authService: AuthService
    },
    models: {
        user: User,
        apiToken: ApiToken
    },
    repositories: {
        user: UserRepository,
        apiToken: ApiTokenRepository
    },
    validators: {
        createUser: CreateUserValidator,
        updateUser: UpdateUserValidator,
    },

    jwtSecret: process.env.JWT_SECRET as string ?? '',

    enableAuthRoutes: parseBooleanFromString(process.env.ENABLE_AUTH_ROUTES, 'true'),

    enableAuthRoutesAllowCreate: parseBooleanFromString(process.env.ENABLE_AUTH_ROUTES_ALLOW_CREATE, 'true'),

    permissions: {

        user: {
            defaultGroup: GROUPS.User,
        },

        groups: [
            {
                name: GROUPS.User,
                roles: [ROLES.USER],
                scopes: []
            },
            {
                name: GROUPS.Admin,
                roles: [ROLES.USER, ROLES.ADMIN],
                scopes: []
            }
        ]
    }
}`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default AuthConfiguration;
