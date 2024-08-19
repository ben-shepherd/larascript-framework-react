import CodeBlock from "../../../../../utils/CodeBlock";

const EventSummary = () => {
    return (
        <article>
            <h2>Events, Subscribers, and Listeners</h2>
            <p>
                Events in our system provide a powerful mechanism for decoupled communication between different parts of your application. Here's how they work:
            </p>
            <ul className="list-disc my-3">
                <li>Events are specific occurrences or actions in your application.</li>
                <li>Subscribers can register their interest in specific events.</li>
                <li>When an event occurs, registered listeners are notified and can perform actions in response.</li>
                <li>Listeners can be executed in separate locations, depending on the event driver configuration.</li>
            </ul>
            <p>
                This event-driven architecture allows for flexible, scalable, and maintainable code by reducing direct dependencies between components.
            </p>
            <h3>Dispatching Events</h3>
            <p>
                Users can dispatch subscribers through the event system, which will trigger the associated event. Here's an example of how to dispatch an event:
            </p>
            <pre>
                <CodeBlock>
                    {`App.container('events').dispatch(new ExampleSubscriber({ userId }));`}
                </CodeBlock>
            </pre>
            <p>
                This line of code creates a new ExampleSubscriber with a userId parameter and dispatches it through the event system. This action will trigger the corresponding event, notifying all registered listeners.
            </p>
        </article>
    );
}

export default EventSummary;