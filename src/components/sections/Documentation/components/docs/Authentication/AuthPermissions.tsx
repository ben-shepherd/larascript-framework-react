import CodeBlock from "../../../../../utils/CodeBlock";

const PermissionsExplanation = () => {
    return (
        <div>
            <p>When building your application, you may want to add scope permissions to resources (models) for CRUD routes. This allows you to control access to different operations based on user roles and groups.</p>

            <h2>Adding Scopes</h2>
            <p>You can add scopes by utilizing the ModelScope class. This class provides a convenient way to define permissions for different operations on your models.</p>

            <h3>Available Scope Options</h3>
            <p>These are the available options for defining Model scopes:</p>

            <ul className="list-disc py-3">
                <li>all</li>
                <li>create</li>
                <li>read</li>
                <li>write</li>
                <li>delete</li>
            </ul>

            <h3>Example Usage</h3>
            <CodeBlock>
{`
groups: [
    {
        name: GROUPS.User,
        roles: [ROLES.USER],
        scopes: [
            // Add your own scopes
            'customScope',
            
            // Allow all scopes for ExampleModel
            ...ModelScopes.getScopes(ExampleModel), 

            // Allow specific scopes for AnotherExampleModel 
            ...ModelScopes.getScopes(AnotherExampleModel, ['create', 'read', 'write']),
        ]
    }
]`}
            </CodeBlock>

            <h3>Explanation</h3>
            <ul className="list-disc py-3">
                <li>In this example, we define a User group with the USER role.</li>
                <li>The group is granted a custom scope ('customScope').</li>
                <li>It's also given all scopes for ExampleModel.</li>
                <li>For AnotherExampleModel, specific scopes (create, read, write) are granted.</li>
            </ul>

            <p>By using ModelScopes.getScopes(), you can easily assign specific permissions to different user groups for various models in your application. You can choose to grant all scopes or specify particular ones as needed.</p>
        </div>
    );
};

export default PermissionsExplanation;