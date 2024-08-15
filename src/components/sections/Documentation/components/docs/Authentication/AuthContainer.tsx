import CodeBlock from "../../../../../utils/CodeBlock";

const AuthContainer = () => {
    return (
        <article>
            <p>The auth service can be retrieved with the <code>auth</code> container.</p>
            <h3>Example</h3>
            <pre>
                <CodeBlock language="typescript">
                    {`// Get the auth service
const auth = App.container('auth');

// Get the user from the repository provided
const user = await auth.userRepository.findOne({ email: 'tony.stark@example.com' });

if (!user) {
    throw new Error('No user found');
}

// Generate a JWT from the user model
const jwt = await auth.createJwtFromUser(user);`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default AuthContainer;
