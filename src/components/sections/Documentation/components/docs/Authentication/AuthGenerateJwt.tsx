import CodeBlock from "../../../../../utils/CodeBlock";

const AuthGenerateJwt = () => {
    return (
        <article>
            <p>A JSON Web Token (JWT) secret is essential for secure authentication. You can generate it in two ways:</p>

            <h3>1. Using the Specific Generate Command</h3>
            <CodeBlock>
                yarn dev -- app:generate-jwt-secret --no-db --no-auth
            </CodeBlock>
            <p>This command generates a JWT secret and updates your .env file. The <code>--no-db</code> and <code>--no-auth</code> flags prevent loading the database and authentication system, respectively.</p>

            <h3>2. Using the Setup Command</h3>
            <p>Alternatively, you can use:</p>
            <CodeBlock>
                yarn dev setup
            </CodeBlock>
            <p>This command will guide you through the setup process and ask if you want to regenerate your JWT Secret.</p>


            <h3>Result</h3>
            <p>Your .env file will contain a new or updated JWT_SECRET entry:</p>
            <CodeBlock>
                JWT_SECRET=01cf5493...
            </CodeBlock>

            <p><strong>Note:</strong> Keep your JWT secret confidential and never commit it to version control.</p>
        </article>
    );
}

export default AuthGenerateJwt;