
const ConsoleAvailableCommands = () => {
    return (
        <article>
            <p>Creates a new Model file in <code>@src/app/models/{'{fileName}'}</code></p>
            <pre>
                <code>
                    npm run dev -- make:model --name=MovieModel
                </code>
            </pre>

            <p>Creates a new Repository file in <code>@src/app/repositories/{'{fileName}'}</code></p>
            <pre>
                <code>
                    npm run dev -- make:command --name=MovieRepository
                </code>
            </pre>

            <p>Creates a new Service file in <code>@src/app/services/{'{fileName}'}</code></p>
            <pre>
                <code>
                    npm run dev -- make:command --name=MovieService
                </code>
            </pre>

            <p>Creates a new Singleton Service file in <code>@src/app/services/{'{fileName}'}</code></p>
            <pre>
                <code>
                    npm run dev -- make:command --name=MovieSingleton
                </code>
            </pre>

            <p>Creates a new Provider file in <code>@src/app/providers/{'{fileName}'}</code></p>
            <pre>
                <code>
                    npm run dev -- make:command --name=MovieProvider
                </code>
            </pre>

            <p>Creates a new Listener file in <code>@src/app/events/listeners/{'{fileName}'}</code></p>
            <pre>
                <code>
                    npm run dev -- make:command --name=MovieListener
                </code>
            </pre>

            <p>Creates a new Subscriber file in <code>@src/app/events/subscribers/{'{fileName}'}</code></p>
            <pre>
                <code>
                    npm run dev -- make:command --name=MovieSubscriber
                </code>
            </pre>

            <p>Creates a new Observer file in <code>@src/app/events/observers/{'{fileName}'}</code></p>
            <pre>
                <code>
                    npm run dev -- make:command --name=MovieObserver
                </code>
            </pre>
        </article>

    );
}

export default ConsoleAvailableCommands;
