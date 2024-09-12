
const RepositoryExample = 
`export default class UserRepository extends Repository<User> implements IUserRepository {

    constructor() {
        super(User)
    }

    /**
     * Finds a User by their email address
     * @param email 
     * @returns 
     */
    public async findOneByEmail(email: string): Promise<User | null> {
        return await this.findOne({ email })
    }

}`

export default RepositoryExample