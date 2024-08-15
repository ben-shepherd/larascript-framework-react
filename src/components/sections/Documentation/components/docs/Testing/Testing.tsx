const Testing = () => {
    return (
        <article>
            <p>Creating tests for your features is crucial in ensuring your program functions correctly at runtime. Tests help to:</p>
            
            <ul className="list-disc my-5">
                <li>Verify that individual components work as expected</li>
                <li>Catch bugs and errors early in the development process</li>
                <li>Provide documentation for how your code should behave</li>
                <li>Enable safe refactoring and feature additions</li>
                <li>Improve overall code quality and reliability</li>
            </ul>
            
            <p>By writing and running tests regularly, you can have confidence that your application will perform correctly when deployed, reducing the risk of runtime errors and improving user experience.</p>
            
            <h3 className="mt-5">Jest</h3>
            <p>Tests created using jest. You can view the full documentation here. <a href="https://jestjs.io/docs/getting-started" target="_blank" rel="noopener noreferrer">jestjs.io/docs/getting-started</a></p>

            <h3>Included Tests</h3>
            <p>The project comes with a set of essential tests to get you started. These tests cover core functionalities and serve as examples for writing your own tests.</p>

            <p>Location: <code>/src/tests</code></p>
            
            <h3>Running Tests</h3>
            <p>You have two options for running tests:</p>
            
            <h4 className="mt-5">1. Running All Tests</h4>
            <p>To run all tests in the project, use the following command:</p>
            <pre><code>yarn run test:all</code></pre>
            
            <h4 className="mt-5">2. Running Individual Test Files</h4>
            <p>To run tests from a specific file, use the following command structure:</p>
            <pre><code>yarn run test [test-file-name]</code></pre>
            <p>For example, to run the authentication tests:</p>
            <pre><code>yarn run test auth</code></pre>
            
            <p className="mt-5"><strong>Note:</strong> Regular testing is a best practice in software development. It's recommended to run tests before committing code changes and as part of your continuous integration process.</p>
        </article>
    );
}

export default Testing;