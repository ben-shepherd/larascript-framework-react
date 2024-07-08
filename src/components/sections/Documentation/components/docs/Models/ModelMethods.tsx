import CodeBlock from "../../../../../utils/CodeBlock";
import SimpleCodeBlock from "../../../../../utils/SimpleCodeBlock";

const ModelMethods = () => {
    return (
        <article>
            <h2>setAttribute</h2>
            <pre>
                <SimpleCodeBlock>
                    {`setAttribute<K extends keyof Data = keyof Data>(key: K, value: any): void`}
                </SimpleCodeBlock>
            </pre>
            <pre>
                <SimpleCodeBlock>
                    {`movie.setAttribute('genre', 'Horror')`}
                </SimpleCodeBlock>
            </pre>

            <h2>Get an value from an attribute</h2>
            <pre>
                <SimpleCodeBlock>
                    {`getAttribute<K extends keyof Data = keyof Data>(key: K): Data[K] | null`}
                </SimpleCodeBlock>
            </pre>
            <pre>
                <SimpleCodeBlock>
                    {`const genre = movie.getAttribute('genre')
console.log(genre) // Outputs: 'Horror', but could also be null if not set`}
                </SimpleCodeBlock>
            </pre>

            <h2>Get the entire data state object from your model</h2>
            <pre>
                <SimpleCodeBlock>
                    {`type GetDataOptions = {
    excludeGuarded: boolean
}`}
                </SimpleCodeBlock>
            </pre>
            <pre>
                <SimpleCodeBlock>
                    {`getData(options: GetDataOptions): Data | null`}
                </SimpleCodeBlock>
            </pre>

            <h2>Example</h2>
            <pre>
                <CodeBlock>
                    {`const movie = await (new Repository<Movie>('movies', Movie)).findOne({ author: 'Christopher Nolan' })

const movieData = movie.getData({ excludeGuarded: true })

console.log(movieData)

// Returned data without guarded attributes
//  {
//     author: 'Christopher Nolan',
//     title: 'Interstellar',
//     genre: 'Sci-Fi',
//  }`}
                </CodeBlock>
            </pre>
        </article>

    );
}

export default ModelMethods;
