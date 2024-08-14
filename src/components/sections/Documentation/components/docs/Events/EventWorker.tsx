
const EventWorker = () => {
    return (
        <article>
            <p>A worker is a separate process that processes your queued events. These workers can process different items based on the queue name.</p>
            <p>Configuring a queue name is as simple as creating a new event driver in <code>@src/config/events.ts</code> and changing the <code>queueName</code> property.</p>
            <p>Then in your environment, change <code>APP_WORKER_DRIVER</code> to the desired driver, which will only process those queued items when the worker is running.</p>
            <p>This will allow you to have multiple processes of the worker in separate environments to split out resources used for processing.</p>

            <h4>Running the worker</h4>
            <pre>
                <code>yarn run worker</code>
            </pre>
        </article>
    );
}

export default EventWorker;
