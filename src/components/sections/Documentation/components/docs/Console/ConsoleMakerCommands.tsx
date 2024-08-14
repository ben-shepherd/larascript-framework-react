
const ConsoleAvailableCommands = () => {
    return (
        <article>
            <p>Creates a new <strong>Model</strong> file in <code>@src/app/models/{'{fileName}'}</code></p>
            <pre>
                <code>
                    yarn run dev -- make:model --name=MovieModel --collection=movies
                </code>
            </pre>

            <p>Creates a new <strong>Repository</strong> file in <code>@src/app/repositories/{'{fileName}'}</code></p>
            <pre>
                <code>
                    yarn run dev -- make:command --name=MovieRepository --collection=movies
                </code>
            </pre>

            <p>Creates a new <strong>Service</strong> file in <code>@src/app/services/{'{fileName}'}</code></p>
            <pre>
                <code>
                    yarn run dev -- make:command --name=MovieService
                </code>
            </pre>

            <p>Creates a new <strong>Singleton</strong> Service file in <code>@src/app/services/{'{fileName}'}</code></p>
            <pre>
                <code>
                    yarn run dev -- make:command --name=MovieSingleton
                </code>
            </pre>

            <p>Creates a new <strong>Provider</strong> file in <code>@src/app/providers/{'{fileName}'}</code></p>
            <pre>
                <code>
                    yarn run dev -- make:command --name=MovieProvider
                </code>
            </pre>

            <p>Creates a new <strong>Listener</strong> file in <code>@src/app/events/listeners/{'{fileName}'}</code></p>
            <pre>
                <code>
                    yarn run dev -- make:command --name=MovieListener
                </code>
            </pre>

            <p>Creates a new <strong>Subscriber</strong> file in <code>@src/app/events/subscribers/{'{fileName}'}</code></p>
            <pre>
                <code>
                    yarn run dev -- make:command --name=MovieSubscriber
                </code>
            </pre>

            <p>Creates a new <strong>Observer</strong> file in <code>@src/app/events/observers/{'{fileName}'}</code></p>
            <pre>
                <code>
                    yarn run dev -- make:command --name=MovieObserver
                </code>
            </pre>
        </article>

    );
}

export default ConsoleAvailableCommands;
