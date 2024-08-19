import CodeBlock from "../../../../../utils/CodeBlock";

const EventWorker = () => {
    return (
        <article>
            <p>Event workers are separate processes dedicated to handling queued events. These workers can be configured to process different types of events based on specific queue names.</p>

            <h3>Configuring Queue Names</h3>
            <p>To set up a queue name:</p>
            <ol>
                <li>Create a new event driver in <code>@src/config/events.ts</code></li>
                <li>Modify the <code>queueName</code> property for the desired queue</li>
            </ol>

            <h3>Worker Driver Selection</h3>
            <p>In your environment configuration, set <code>APP_WORKER_DRIVER</code> to the desired driver. This ensures that when the worker runs, it will only process events from the specified queue.</p>

            <h3>Resource Management</h3>
            <p>This configuration allows you to run multiple worker processes in separate environments, effectively distributing resources for event processing.</p>

            <h3>Running the Worker</h3>
            <p>To start the worker process:</p>

            <h4>Development Environment</h4>
            <CodeBlock language="bash">
                {`yarn run dev -- worker`}
            </CodeBlock>

            <h4>Production Environment</h4>
            <CodeBlock language="bash">
                {`yarn run start -- worker`}
            </CodeBlock>
        </article>
    );
}

export default EventWorker;