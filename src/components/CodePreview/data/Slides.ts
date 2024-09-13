import DatabaseConfigExample from "./examples/DatabaseConfigExample";
import DatabaseDocumentManagerExample from "./examples/DatabaseDocumentManagerExample";
import MiddlewareExample from "./examples/MiddlewareExample";
import MiddlewareUsageExample from "./examples/MiddlewareUsageExample";
import ModelsExample from "./examples/ModelsExample";
import ModelsUsageExample from "./examples/ModelsUsageExample";
import RepositoryExample from "./examples/RepositoryExample";
import RepositoryUsageExample from "./examples/RepositoryUsageExample";
import RoutesActionExample from "./examples/RoutesActionExample";
import RoutesExample from "./examples/RoutesExample";
import ServiceProvider from "./examples/ServiceProviderExample";
import ValidationExample from "./examples/ValidationExample";
import ValidationOnFlyExample from "./examples/ValidationOnFlyExample";

export type SlidePage = {
    examples?: SlideItem[],
} & SlideItem;

export type SlideItem = {
    title?: string;
    description?: string;
    content?: string;
}

const Slides: SlidePage[] = [
    {
        title: "Service Providers",
        description: "Example of how to register commands and setup the commands system.",
        content: ServiceProvider
    },
    {
        examples: [
            {
                title: "Models",
                description: "Example of a model.",
                content: ModelsExample
            },
            {
                title: "Example",
                description: "Example showing an ApiToken being revoked.",
                content: ModelsUsageExample
            }
        ]
    },
    {
        examples: [
            {
                title: "Repositories",
                description: "Example of a repository and custom queries.",
                content: RepositoryExample
            },
            {
                title: "Query Example",
                description: "Find a user by querying their email address.",
                content: RepositoryUsageExample
            },
        ]
    },
    {
        examples: [
            {
                title: "Middleware",
                description: "An example of a middleware authenticating a token.",
                content: MiddlewareExample
            },
            {
                title: "Route with Middleware",
                description: "Example showing a route with a middleware.",
                content: MiddlewareUsageExample
            }
        ]
    },
    {
        examples: [
            {
                title: "On the fly validation",
                description: "Example of validating on the fly.",
                content: ValidationOnFlyExample
            },
            {
                title: "Middleware Validation",
                description: "Example of a Middleware Validator used to update a user.",
                content: ValidationExample
            },
        ]
    },
    // {
    //     title: "Observer",
    //     description: "Example of an Observer, which listens for changes on the User model.",
    //     content: ObserverExample
    // },
    {
        examples: [
            {
                title: "Routing",
                description: "Example of a single route, and a RouteResource for the Blog Model.",
                content: RoutesExample
            },
            {
                title: "Action",
                description: "Action that fetches the authenticated user.",
                content: RoutesActionExample
            }
        ]
    },
    {
        examples: [
            {
                title: "Database Connections",
                description: "Example configuration for multiple database connections.",
                content: DatabaseConfigExample
            },
            {
                title: "Document Manager",
                description: "Fetch records using different connections.",
                content: DatabaseDocumentManagerExample
            },
            
        ]
    },
]

export default Slides