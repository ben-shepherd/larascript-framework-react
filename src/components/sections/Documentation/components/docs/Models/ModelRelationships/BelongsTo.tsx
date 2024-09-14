import CodeBlock from "../../../../../../utils/CodeBlock";

const BelongsTo = () => {
    return (
        <article>
            <p>The BelongsTo relationship is used when a model is associated with a single instance of another model. For example, an ApiToken belongs to a User.</p>

            <h3>Full Example</h3>

            <CodeBlock>
{`class ApiToken extends Model<IApiTokenData> implements IApiTokenModel {

    // ...

    /**
     * Finds the related user for this ApiToken
     * @returns The user model if found, or null if not
     */
    public async user(): Promise<IUserModel | null> {
        return this.belongsTo(User, {
            localKey: 'userId',
            foreignKey: 'id',
        })
    }   

}`}
            </CodeBlock>

            <h3>Explanation</h3>

            <ul className="list-disc py-3">
                <li className="py-2"><strong>localKey:</strong> The field in the current model that holds the foreign key (in this case, 'userId')</li>
                <li className="py-2"><strong>foreignKey:</strong> The primary key in the foreign model that the localKey refers to (usually 'id')</li>
            </ul>

            <h3>Using the Relationship</h3>

            <p>Once you've defined the relationship, you can use it to easily access the related model:</p>

            <CodeBlock>
{`const apiToken = await apiTokenRepository.findById('someTokenId');
const user = await apiToken.user();

if (user) {
    console.log(\`The token "\${apiToken.getAttribute('token')}" belongs to user \${user.getAttribute('name')}\`);
}`}
            </CodeBlock>

            <h3>Best Practices</h3>

            <ul className="list-disc py-3">
                <li className="py-2">Always define the return type of your relationship methods for better type safety.</li>
                <li className="py-2">Use meaningful method names that reflect the nature of the relationship (e.g., 'user' instead of 'getUser' or 'userRelation').</li>
                <li className="py-2">Ensure that the foreign key field (userId in this example) is included in your model's fields array.</li>
            </ul>

            <p>By using BelongsTo relationships, you can create more expressive and maintainable code when working with related data in your application.</p>
        </article>
    )
}

export default BelongsTo;