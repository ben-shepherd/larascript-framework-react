import CodeBlock from '../../../../../utils/CodeBlock';

const RoutingSecurity = () => {
  return (
    <section>
      <p>Larascript provides built-in security rules to enhance your application's routing security. Let's explore the available security rules.</p>

      <h2>Scopes</h2>
      <p>Scopes can be added to your routes by using 'scopes' for exact matching and 'scopesPartial' for partial matching:</p>
      <CodeBlock>
{`scopes: 'customScope',
scopesPartial: ModelScopes.getScopes(Model, ['read', 'all']),`}
      </CodeBlock>

      <h2>enableScopes</h2>
      <p>This rule tells the application to enforce the scopes for these routes:</p>
      <CodeBlock>
        {`security: [
    Security.enableScopes()
]`}
      </CodeBlock>

      <h2>hasRole</h2>
      <p>This rule lets you define which roles can access this route:</p>
      <CodeBlock>
        {`security: [
    Security.hasRole('admin'),
]`}
      </CodeBlock>

      <h2>authorizeThrowException</h2>
      <p>This rule lets you check authorization and return a 401 if unauthenticated:</p>
      <CodeBlock>
        {`security: [
    Security.authorizationThrowsException()
]`}
      </CodeBlock>

      <h3>Full Resource Ownership</h3>
      <p>Example with full resource ownership:</p>
      <p>This security rule establishes a connection between the authenticated user and the model resource. During creation, a link is formed between the model and the user.</p>
      <CodeBlock>
        {`security: [
    Security.resourceOwner(),
]`}
      </CodeBlock>

      <h3>Selective Ownership</h3>
      <p>Example that only applies ownership to the delete route:</p>
      <CodeBlock>
        {`security: [
    Security.when(RouteResourceTypes.DESTROY).resourceOwner(),
]`}
      </CodeBlock>

      <h3>Exempting Certain Routes Ownership</h3>
      <p>Example that turns off ownership for viewing all records and single records. This will allow the user to view all records, regardless of if they own it:</p>
      <CodeBlock>
        {`security: [
    Security.never([RouteResourceTypes.ALL, RouteResourceTypes.SHOW]).resourceOwner(),
]`}
      </CodeBlock>
    </section>
  );
};

export default RoutingSecurity;