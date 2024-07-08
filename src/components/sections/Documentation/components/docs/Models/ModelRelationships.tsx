import CodeBlock from "../../../../../utils/CodeBlock";

const ModelRelationships = () => {
    return (
<article>
    <h2>BelongsTo Signature</h2>
    <pre>
        <CodeBlock>
            {`async belongsTo<
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

    <h3>Example</h3>
    <pre>
        <CodeBlock>
            {`public async user(): Promise<User | null> {
    return await this.belongsTo<ApiTokenData, ApiToken, UserData, User>(this, 'userId', User, new User().primaryKey);
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

    <h3>Example (with additional filters)</h3>
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

    <h3>Example (with additional filters)</h3>
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
</article>

    );
}

export default ModelRelationships;
