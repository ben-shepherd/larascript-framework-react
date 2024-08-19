import CodeBlock from "../../../../../utils/CodeBlock";

const ObserverSummary = () => {
    return (
        <article>
            <p>Observers are a powerful feature in our system that allow you to monitor and react to changes in your data. They provide a mechanism for implementing reactive behavior and maintaining data consistency across your application.</p>

            <h3>Key Concepts</h3>
            <ul className='list-disc my-3'>
                <li><strong>Listening for Changes:</strong> Observers can be set up to watch for specific types of data modifications.</li>
                <li><strong>Data Modification:</strong> When changes occur, Observers can modify the data before it's finalized.</li>
                <li><strong>Custom Logic:</strong> You can implement custom methods to handle complex data transformations or side effects.</li>
            </ul>

            <h3>Observer Lifecycle Methods</h3>
            <p>Observers can implement the following lifecycle methods:</p>
            <ul className='list-disc my-3'>
                <li><code>creating</code>: Called before a new record is created</li>
                <li><code>created</code>: Called after a new record is created</li>
                <li><code>updating</code>: Called before an existing record is updated</li>
                <li><code>updated</code>: Called after an existing record is updated</li>
                <li><code>saving</code>: Called before any save operation (create or update)</li>
                <li><code>saved</code>: Called after any save operation (create or update)</li>
                <li><code>deleting</code>: Called before a record is deleted</li>
                <li><code>deleted</code>: Called after a record is deleted</li>
            </ul>

            <h3>Example Implementation</h3>
            <CodeBlock>
                {`import Observer from '@src/core/Observer';

interface UserData {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName?: string;
}

class UserObserver extends Observer<UserData> {
    creating(userData: UserData): UserData {
        // Ensure email is lowercase before creating user
        userData.email = userData.email.toLowerCase();
        return userData;
    }

    saving(userData: UserData): UserData {
        // Generate fullName before any save operation
        userData.fullName = \`\${userData.firstName} \${userData.lastName}\`.trim();
        return userData;
    }

    updated(userData: UserData): UserData {
        // Trigger email verification if email changed
        if (this.isEmailChanged(userData)) {
            this.triggerEmailVerification(userData.email);
        }
        return userData;
    }

    onPasswordChange(userData: UserData): UserData {
        // Custom method to handle password changes
        this.sendPasswordChangeNotification(userData.email);
        return userData;
    }

    private isEmailChanged(userData: UserData): boolean {
        // Implementation to check if email was changed
        // This would typically involve comparing with the original data
        // For simplicity, we're just returning true here
        return true;
    }

    private triggerEmailVerification(email: string): void {
        // Implementation to trigger email verification
        console.log(\`Triggering email verification for \${email}\`);
    }

    private sendPasswordChangeNotification(email: string): void {
        // Implementation to send password change notification
        console.log(\`Sending password change notification to \${email}\`);
    }
}

// Usage example:
const userObserver = new UserObserver();
let userData: UserData = {
    email: 'USER@EXAMPLE.COM',
    firstName: 'John',
    lastName: 'Doe'
};

// Using the 'on' method
userData = userObserver.on('creating', userData);
userData = userObserver.on('saving', userData);
userData = userObserver.on('updated', userData);

// Using the 'onCustom' method for custom actions
userData = userObserver.onCustom('onPasswordChange', userData);

console.log(userData);
`}
            </CodeBlock>

            <h3>Best Practices</h3>
            <ul className='list-disc my-3'>
                <li>Keep Observers focused on a single responsibility</li>
                <li>Avoid heavy computations in Observers to prevent performance issues</li>
                <li>Use Observers judiciously - overuse can lead to complex, hard-to-debug systems</li>
                <li>Document the purpose and behavior of each Observer clearly</li>
                <li>Utilize the appropriate lifecycle methods for different stages of data manipulation</li>
                <li>Leverage custom methods for specific business logic that doesn't fit into the standard lifecycle methods</li>
            </ul>

            <p>By leveraging Observers, you can create more reactive, consistent, and maintainable applications. They provide a clean separation of concerns, allowing you to centralize data-related logic and reduce the complexity of your main application code.</p>
        </article>
    );
}

export default ObserverSummary;