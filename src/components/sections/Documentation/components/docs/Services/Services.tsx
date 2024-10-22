import CodeBlock from "../../../../../utils/CodeBlock";

const Services = () => {
    return (
        <article>
            <p>Your own services can utilise the in built <code>@src/core/base/Service</code> or <code>@src/core/base/Singleton</code> modules.</p>
            <p>You can also run the following commands to automatically create these files for you:</p>
            <code>
                yarn dev make:service --name=MyService                
            </code>
            <br />
            <code>
                yarn dev make:singleton --name=MySingleton
            </code>
            <h2>Constructor Signature</h2>
            <p>Services can be provided optional config.</p>
            <pre>
                <code>
                    constructor: (config: any | null)
                </code>
            </pre>
            <h2>Recommended Usage</h2>
            <p>It is recommended to register your services in a provider and use container methods to access it across your project.</p>
            <h2>Example: Creating a new Service</h2>
            <p>We will create a new file here: <code>@src/app/services/Weather.ts</code></p>
            <pre>
                <CodeBlock language="typescript">
                    {`import Service from "@src/core/base/Service";

type WeatherConfig = {
    region: string;
}

export class Weather extends Service<WeatherConfig> {

    constructor(config: WeatherConfig) {
        super(config);
    }

    getRegion(): string {
        return this.getConfig().region;
    }

    getTemperature(): string {
        return 'Cold!';
    }
}`}
                </CodeBlock>
            </pre>
            <h2>Example</h2>
            <pre>
                <CodeBlock language="typescript">
                    {`import Weather from '@src/app/services/Weather';

(new Weather({ region: 'United Kingdom' })).getTemperature(); // Cold!`}
                </CodeBlock>
            </pre>
            <p><em>(Optional type hinting)</em> The type parameter for Service can be left blank if no type hinting is required. Example <code>extends Service&lt;WeatherConfig&gt;</code> becomes <code>extends Service</code>.</p>
        </article>

    );
}

export default Services;
