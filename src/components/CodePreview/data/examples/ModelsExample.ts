
const ModelsExample = 
`interface IApiTokenData extends IModelData {
    userId: string;
    token: string
    revokedAt: Date | null;
}

class ApiToken extends Model<IApiTokenData> {

    // Required ApiToken fields
    public fields: string[] = [
        'userId',
        'token',
        'revokedAt'
    ]

    // Disable createdAt and updatedAt timestamps
    public timestamps: boolean = false;

    // Finds the related user for this ApiToken
    public async user(): Promise<IUserModel | null> {
        return this.belongsTo(User, {
            localKey: 'userId',
            foreignKey: 'id',
        })
    }   

}`

export default ModelsExample