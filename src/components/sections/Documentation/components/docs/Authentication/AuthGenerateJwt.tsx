import CodeBlock from "../../../../../utils/CodeBlock";

const AuthGenerateJwt = () => {
    return (
        <article>
            <h2>Generating a JWT Secret</h2>
            <p>To ensure proper authentication functionality, you need to generate a JSON Web Token (JWT) secret. This secret is crucial for securely signing and verifying JWTs used in the authentication process.</p>

            <h3>Generating the Secret</h3>
            <p>Run the following command in your terminal to generate a JWT secret and update your .env file:</p>
            <CodeBlock language="bash">
                yarn run dev -- app:generate-jwt-secret --no-db --no-auth
            </CodeBlock>

            <p>This command will:</p>
            <ul>
                <li>Create a .env file if it doesn't already exist</li>
                <li>Generate a secure random string for use as your JWT secret</li>
                <li>Add or update the JWT_SECRET variable in your .env file</li>
            </ul>

            <p>The <code>--no-db</code> flag is used to prevent loading the database, which is useful if your database setup is not yet complete.</p>
            <p>The <code>--no-auth</code> flag is used to prevent loading authentication system, which may error on start up due to missing JWT secret.</p>

            <h3>Result</h3>
            <p>After running the command, your .env file will contain a new or updated JWT_SECRET entry. For example:</p>
            <CodeBlock language="plaintext">
                JWT_SECRET=01cf5493...
            </CodeBlock>

            <p><strong>Note:</strong> Keep your JWT secret confidential and never commit it to version control. It's crucial for the security of your authentication system.</p>
        </article>
    );
}

export default AuthGenerateJwt;