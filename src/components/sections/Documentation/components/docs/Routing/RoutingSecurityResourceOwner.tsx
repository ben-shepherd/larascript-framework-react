import CodeBlock from "../../../../../utils/CodeBlock";

const RoutingSecurityResourceOwner = () => {
    return (
        <article>
            <h3>Full Resource Ownership</h3>
            <p>Example with full resource ownership:</p>
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

            <h3>Exempting Certain Routes from Ownership</h3>
            <p>Example that turns off ownership for viewing all records and single records. This will allow the user to view all records, regardless of if they own it:</p>
            <CodeBlock>
{`security: [
    Security.never([RouteResourceTypes.ALL, RouteResourceTypes.SHOW]).resourceOwner(),
]`}
            </CodeBlock>
        </article>
    );
}

export default RoutingSecurityResourceOwner;