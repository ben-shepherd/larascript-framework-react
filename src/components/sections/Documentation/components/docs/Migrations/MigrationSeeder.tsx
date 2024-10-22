import CodeBlock from '../../../../../utils/CodeBlock';

const Migrations = () => {
  return (
    <article>
      <section>

        <p>
          Database seeders are tools used to populate your database with initial or test data. 
          They are particularly useful for:
        </p>
        
        <ul className='list-disc'>
          <li>Setting up development environments</li>
          <li>Creating test data for testing</li>
          <li>Initializing production databases with required data</li>
        </ul>

        <p className='mt-3'>A seeder file can be created with this command:</p>
        <CodeBlock language="bash">
            {`yarn dev make:seed --name=UserSeeder`}
        </CodeBlock>
                
        <div>
          <h2>Example</h2>
          <CodeBlock>
{`import { faker } from "@faker-js/faker";
import hashPassword from "@src/core/domains/auth/utils/hashPassword";
import BaseSeeder from "@src/core/domains/migrations/base/BaseSeeder";
import User, { IUserData } from "../models/auth/User";

export class UserSeeder extends BaseSeeder {
    async up(): Promise<void> {
        for (let i = 0; i < 10; i++) {
            const data: IUserData = {
                email: faker.internet.email(),
                password: faker.internet.password(),
                hashedPassword: hashPassword(faker.internet.password()),
                roles: ['user'],
                groups: [],
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
            }
            const user = new User(data);
            await user.save();
        }
    }
}

export default UserSeeder`}
          </CodeBlock>
        </div>
      </section>
    </article>
  );
}

export default Migrations;