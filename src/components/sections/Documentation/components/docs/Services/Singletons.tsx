import CodeBlock from "../../../../../utils/CodeBlock";

const Singletons = () => {
    return (
        <article>
            <pre>
                <CodeBlock language="typescript">
                    {`import Singleton from "@src/core/base/Singleton";

type WeatherConfig = {
    region: string;
}

export class Weather extends Singleton<WeatherConfig> 
{
    constructor(config: WeatherConfig) {
        super(config)
    }

    getRegion(): string {
        return this.getConfig().region
    }

    getTemperature(): string {
        return 'Cold!'
    }
}`}
                </CodeBlock>
            </pre>
            <p>Use the <code>getInstance</code> method to access your instance:</p>
            <pre>
                <CodeBlock language="typescript">
                    {`Weather.getInstance().getTemperature() // Cold!`}
                </CodeBlock>
            </pre>
        </article>


    );
}

export default Singletons;
