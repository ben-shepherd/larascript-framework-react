import CodeBlock from "../../../../../../utils/CodeBlock";

const HasMany = () => {
    return (
        <article>
            <p>The HasMany relationship is the inverse of BelongsTo. It's used when a model can have multiple instances of another model. For example, a User has many ApiTokens.</p>

            <h3>Full Example</h3>

            <CodeBlock>
{`export default class User extends Model<IUserData> implements IUserModel {

    // ...

    /**
     * @returns The tokens associated with this user
     *
     * Retrieves the ApiToken models associated with this user.
     */
    async tokens(): Promise<ApiToken[]> {
        return this.hasMany(ApiToken, {
            localKey: 'id',
            foreignKey: 'userId'
        }) 
    }
}`}
            </CodeBlock>

            <h3>Key Differences from BelongsTo</h3>

            <ul className="list-disc py-3">
                <li className="py-2">Returns an array of models instead of a single model or null</li>
                <li>The <code>localKey</code> is typically the primary key of the current model</li>
                <li>The <code>foreignKey</code> is the field in the related model that references this model</li>
            </ul>

            <h3>Additional Features: Filtering</h3>

            <p>You can add filters to your HasMany relationships to create more specific queries. For example, you could create a method to fetch only active tokens:</p>

            <CodeBlock>
{`async activeTokens(): Promise<ApiToken[]> {
    return this.hasMany(ApiToken, {
        localKey: 'id',
        foreignKey: 'userId',
        filters: {
            revokedAt: null
        }
    }) 
}`}
            </CodeBlock>

            <h3>Usage Example</h3>

            <CodeBlock>
{`const user = await userRepository.findById('someUserId');
const allTokens = await user.tokens();
console.log(\`\${user.getAttribute('name')} has \${allTokens.length} API tokens.\`);

const activeTokens = await user.activeTokens();
console.log(\`\${user.getAttribute('name')} has \${activeTokens.length} active API tokens.\`);`}
            </CodeBlock>

            <p>HasMany relationships provide a powerful way to work with one-to-many relationships in your data model, allowing for expressive and efficient querying of related data.</p>
        </article>
    )
}

export default HasMany;