import CodeBlock from "../../../../../utils/CodeBlock";

const EventWorker = () => {
    return (
        <article>
            <p>Event workers are dedicated processes responsible for handling queued events in the background. They play a crucial role in processing asynchronous tasks, allowing your main application to remain responsive while handling potentially time-consuming operations.</p>

            <h3>Understanding Event Workers</h3>
            <ul className="list-disc my-3">
                <li>Workers run as separate processes from your main application.</li>
                <li>They can be configured to process specific types of events based on queue names.</li>
                <li>Multiple workers can run simultaneously, distributing the workload across different processes or machines.</li>
            </ul>

            <h3>Configuring Queue Names</h3>
            <p>To set up a new queue or modify an existing one:</p>
            <ul className="list-disc my-3">
                <li>Open the file <code>@src/config/events.ts</code></li>
                <li>In the <code>eventDrivers</code> object, create or modify a driver configuration</li>
                <li>Set the <code>queueName</code> property in the driver's options</li>
            </ul>
            <CodeBlock language="typescript">
{`export const eventDrivers: IEventDrivers = {
    queue: {
        driver: QueueDriver,
        options: new DriverOptions<QueueDriverOptions>({
            queueName: 'default',
            // ... other options
        })
    },
    highPriorityQueue: {
        driver: QueueDriver,
        options: new DriverOptions<QueueDriverOptions>({
            queueName: 'high-priority',
            // ... other options
        })
    }
}`}
            </CodeBlock>

            <h3>Worker Driver Selection</h3>
            <p>To specify which queue a worker should process:</p>
            <ul className="list-disc my-3">
                <li>In your environment configuration (e.g., <code>.env</code> file), set the <code>APP_WORKER_DRIVER</code> variable</li>
                <li>Use the key of the desired driver from your <code>eventDrivers</code> configuration</li>
            </ul>
            <CodeBlock language="bash">
                APP_WORKER_DRIVER=queue  # For the default queue
                # or
                APP_WORKER_DRIVER=highPriorityQueue  # For the high-priority queue
            </CodeBlock>

            <h3>Resource Management and Scaling</h3>
            <p>Event workers offer several advantages for resource management and scaling:</p>
            <ul className="list-disc my-3">
                <li>Run multiple worker processes to handle increased load</li>
                <li>Distribute workers across different machines for improved performance</li>
                <li>Dedicate specific workers to high-priority or resource-intensive tasks</li>
                <li>Scale workers independently from your main application</li>
            </ul>

            <h3>Running the Worker</h3>
            <p>To start a worker process:</p>

            <h3>Development Environment</h3>
            <CodeBlock language="bash">
                yarn dev -- worker
            </CodeBlock>

            <h3>Production Environment</h3>
            <CodeBlock language="bash">
                yarn run start -- worker
            </CodeBlock>

            <h3>Monitoring and Maintenance</h3>
            <p>To ensure smooth operation of your event workers:</p>
            <ul>
                <li>Implement logging to track worker activity and performance</li>
                <li>Set up monitoring to alert you of any issues or backlogs in the queue</li>
                <li>Regularly review and optimize your worker configurations based on your application's needs</li>
                <li>Consider implementing a dead-letter queue for events that repeatedly fail processing</li>
            </ul>
        </article>
    );
}

export default EventWorker;