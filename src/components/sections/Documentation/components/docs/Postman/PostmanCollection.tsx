const PostmanCollection = () => {
    return (
        <article>
            <h2>Postman Configuration</h2>
            
            <p>To facilitate easier testing and interaction with the API, we provide a pre-configured Postman collection. This collection includes basic endpoints that are already set up for immediate use.</p>

            <strong><a href="/data/LarascriptNode.postman_collection.json" download target="_blank" rel="noopener noreferrer">LarascriptNode.postman_collection.json</a></strong>
            
            <h2>Using the Postman Collection</h2>
            <p>To use the provided Postman collection:</p>
            <ol>
                <li>Import the collection into your Postman application</li>
                <li>Set up your environment variables (such as base URL)</li>
                <li>You can now start testing the API endpoints immediately</li>
            </ol>
            
            <p>This preconfigured collection saves you time in setting up requests and allows you to quickly test and interact with the authentication system.</p>
            
            <h2>Customization</h2>
            <p>While the basic endpoints are provided, you can easily extend or modify the collection to suit your specific needs. Feel free to add new requests, modify existing ones, or create new folders to organize your API testing workflow.</p>
            
            <p><strong>Note:</strong> Remember to update the collection whenever significant changes are made to your API to ensure it remains in sync with your current implementation.</p>
        </article>
    );
}

export default PostmanCollection;