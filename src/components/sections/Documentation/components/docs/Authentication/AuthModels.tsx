const AuthModels = () => {
    return (
        <article>
            <h2>Models</h2>
            <p>The authentication system utilizes two primary models:</p>

            <h3>User Model</h3>
            <p>The User model is the default representation of a user in the system. It typically contains essential information such as username, email, password (hashed), and other user-specific details. This model serves as the foundation for user management and authentication processes.</p>
            <p><code>@src/app/models/auth/User</code></p>

            <h3>ApiToken Model</h3>
            <p><code>@src/app/models/auth/ApiToken</code></p>
            <p>The ApiToken model is responsible for managing authentication tokens. It stores crucial information including the token itself, the associated userId, and a revokedAt timestamp. This model facilitates secure API access and allows for token revocation when necessary, enhancing the overall security of the authentication system.</p>
        </article>
    );
}

export default AuthModels;