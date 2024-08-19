import CodeBlock from "../../../../../../utils/CodeBlock"

const HasMany = () => {
    return (
        <>
            <h3>HasMany Full Example</h3>
            <pre>
                <CodeBlock>
                    {`import MovieModel from '@src/app/models/Movie';

export class AuthorModel extends Model<AuthorModelData> {
    /* rest of your model code */

    public async movies(): Promise<MovieModel[]> {
        return this.hasMany({
            localKey: '_id',
            localModel: this,
            foreignKey: 'authorId',
            foreignModelCtor: MovieModel
        })
    }

    public async moviesFromYear(year: number): Promise<MovieModel[]> {
        return this.hasMany({
            localKey: '_id',
            localModel: this,
            foreignKey: 'authorId',
            foreignModelCtor: MovieModel,
            filters: {
                yearReleased: year.toString()
            }
        })
    }
}`}
                </CodeBlock>
            </pre>

        </>
    )
}

export default HasMany