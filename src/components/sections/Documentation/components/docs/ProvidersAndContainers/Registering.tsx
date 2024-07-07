import CodeBlock from "../../../../../utils/CodeBlock";

const Registering = () => {
        return (
            <section>
                <p>Example: Register a new provider</p>
                <p>We will create a new provider in <code>@src/app/providers/WeatherProvider.ts</code></p>
                <p>You can also run <code>npm run dev:console -- make:provider --name=WeatherProvider</code> to automatically create the file.</p>

                <CodeBlock language="typescript">
                    {`import BaseProvider from "@src/core/base/Provider";
import Weather from '@src/app/services/Weather'; // @ref [Section 2] - Services

// Type hint our config shape
interface WeatherConfig {
    region: 'United Kingdom'
}

export default class WeatherProvider extends BaseProvider {
    // Optional property, by default config is an empty object.
    protected config!: WeatherConfig;

    // Optional if no config is required for this provider
    configPath = '@config/weather';

    constructor() {
        super()
        this.init()
    }

    public async register(): Promise<void> {
        this.log('Registering WeatherProvider');

        // Setup the container
        App.container('weather', new Weather(config)) // @ref [Section 1.4] Setting up a new container
    }

    public async boot(): Promise<void> {
        this.log('Booting WeatherProvider');
    }
}`}
                </CodeBlock>
            </section>
        );
    }

    export default Registering