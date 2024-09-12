
const ModelsExample = 
`interface IApiTokenData extends IModelData {
    userId: string;
    token: string
    revokedAt: Date | null;
}

class ApiToken extends Model<IApiTokenData> implements IApiTokenModel {

    /**
     * Required ApiToken fields
     *
     * @field userId The user this token belongs to
     * @field token The token itself
     * @field revokedAt The date and time the token was revoked (null if not revoked)
     */
    public fields: string[] = [
        'userId',
        'token',
        'revokedAt'
    ]

    /**
     * Disable createdAt and updatedAt timestamps
     */
    public timestamps: boolean = false;

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

}`

export default ModelsExample