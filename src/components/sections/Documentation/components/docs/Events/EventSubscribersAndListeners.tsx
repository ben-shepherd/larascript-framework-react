import CodeBlock from "../../../../../utils/CodeBlock";

const EventSubscribersAndListeners = () => {
    return (
        <article>
        
            <h3>Subscribers</h3>
            <p>A subscriber is a fundamental component of the event system, typically consisting of three key elements:</p>
            <ul>
                <li><code>eventName</code>: Identifies the specific event</li>
                <li><code>driver</code>: Determines how the event is processed (e.g., queue, sync)</li>
                <li><code>payload</code>: Contains the data associated with the event</li>
            </ul>

            <h3>Creating a Subscriber</h3>
            <p>To create a new subscriber, use the following command:</p>
            <pre><code>yarn dev -- make:subscriber --name=ExampleSubscriber</code></pre>
            <p>This generates a file at <code>@src/app/events/subscribers/ExampleSubscriber.ts</code></p>
            
            <CodeBlock>
{`import EventSubscriber from "@src/core/domains/events/services/Event";

type Payload = {
    userId: string;
}

export default class ExampleSubscriber extends EventSubscriber<Payload> {
    constructor(payload: Payload) {
        const eventName = 'OnExample'
        const driver = 'queue';

        super(eventName, driver, payload)
    }
}`}
            </CodeBlock>

            <h3>Listeners</h3>
            <p>Listeners are responsible for executing logic when a subscribed event occurs.</p>

            <h3>Creating a Listener</h3>
            <p>Generate a new listener with:</p>
            <pre><code>yarn dev -- make:listener --name=ExampleListener</code></pre>
            <p>This creates a file at <code>@src/app/events/listeners/ExampleListener.ts</code></p>

            <CodeBlock>
{`import EventListener from "@src/core/domains/events/services/EventListener";
 
export class ExampleListener extends EventListener<{userId: string}> {
    handle = async (payload: { userId: string}) => {
        /** handle payload.userId logic */
    }
}`}
            </CodeBlock>

            <h3>Configuring Event Subscribers</h3>
            <p>In the configuration, listeners are associated with specific event names:</p>
            <p>Location: <pre><code>@src/config/events.ts</code></pre></p>
            <CodeBlock>
{`export const eventSubscribers: ISubscribers = {
    'OnExample': [
        ExampleListener
    ]   
}`}
            </CodeBlock>

            <p>This configuration links the <code>ExampleListener</code> to the <code>OnExample</code> event. When <code>ExampleSubscriber</code> is dispatched, all associated listeners will execute their logic.</p>

            <h3>Dispatching Events</h3>
            <p>To trigger an event from anywhere in your code:</p>

            <CodeBlock>
{`import ExampleSubscriber from './app/events/events/ExampleSubscriber';
import { App } from './core/services/App';

// Dispatch subscriber
App.container('events').dispatch(new ExampleSubscriber({ userId: 1 }));`}
            </CodeBlock>

            <p>This dispatches the <code>ExampleSubscriber</code> with the specified payload, activating all associated listeners.</p>
        </article>
    );
}

export default EventSubscribersAndListeners;