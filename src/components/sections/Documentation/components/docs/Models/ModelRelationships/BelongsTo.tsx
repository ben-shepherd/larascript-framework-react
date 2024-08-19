import CodeBlock from "../../../../../../utils/CodeBlock"

const BelongsTo = () => {
    return (
        <>
            <h3>BelongsTo Full Example</h3>
            <pre>
                <CodeBlock>
                    {`import AuthorModel from '@src/app/models/Author';

class MovieModel extends Model<MovieModelData> {
    /* rest of your model code */

    fields = [
        'authorId',
        'yearReleased'
    ]

    public async author(): Promise<AuthorModel | null> {
        return this.belongsTo({
            localKey: 'authorId',
            localModel: this,
            foreignKey: '_id',
            foreignModelCtor: AuthorModel
        })
    }
}`}
                </CodeBlock>
            </pre>

            <h2>BelongsTo Options</h2>
            <pre>
                <CodeBlock>
                    {`export type BelongsToOptions = {
    localModel: Model<BaseModelData>;
    localKey: keyof BaseModelData;
    foreignModelCtor: ModelConstructor<Model<BaseModelData>>,
    foreignKey: keyof BaseModelData;
    filters?: object;
}`}
                </CodeBlock>
            </pre>
        </>
    )
}

export default BelongsTo