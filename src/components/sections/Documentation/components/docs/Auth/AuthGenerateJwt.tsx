import CodeBlock from "../../../../../utils/CodeBlock";

const AuthGenerateJwt = () => {
    return (
        <article>
            <p>The command below will update your .env file with the JWT secret.</p>
            <code>npm run dev -- app:generate-jwt-secret --no-db</code>

            <p>Your .env will be automatically created for you if it doesn't already exist.</p>
            <p>The <code>--no-db</code> flag prevents loading the database as this might not be set up yet.</p>

            <p>Example</p>
            <CodeBlock>
                JWT_SECRET=01cf5493...
            </CodeBlock>
        </article>

    );
}

export default AuthGenerateJwt;
