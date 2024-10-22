import CodeBlock from "../../../../../utils/CodeBlock";

const ModelObserver = () => {
    return (
        <article>
            <p>Models by default extend <code>WithObserver</code> which adds several helper methods to quickly utilize an observer. This can be added to any other class to take advantage of the helper observer methods.</p>

            <pre>
                <code className="code__primary">
                    @src\core\domains\observer\services\WithObserver.ts
                </code>
            </pre>

            <h3>Enabling Observers</h3>

            <p>To enable observer functionality for a specific model, use the <code>observeWith(Observer)</code> method in the model's constructor:</p>

            <CodeBlock language="typescript">
{`constructor(data: IModelData | null = null) {
    super(data);
    this.observeWith(MyModelObserver);
}`}
            </CodeBlock>

            <p>This allows you to implement custom logic that runs when certain events occur on the model, such as creation, update, or deletion.</p>

            <h3>UserObserver Example</h3>

            <pre>
                <code className="code__primary">
                    @src\app\observers\UserObserver.ts
                </code>
            </pre>

            <CodeBlock language="typescript">
                {`import { IUserData } from "@src/app/models/auth/User";
import hashPassword from "@src/core/domains/auth/utils/hashPassword";
import Observer from "@src/core/domains/observer/services/Observer";
import { App } from "@src/core/services/App";


export default class UserObserver extends Observer<IUserData> {

    /**
     * Called when the User model is being created.
     * Automatically hashes the password if it is provided.
     * @param data The User data being created.
     * @returns The processed User data.
     */
    async creating(data: IUserData): Promise<IUserData> {
        data = this.onPasswordChange(data)
        data = await this.updateRoles(data)
        return data
    }

    /**
     * Updates the roles of the user based on the groups they belong to.
     * Retrieves the roles associated with each group the user belongs to from the permissions configuration.
     * @param data The User data being created/updated.
     * @returns The processed User data with the updated roles.
     */
    async updateRoles(data: IUserData): Promise<IUserData> {
        let updatedRoles: string[] = [];

        for(const group of data.groups) {
            const relatedRoles = App.container('auth').config.permissions.groups.find(g => g.name === group)?.roles ?? [];

            updatedRoles = [
                ...updatedRoles,
                ...relatedRoles
            ]
        }

        data.roles = updatedRoles

        return data
    }

    /**
     * Automatically hashes the password if it is provided.
     * @param data The User data being created/updated.
     * @returns The processed User data.
     */
    onPasswordChange(data: IUserData): IUserData {
        if(!data.password) {
            return data
        }
        
        data.hashedPassword = hashPassword(data.password);
        delete data.password;

        return data
    }

}
`}
            </CodeBlock>

        </article>
    );
}

export default ModelObserver;