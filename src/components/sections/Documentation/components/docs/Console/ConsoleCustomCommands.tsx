import CodeBlock from "../../../../../utils/CodeBlock";

const ConsoleAvailableCommands = () => {
    return (
        <article>
            <p>Creating commands consists of creating your initial command file and then registering it in a provider.</p>
            <p>Create your command by running the following:</p>
            <pre>
                <code>
                    yarn run start -- make:command --name=MovieCommand
                </code>
            </pre>

            <p>Navigate to your App provider in <code>@src/app/providers/AppProvider.ts</code></p>
            <p>In your <code>register</code> method, you can utilize the <code>console</code> container to register multiple commands at once.</p>
            <pre>
                <CodeBlock>
                    {`import { App } from "@src/core/services/App";
import BaseProvider from "../../core/base/Provider";
import MovieCommand from '@src/commands/MovieCommand';

export default class AppProvider extends BaseProvider {
    public async register(): Promise<void> {
        this.log('Registering AppProvider');

        /**
         * Register multiple commands at once
         */
        App.container('console').register().registerAll([
            MovieCommand
        ]);
    }

    public async boot(): Promise<void> {
        this.log('Booting AppProvider');
    }
}`}
                </CodeBlock>
            </pre>
        </article>


    );
}

export default ConsoleAvailableCommands;
