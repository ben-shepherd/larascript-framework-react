import CodeBlock from "../../../../../utils/CodeBlock";

const TypeHintingConfig = () => {
    return (
        <section>
            <p>
                Notice how we've created a new interface for <code>WeatherConfig</code>, this provides type hinting when
                accessing <code>this.config.region; // Outputs 'United Kingdom'</code>
            </p>
            <p>
                We will need to add a config file in <code>@src/config/weather.ts</code> and import the <code>WeatherConfig</code> interface.
            </p>
            <p>
                Typing hinting your config will provide strict data types which will prevent bugs further down the line.
            </p>

            <CodeBlock language="typescript">
                {`import WeatherConfig from '@src/app/providers/WeatherProvider'

const config: WeatherConfig = {
    region: process.env.REGION ?? 'United Kingdom'
};

export default config
`}
            </CodeBlock>
        </section>
    );
}

export default TypeHintingConfig;
