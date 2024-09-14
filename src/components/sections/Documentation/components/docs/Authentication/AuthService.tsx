import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const AuthService = () => {
    return (
        <article>
            <p>Overview of the methods and properties available through <code>App.container('auth')</code>:</p>

            <h3>Properties</h3>
            <p>The default user repository:</p>
            <pre>
                <SimpleCodeBlock>
                    userRepository: Repository
                </SimpleCodeBlock>
            </pre>

            <p>The default apiToken repository:</p>
            <pre>
                <SimpleCodeBlock>
                    apiTokenRepository: Repository
                </SimpleCodeBlock>
            </pre>

            <h3>Methods</h3>
            <p>Attempt to authorize an <em>authentication token</em>:</p>
            <pre>
                <SimpleCodeBlock>
                    {`attemptAuthenticateToken(token: string): Promise<ApiTokenModel | null>`}
                </SimpleCodeBlock>
            </pre>

            <p>Create a <em>JSON Web Token</em> from the User:</p>
            <pre>
                <SimpleCodeBlock>
                    {`createJwtFromUser(user: UserModel): Promise<string>`}
                </SimpleCodeBlock>
            </pre>

            <p>Create an ApiTokenModel from the User:</p>
            <pre>
                <SimpleCodeBlock>
                    {`createApiTokenFromUser(user: UserModel): Promise<ApiTokenModel>`}
                </SimpleCodeBlock>
            </pre>

            <p>Revoke a token:</p>
            <pre>
                <SimpleCodeBlock>
                    {`revokeToken(apiToken: ApiTokenModel): Promise<void>`}
                </SimpleCodeBlock>
            </pre>

            <p>Attempt a login with credentials. Returns an <em>authentication token</em>:</p>
            <pre>
                <SimpleCodeBlock>
                    {`attemptCredentials(email: string, password: string): Promise<string>`}
                </SimpleCodeBlock>
            </pre>

            <p>Generate a signed JSON Web Token:</p>
            <pre>
                <SimpleCodeBlock>
                    jwt(apiToken: ApiTokenModel): string
                </SimpleCodeBlock>
            </pre>

            <p><strong>Note:</strong> Your JWT value should be supplied to the <code>Authorization</code> header in order to authenticate requests.</p>
            <pre>
                <SimpleCodeBlock>
                    {`{
    "Authorization": "Bearer eyJhbG..."
}`}
                </SimpleCodeBlock>
            </pre>
        </article>

    );
}

export default AuthService;
