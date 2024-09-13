
const RepositoryExample = 
`class UserRepository extends Repository<User> {

    constructor() {
        super(User)
    }

    // Finds a User by their email address
    public async findOneByEmail(email: string): Promise<User | null> {
        return await this.findOne({ email })
    }

}`

export default RepositoryExample