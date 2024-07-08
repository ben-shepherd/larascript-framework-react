import CodeBlock from "../../../../../utils/CodeBlock";

const ExpressWebServer = () => {
    return (
        <article>
            <p>The express app is set up automatically for you in the following provider:</p>
            <pre>
                <code>
                    @src\core\providers\ExpressProvider.ts
                </code>
            </pre>
            <p>The express app can be accessed by calling the container express:</p>
            <pre>
                <CodeBlock language="typescript">
                    {`import {App} from '@src/core/services/App';
import {Express} from 'express';

const express: Express = App.container('express').getApp();`}
                </CodeBlock>
            </pre>
        </article>


    );
}

export default ExpressWebServer;
