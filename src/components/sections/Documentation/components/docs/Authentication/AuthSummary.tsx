
const AuthSummary = () => {
    return (
        <article>
            <ul>
                <li>
                    <strong>authentication token</strong>: The value of the property stored on the MongoDB collection <code>apiToken.token</code>.
                </li>
                <li>
                    <strong>repository</strong>: A repository is a class that handles queries to retrieve data models.
                </li>
                <li>
                    <strong>jwt</strong>: A signed JSON Web Token that contains the payload <code>{`{userId: string, token, ...}`}</code>.
                </li>
            </ul>
        </article>

    );
}

export default AuthSummary;
