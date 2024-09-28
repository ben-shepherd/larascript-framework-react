import CodeBlock from '../../../../../utils/CodeBlock';

const RoutingSecuritySummary = () => {
  return (
    <section>
      <p>Larascript provides built-in security rules to enhance your application's routing security. Let's explore the available security rules.</p>

      <h2>Scopes</h2>
      <p>Scopes can be added to your routes by using 'scopes' for exact matching and 'scopesPartial' for partial matching:</p>
      <CodeBlock>
{`Route({
        method: 'get',
        path: '/',
        scopes: ['customScope'],
        scopesPartial: ModelScopes.getScopes(Model, ['read', 'all']),
        // ...`}
      </CodeBlock>

      <h2>enableScopes</h2>
      <p>This rule tells the application to enforce the scopes automatically generated for these routes:</p>
      <CodeBlock>
{`Route({
    // ...
    security: [
        Security.enableScopes()
    ],
    // ...`}
      </CodeBlock>

      <h2>hasRole</h2>
      <p>This rule lets you define which roles can access this route:</p>
      <CodeBlock>
{`Route({
    // ...
    security: [
        Security.hasRole('admin')
    ],`}
      </CodeBlock>

      <h2>Rate Limiting</h2>
      <p>This rule lets define how many times a user can access a route:</p>
      <CodeBlock>
{`Route({
    // ...
    security: [
        Security.rateLimited(100, 60)
    ],
    // ...`}
      </CodeBlock>

      <h3>Resource Ownership</h3>
      <p>This rule establishes a connection between the authenticated user and the model resource. During creation, a link is formed between the model and the user.</p>
      <CodeBlock>
{`Route({
    // ...
    security: [
        Security.resourceOwner()
    ],`}
      </CodeBlock>

  

    </section>
  );
};

export default RoutingSecuritySummary;