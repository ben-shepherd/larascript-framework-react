import CodeBlock from "../../../../../utils/CodeBlock";
import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const ModelMethods = () => {
    return (
        <article>
            <h2>setAttribute</h2>
            <pre>
                <SimpleCodeBlock>
                    {`movie.setAttribute('genre', 'Horror')`}
                </SimpleCodeBlock>
            </pre>

            <h2>Get an value from an attribute</h2>
            <pre>
                <SimpleCodeBlock>
                    {`const genre = movie.getAttribute('genre')
console.log(genre) // 'Horror' | null`}
                </SimpleCodeBlock>
            </pre>

            <h2>Get the entire data state object from your model</h2>
            <pre>
                <SimpleCodeBlock>
                    {`type GetDataOptions = {
    excludeGuarded: boolean
}

getData(options: GetDataOptions): Data | null`}
                </SimpleCodeBlock>
            </pre>

            <h2>Example</h2>
            <p>Returned data without guarded attributes</p>
            <pre>
                <CodeBlock>
                    {`const movie = await (new Repository<Movie>('movies', Movie)).findOne({ author: 'Christopher Nolan' })

const movieData = movie.getData({ excludeGuarded: true })

console.log(movieData)`}
                </CodeBlock>

                <h2>Output</h2>
                <CodeBlock>
                    {`{
    author: 'Christopher Nolan',
    title: 'Interstellar',
    genre: 'Sci-Fi',
}`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default ModelMethods;
