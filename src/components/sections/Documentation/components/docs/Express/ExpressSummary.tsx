
const ExpressSummary = () => {
    return (
        <article>
            <p>This project includes a custom wrapper for Express, streamlining development and enhancing productivity. While simplifying common tasks, you retain full access to Express's features when needed.</p>

            <h3>Express Provider</h3>
            
            <p>The ExpressProvider, located at <code>@src/core/domains/express/providers/ExpressProvider.ts</code>, manages the Express service:</p>
            
            <ul className="list-disc py-3">
                <li>Registers the Express service in the application container</li>
                <li>Boots the Express service if enabled in the configuration</li>
                <li>Initializes Express and starts listening for connections</li>
            </ul>
            
            <p>The provider uses the configuration from <code>@src/config/http</code> and can be customized as needed.</p>
        </article>
    );
}

export default ExpressSummary;