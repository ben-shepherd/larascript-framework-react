import CodeBlock from "../../../../../utils/CodeBlock";

const AuthConfiguration = () => {
    return (
        <article>
            <p>To configure authentication settings, navigate to <code>@src/config/auth/auth.ts</code>.</p>
            <p>The current configuration allows you to control two key aspects of authentication:</p>
            <ol className="my-5">
                <li><strong>enableAuthRoutes:</strong> Activate or deactivate authentication-related routes.</li>
                <li><strong>enableAuthRoutesAllowCreate:</strong> Enable or disable the endpoint for creating new users.</li>
            </ol>
            <pre>
                <CodeBlock language="typescript">
                    {`import ApiToken from '@src/app/models/auth/ApiToken';
import User from '@src/app/models/auth/User';
import ApiTokenRepository from '@src/app/repositories/auth/ApiTokenRepository';
import UserRepository from '@src/app/repositories/auth/UserRepository';
import CreateUserValidator from '@src/app/validators/user/CreateUserValidator';
import UpdateUserValidator from '@src/app/validators/user/UpdateUserValidator';
import { IAuthConfig } from '@src/core/domains/auth/interfaces/IAuthConfig';
import AuthService from '@src/core/domains/auth/services/AuthService';
import parseBooleanFromString from '@src/core/util/parseBooleanFromString';

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
    /**
     * Enable or disable auth routes
     */
    enableAuthRoutes: parseBooleanFromString(process.env.ENABLE_AUTH_ROUTES, 'true'),
    /**
     * Enable or disable create a new user endpoint
     */
    enableAuthRoutesAllowCreate: parseBooleanFromString(process.env.ENABLE_AUTH_ROUTES_ALLOW_CREATE, 'true'),
}

export default config;`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default AuthConfiguration;
