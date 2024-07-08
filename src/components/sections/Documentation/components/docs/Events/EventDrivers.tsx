import CodeBlock from "../../../../../utils/CodeBlock";

const EventDrivers = () => {
    return (
        <article>
            <p>Event drivers are like the managers for your subscribers. They can process the event in any number of ways.</p>
            <p>By default, there are two event drivers: the <code>sync</code> and the <code>queue</code> driver.</p>
            <p>The <code>sync</code> driver runs events immediately, as soon as they are dispatched.</p>
            <p>The <code>queue</code> driver saves the event and is queued on MongoDB and is executed using a worker process.</p>

            <pre>
                <CodeBlock>
                    {`/*
 * The default event driver will be used when no driver is defined in the Event
 */
export const defaultEventDriver: string = process.env.APP_EVENT_DRIVER ?? 'sync';`}
                </CodeBlock>
            </pre>

            <pre>
                <CodeBlock>
                    {`/**
 * Event Drivers
 * 
 *      Example:
 *          const eventDrivers: IEventDrivers = {
 *              [key: string]: {
 *                  driver: [class extends IEventDriver],
 *                  options?: new DriverOptions({ retries: 3 })
 *              }
 *          }
 */
export const eventDrivers: IEventDrivers = {
    sync: {
        driver: SynchronousDriver
    },
    queue: {
        driver: QueueDriver,
        options: new DriverOptions<QueueDriverOptions>({
            queueName: 'default',
            retries: 3,
            collection: 'workers',
            failedCollection: 'failedWorkers',
            runAfterSeconds: 10
        })
    },
    queueOther: {
        driver: QueueDriver,
        options: new DriverOptions<QueueDriverOptions>({
            queueName: 'other',
            retries: 1,
            collection: 'otherWorkers',
            failedCollection: 'otherFailedWorkers',
            runAfterSeconds: 30
        })
    }
} as const;`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default EventDrivers;
