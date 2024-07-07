import ContainerExplained from "../components/docs/ProvidersAndContainers/ContainerExplained"
import NewContainer from "../components/docs/ProvidersAndContainers/NewContainer"
import ProviderSummary from "../components/docs/ProvidersAndContainers/ProviderSummary"
import Registering from "../components/docs/ProvidersAndContainers/Registering"
import RetrieveFromContainer from "../components/docs/ProvidersAndContainers/RetrieveFromContainer"
import TypeHintingConfig from "../components/docs/ProvidersAndContainers/TypeHintingConfig"
import { DocumentationItem } from "../types/DocumentationTypes.t"

const data: DocumentationItem[] = [
    {
        href: "#providers-containers",
        title: "Providers & Containers",
        children: [
            {
                content: ProviderSummary,
            },
            {
                href: "#providers-containers-1-1",
                title: "Registering a provider",
                content: Registering,
            },
            {
                href: "#providers-containers-1-2",
                title: "Type hinting config structure",
                content: TypeHintingConfig
            },
            {
                href: "#providers-containers-1-3",
                title: "Container Explained",
                content: ContainerExplained
            },
            {
                href: "#providers-containers-1-4",
                title: "Setting up a new container",
                content: NewContainer
            },
            {
                href: "#providers-containers-1-5",
                title: "Retrieving from the container",
                content: RetrieveFromContainer
            },
        ],
    },
    {
        href: "#services",
        title: "Services",
        children: [
            {
                href: "#services-2-1",
                title: "Singletons",
            },
        ],
    },
    {
        href: "#express-web-server",
        title: "Express Web Server",
        children: [
            {
                href: "#express-web-server-3-1",
                title: "Defining routes",
            },
            {
                href: "#express-web-server-3-2",
                title: "Adding another routing file",
            },
            {
                href: "#express-web-server-3-3",
                title: "Protected routes",
            },
        ],
    },
    {
        href: "#authentication",
        title: "Authentication",
        children: [
            {
                href: "#authentication-4-1",
                title: "Configuration",
            },
            {
                href: "#authentication-4-2",
                title: "Container",
            },
            {
                href: "#authentication-4-3",
                title: "Auth Service",
            },
            {
                href: "#authentication-4-4",
                title: "ApiToken Model",
            },
            {
                href: "#authentication-4-5",
                title: "User Model",
            },
        ],
    },
    {
        href: "#mongodb",
        title: "MongoDB",
        children: [
            {
                href: "#mongodb-5-1",
                title: "Database configuration",
            },
            {
                href: "#mongodb-5-2",
                title: "MongoDB Container",
            },
            {
                href: "#mongodb-5-3",
                title: "Handling Multiple Connections",
            },
            {
                href: "#mongodb-5-4",
                title: "Change connection on a Model",
            },
        ],
    },
    {
        href: "#models",
        title: "Models",
        children: [
            {
                href: "#models-6-1",
                title: "Properties",
            },
            {
                href: "#models-6-2",
                title: "Models",
            },
            {
                href: "#models-6-3",
                title: "CRUD Operations",
            },
            {
                href: "#models-6-4",
                title: "Relationships",
            },
        ],
    },
    {
        href: "#repositories",
        title: "Repositories",
    },
    {
        href: "#events",
        title: "Events",
        children: [
            {
                href: "#events-8-1",
                title: "Configuration",
            },
            {
                href: "#events-8-2",
                title: "Subscribers and listeners",
            },
            {
                href: "#events-8-3",
                title: "Event Drivers",
            },
            {
                href: "#events-8-4",
                title: "Worker",
            },
        ],
    },
    {
        href: "#observers",
        title: "Observers",
        children: [
            {
                href: "#observers-9-1",
                title: "Creating an observer",
            },
            {
                href: "#observers-9-2",
                title: "Model Observers",
            },
            {
                href: "#observers-9-3",
                title: "Custom Observers",
            },
        ],
    },
    {
        href: "#console-commands",
        title: "Console commands",
    }
]

export default data