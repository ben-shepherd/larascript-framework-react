import CodeBlock from "../../../../../utils/CodeBlock";

const Migrations = () => {
    return (
        <article>
            <p>Migrations are used to update your database structure in a controlled and versioned manner. They allow you to evolve your database schema over time as your application develops.</p>

            <h3>Creating a Migration</h3>

            <p>To create a new migration, use the following command:</p>

            <CodeBlock language="bash">
                {`yarn dev -- make:migration --name=CreateModelTable`}
            </CodeBlock>

            <p>This will create a new file in the <code>@src/app/migrations</code> directory.</p>

            <h3>Running Migrations</h3>

            <p>You can run migrations using various commands:</p>

            <ul className="list-disc py-3">
                <li>Run all migrations up:
                    <CodeBlock language="bash">
                        {`yarn dev -- migrate:up`}
                    </CodeBlock>
                </li>
                <li>Run migrations for a specific group:
                    <CodeBlock language="bash">
                        {`yarn dev -- migrate:up --group=<group value>`}
                    </CodeBlock>
                </li>
                <li>Run a specific migration file:
                    <CodeBlock language="bash">
                        {`yarn dev -- migrate:up --file=2024-09-06-create-user-table.ts`}
                    </CodeBlock>
                </li>
                <li>Reverse all migrations:
                    <CodeBlock language="bash">
                        {`yarn dev -- migrate:down`}
                    </CodeBlock>
                </li>
                <li>Reverse migrations by batch:
                    <CodeBlock language="bash">
                        {`yarn dev -- migrate:down --batch=1`}
                    </CodeBlock>
                </li>
            </ul>

            <h3>Migration Batches</h3>

            <p>Every time migrations are run, a batch number is updated. This is useful because:</p>
            <ul className="list-disc py-3">
                <li>It allows you to track which migrations were run together.</li>
                <li>You can easily rollback a set of migrations that were applied at the same time.</li>
                <li>It provides a way to manage the state of your database across different environments.</li>
            </ul>

            <h3>Migration Example</h3>

            <p>Here's a full example of a migration file:</p>

            <CodeBlock language="typescript">
{`import BaseMigration from "@src/core/domains/migrations/base/BaseMigration";
import { DataTypes } from "sequelize";
import User from "@src/app/models/auth/User";

export class CreateUserModelMigration extends BaseMigration {

    // Specify the database provider if this migration should run on a particular database.
    // Uncomment and set to 'mongodb', 'postgres', or another supported provider.
    // If left commented out, the migration will run only on the default provider.
    // databaseProvider: 'mongodb' | 'postgres' = 'postgres';

    group?: string = 'app:setup';

    async up(): Promise<void> {
        const stringNullable = {
            type: DataTypes.STRING,
            allowNull: true
        }

        await this.schema.createTable((new User).table, {
            email: DataTypes.STRING,
            hashedPassword: DataTypes.STRING,
            roles: DataTypes.JSON,
            firstName: stringNullable,
            lastName: stringNullable,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        })
    }

    async down(): Promise<void> {
        await this.schema.dropTable((new User).table);
    }

}`}
            </CodeBlock>

            <p>By using migrations, you can ensure that your database schema changes are version-controlled, repeatable, and can be applied consistently across different environments.</p>
        </article>
    );
}

export default Migrations;