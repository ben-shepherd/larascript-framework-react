import CodeBlock from "../../../../../utils/CodeBlock";

const ExpressSummary = () => {
    return (
        <article>
            <h2>Express Wrapper</h2>
            
            <p>This project includes a custom wrapper for Express, the popular web application framework for Node.js. This wrapper is designed to streamline the development process and enhance productivity when working with Express.</p>
            
            <h3>Benefits</h3>
            <ul className="list-disc">
                <li>Accelerate development time for building out routes and API endpoints</li>
                <li>Maintain a cleaner and more consistent codebase</li>
                <li>Reduce common Express setup and configuration tasks</li>
                <li>Focus more on business logic rather than Express-specific implementations</li>
            </ul>
            
            <h3>Usage</h3>
            <p>The wrapper abstracts away some of the complexities of raw Express, allowing you to quickly define routes, apply middleware, and handle requests.</p>
            
            <p><strong>Note:</strong> While the wrapper simplifies many aspects of working with Express, you still have full access to Express's features and can extend the functionality as needed.</p>

            <h2>Accessing the Express Container</h2>
            
            <p>The framework provides a convenient way to access the underlying Express application instance, giving you full control and flexibility when needed. By using the container system, you can retrieve the raw Express package, allowing you to leverage all of Express's features and functionalities directly.</p>
            
            <p>To access the Express instance, use the following code:</p>
            
            <CodeBlock language="typescript">
                {`import {App} from '@src/core/services/App';
import {Express} from 'express';

const express: Express = App.container('express').getApp();`}
            </CodeBlock>
            
            <p>Remember that while the wrapper simplifies many common tasks, having access to the raw Express instance gives you the power to handle complex scenarios or specific requirements that may arise during development.</p>

            <p>It's recommended to place any changes to your express confiugration in the core ExpressProvider. <code>@src/core/domains/providers/ExpressProvider.ts</code></p>

        </article>
    );
}

export default ExpressSummary;

