import CodeBlock from "../../../../../utils/CodeBlock";

const NewContainer = () => {
    return (
        <section>
            <p>In your provider, you can import <code>App</code> to set a container.</p>
            <p>This is typically placed in the <code>register</code> or <code>boot</code> method of your provider.</p>
            <p><strong>Example</strong></p>

            <CodeBlock language="typescript">
                {`import {App} from '@src/core/services/App';
import Weather from '@src/app/services/Weather';

App.container('weather', new Weather())`}
            </CodeBlock>

            <p><em>(Optional)</em> You may provide your application with type hinting by updating the <code>ContainersTypeHelpers</code> interface defined in <code>@src/containers</code></p>
            <p><strong>Example</strong></p>

            <CodeBlock language="typescript">
                {`import Weather from '@src/app/services/Weather';

export interface ContainersTypeHelpers {
    [key: string]: any;

    // ...other container types

    weather: Weather,
}`}
            </CodeBlock>
        </section>
    );
}

export default NewContainer;
