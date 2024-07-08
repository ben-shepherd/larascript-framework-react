import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const AuthApiToken = () => {
    return (
        <article>
            <h2>ApiToken Methods</h2>
            <p>Return the associated User:</p>
            <pre>
                <SimpleCodeBlock>
                    user(): Promise{`<User | null>`}
                </SimpleCodeBlock>
            </pre>

            <h2>Extendable Classes</h2>
            <p><strong>Repository</strong> <code>@src/app/repositories/auth/ApiTokenRepository.ts</code></p>
            <p><strong>Model</strong> <code>@src/app/models/auth/ApiToken.ts</code></p>
            <p><strong>Interface</strong> <code>@src/app/interfaces/auth/ApiTokenData.ts</code></p>
        </article>

    );
}

export default AuthApiToken;
