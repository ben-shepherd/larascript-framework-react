const PostmanCollection = () => {
    return (
        <article>
            <h2>Postman Configuration</h2>

            <p>To facilitate easier testing and interaction with the API, we provide a pre-configured Postman collection. This collection includes basic endpoints that are already set up for immediate use.</p>

            <div className="my-5">
                
            </div>

            <p>This preconfigured collection saves you time in setting up requests and allows you to quickly test and interact with the authentication system.</p>

            <h2>Using the Postman Collection</h2>
            <p>To use the provided Postman collection:</p>
            <ul className="list-disc my-5">
                <li>Import the collection into your Postman application</li>
                <li>Update variables in your Postman collection</li>
            </ul>
            <img src="/images/postman/apiVariables.png" alt="postman api variables" />
            <p className="mt-3">You can now start testing the API endpoints immediately.</p>

            <h2 className="mt-5">Customization</h2>
            <p>While the basic endpoints are provided, you can easily extend or modify the collection to suit your specific needs. Feel free to add new requests, modify existing ones, or create new folders to organize your API testing workflow.</p>

            <p><strong>Note:</strong> Remember to update the collection whenever significant changes are made to your API to ensure it remains in sync with your current implementation.</p>
        </article>
    );
}

export default PostmanCollection;