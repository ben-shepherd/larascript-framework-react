import CodeBlock from "../../../../../../utils/CodeBlock"

const HasMany = () => {
    return (
        <>
            <h3>HasMany Full Example (with additional filters)</h3>
            <pre>
                <CodeBlock>
                    {`async tokens({ activeOnly }: TokensOptions = TokenOptionsDefault): Promise<BaseApiTokenModel[]> {
    const filters: { revokedAt?: null } = {}

    if (activeOnly) {
        filters.revokedAt = null
    }

    return this.hasMany<BaseUserData, BaseUserModel, BaseApiTokenData, BaseApiTokenModel>(
        this,
        this.primaryKey,
        BaseApiTokenModel,
        'userId',
        filters
    )
}`}
                </CodeBlock>
            </pre>

            <h2>HasMany Signature</h2>
            <pre>
                <CodeBlock>
                    {`async hasMany<
    LocalData extends BaseModelData, LocalModel extends Model<LocalData>,
    ForeignData extends BaseModelData, ForeignModel extends Model<ForeignData>
> (
    model: LocalModel,
    localKey: keyof LocalData,
    foreignModelCtor: ModelConstructor<ForeignModel>,
    foreignKey: keyof ForeignData,
    filters: object = {}
): Promise<ForeignModel[]>`}
                </CodeBlock>
            </pre>
        </>
    )
}

export default HasMany