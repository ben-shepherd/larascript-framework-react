import CodeBlock from "../../../../../utils/CodeBlock";

const EventSubscribersAndListeners = () => {
    return (
        <article>
            <p>A typical subscriber has an <code>eventName</code>, a <code>driver</code>, and a <code>payload</code>.</p>

            <h2>Subscriber Example</h2>
            <p>You can also run the following to automatically create a Subscriber file for you:</p>
            <pre>
                <code>npm run dev:console -- make:subscriber --name=ExampleSubscriber</code>
            </pre>
            <p>We will create our file here: <code>@src/app/events/subscribers/ExampleSubscriber.ts</code></p>
            <pre>
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
            </pre>

            <h2>Listener Example</h2>
            <p>You can also run the following to automatically create a Listener file for you:</p>
            <pre>
                <code>npm run dev:console -- make:listener --name=ExampleListener</code>
            </pre>
            <p>We will create our file here: <code>@src/app/events/listeners/ExampleListener.ts</code></p>
            <pre>
                <CodeBlock>
                    {`import EventListener from "@src/core/domains/events/services/EventListener";
 
export class ExampleListener extends EventListener<{userId: string}> {
    
    handle = async (payload: { userId: string}) => {
        console.log('[ExampleListener]', payload.userId)
    }
}`}
                </CodeBlock>
            </pre>

            <p>Now if we take a look at the config:</p>
            <pre>
                <CodeBlock>
                    {`export const eventSubscribers: ISubscribers = {
    'OnExample': [
        ExampleListener
    ]   
}`}
                </CodeBlock>
            </pre>
            <p>In the example above, we attach all the listeners to the eventName <code>OnExample</code>, which <code>ExampleSubscriber</code> has set as its subscribed name. This means that anytime we want to dispatch <code>ExampleSubscriber</code>, we expect all the listeners to execute their logic.</p>

            <p>Now anywhere in our code, we can fire the event by using the <code>events</code> container to dispatch our subscriber with our desired payload.</p>
            <pre>
                <CodeBlock>
                    {`import ExampleSubscriber from './app/events/events/ExampleSubscriber';
import { App } from './core/services/App';

const userId = '123456';

App.container('events').dispatch(new ExampleSubscriber({ userId }));`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default EventSubscribersAndListeners;
