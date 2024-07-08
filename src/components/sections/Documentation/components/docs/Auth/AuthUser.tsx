import CodeBlock from "../../../../../utils/CodeBlock";

const AuthUser = () => {
    return (
        <article>
            <h2>User Methods</h2>
            <pre>
                <CodeBlock language="typescript">
                    {`const TokenOptionsDefault = {
    activeOnly: false
}

/*
 * Returns an array of BaseApiToken linked to the user
 */
async tokens(options = TokenOptionsDefault): Promise<BaseApiTokenModel[]>`}
                </CodeBlock>
            </pre>

            <h2>Extendable Classes</h2>
            <p><strong>Repository</strong> <code>@src/app/repositories/auth/UserRepository.ts</code></p>
            <p><strong>Model</strong> <code>@src/app/models/auth/User.ts</code></p>
            <p><strong>Interface</strong> <code>@src/app/interfaces/auth/UserData.ts</code></p>
        </article>

    );
}

export default AuthUser;
