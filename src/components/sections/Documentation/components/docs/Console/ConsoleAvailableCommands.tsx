
const ConsoleAvailableCommands = () => {
    return (
        <article>

            <p>The worker command runs your queued events.</p>
            <p>Worker commands can come in handy when a resource heavy task needs to be performed, as it can be run on a separate server environment.</p>
            <pre>
                <code>
                    npm run start -- worker
                </code>
            </pre>

        </article>

    );
}

export default ConsoleAvailableCommands;
