import CodeBlock from "../../../../../../utils/CodeBlock"

const HasOne = () => {
    return (
        <>
            <h3>HasOne Full Example</h3>
            <pre>
                <CodeBlock>
                    {`async author(): Promise<BaseApiTokenModel[]> {
    return this.hasOne<MovieData, MovieModel, AuthorData, AuthorModel>(
        this,
        this.primaryKey,
        AuthorModel,
        'movieId'
    )
}`}
                </CodeBlock>
            </pre>

            <h2>HasOne Signature</h2>
            <pre>
                <CodeBlock>
                    {`async hasOne<
    LocalData extends BaseModelData, LocalModel extends Model<LocalData>,
    ForeignData extends BaseModelData, ForeignModel extends Model<ForeignData>
> (
    model: LocalModel,
    localKey: keyof LocalData,
    foreignModelCtor: ModelConstructor<ForeignModel>,
    foreignKey: keyof ForeignData,
    filters: object = {}
): Promise<ForeignModel | null>`}
                </CodeBlock>
            </pre>
        </>
    )
}

export default HasOne