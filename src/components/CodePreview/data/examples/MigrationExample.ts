
const MigrationExample = 
`export class CreateApiTokenMigration extends BaseMigration {

    group?: string = 'app:setup';

    async up(): Promise<void> {
        await this.schema.createTable(new ApiToken(null).table, {
            userId: DataTypes.STRING,
            token: DataTypes.STRING,
            revokedAt: DataTypes.DATE
        })
    }

    async down(): Promise<void> {
        await this.schema.dropTable(new ApiToken(null).table);
    }
}`

export default MigrationExample