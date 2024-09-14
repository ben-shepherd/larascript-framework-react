import CodeBlock from "../../../../../utils/CodeBlock";

const EventDrivers = () => {
    return (
        <article>
            <p>Event drivers act as managers for your event subscribers, determining how and when events are processed. They provide flexibility in handling different types of events based on your application's needs.</p>

            <h3>Default Drivers</h3>
            <p>By default, the system comes with two event drivers:</p>
            <ul className='list-disc'>
                <li><strong>Sync Driver:</strong> Processes events immediately upon dispatch.</li>
                <li><strong>Queue Driver:</strong> Saves events to a MongoDB collection for later execution by a worker process, allowing background processing.</li>
            </ul>

            <h3>Default Driver Configuration</h3>
            <p>The default event driver can be set in your environment configuration:</p>
            <CodeBlock>
{`/*
 * The default event driver will be used when no driver is defined in the Event
 */
export const defaultEventDriver: string = process.env.APP_EVENT_DRIVER ?? 'sync';`}
            </CodeBlock>

            <h3>Driver Configuration</h3>
            <p>You can configure multiple drivers, including custom ones, in your application:</p>
            <CodeBlock>
{`export const eventDrivers: IEventDrivers = {
    // Synchronous Driver: Processes events immediately
    sync: {
        driver: SynchronousDriver
    },
    // Queue Driver: Saves events for background processing
    queue: {
        driver: QueueDriver,
        options: new DriverOptions<QueueDriverOptions>({
            queueName: 'default',     // Name of the queue
            retries: 3,               // Number of retry attempts for failed events
            failedCollection: 'failedWorkers',  // Collection to store failed events
            runAfterSeconds: 10,      // Delay before processing queued events
            workerModelCtor: WorkerModel  // Constructor for the Worker model
        })
    }
 } as const;`}
            </CodeBlock>

            <h3>Custom Drivers</h3>
            <p>The configuration allows you to create your own queue drivers. This flexibility enables you to implement specific processing behaviors tailored to your application's requirements.</p>

            <h3>Using Drivers</h3>
            <p>When creating a subscriber, you can specify which driver to use:</p>
            <CodeBlock>
{`export default class ExampleSubscriber extends EventSubscriber<Payload> {
    constructor(payload: Payload) {
        const eventName = 'OnExample'
        const driver = 'queue'; // 'sync' or 'queue'

        super(eventName, driver, payload)
    }
}`}
            </CodeBlock>
            <p>This allows you to control how each event is processed based on its specific needs.</p>

            <h3>Synchronous Driver Example</h3>
            <p>The following example demonstrates how the SynchronousDriver handles events:</p>

            <CodeBlock>
{`import { IEvent } from '@src/core/domains/events/interfaces/IEvent';
import IEventDriver from '@src/core/domains/events/interfaces/IEventDriver';
import { App } from '@src/core/services/App';

export default class SynchronousDriver implements IEventDriver
{
    /**
     * Run all the events immediatly 
     * @param event 
     */
    async handle(event: IEvent) {
        const eventName = event.name

        // Get all the listeners with this eventName
        const listenerConstructors = App.container('events').getListenersByEventName(eventName)

        // Process immediatly
        for(const listenerCtor of listenerConstructors) {
            const listener = new listenerCtor();
            await listener.handle(event.payload);
        }
    }
}`}
            </CodeBlock>
        </article>
    );
}

export default EventDrivers;