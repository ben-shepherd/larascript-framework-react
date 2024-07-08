import CodeBlock from "../../../../../utils/CodeBlock";

const AuthContainer = () => {
    return (
        <article>
            <p>The auth service can be retrieved with the <code>auth</code> container.</p>
            <h3>Example</h3>
            <pre>
                <CodeBlock language="typescript">
                    {`const auth = App.container('auth');

const user = await auth.userRepository.findOne({})

if (!user) {
    throw new Error('No user found');
}

const jwt = await auth.createJwtFromUser(user);`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default AuthContainer;
