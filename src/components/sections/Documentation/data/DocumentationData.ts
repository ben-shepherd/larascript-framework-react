import AuthConfiguration from "../components/docs/Authentication/AuthConfiguration"
import AuthContainer from "../components/docs/Authentication/AuthContainer"
import AuthEndpoints from "../components/docs/Authentication/AuthEndpoints"
import AuthGenerateJwt from "../components/docs/Authentication/AuthGenerateJwt"
import AuthModels from "../components/docs/Authentication/AuthModels"
import AuthService from "../components/docs/Authentication/AuthService"
import AuthSummary from "../components/docs/Authentication/AuthSummary"
import CodingStandards from "../components/docs/CodingStandards"
import ConsoleAvailableCommands from "../components/docs/Console/ConsoleAvailableCommands"
import ConsoleCustomCommands from "../components/docs/Console/ConsoleCustomCommands"
import ConsoleMakerCommands from "../components/docs/Console/ConsoleMakerCommands"
import ConsoleSummary from "../components/docs/Console/ConsoleSummary"
import EventConfiguration from "../components/docs/Events/EventConfiguration"
import EventDrivers from "../components/docs/Events/EventDrivers"
import EventSubscribersAndListeners from "../components/docs/Events/EventSubscribersAndListeners"
import EventSummary from "../components/docs/Events/EventSummary"
import EventWorker from "../components/docs/Events/EventWorker"
import ExpressWebServer from "../components/docs/Express/ExpressWebServer"
import ProtectedRoutes from "../components/docs/Express/ProtectedRoutes"
import RoutingFiles from "../components/docs/Express/RoutingFiles"
import { default as InstallCloning } from "../components/docs/Installation/InstallCloning"
import InstallDocker from "../components/docs/Installation/InstallDocker"
import InstallPackages from "../components/docs/Installation/InstallPackages"
import ModelCRUD from "../components/docs/Models/ModelCRUD"
import ModelMethods from "../components/docs/Models/ModelMethods"
import ModelProperties from "../components/docs/Models/ModelProperties"
import ModelRelationships from "../components/docs/Models/ModelRelationships"
import ModelSummary from "../components/docs/Models/ModelSummary"
import MongoConfiguration from "../components/docs/MongoDB/MongoConfiguration"
import MongoContainer from "../components/docs/MongoDB/MongoContainer"
import MongoModelConnections from "../components/docs/MongoDB/MongoModelConnections"
import MongoMultipleConnections from "../components/docs/MongoDB/MongoMultipleConnections"
import ObserverMethods from "../components/docs/Observers/ObserverMethods"
import ObserverModel from "../components/docs/Observers/ObserverModel"
import ObserverSummary from "../components/docs/Observers/ObserverSummary"
import PostmanCollection from "../components/docs/Postman/PostmanCollection"
import ContainerExplained from "../components/docs/ProvidersAndContainers/ContainerExplained"
import NewContainer from "../components/docs/ProvidersAndContainers/NewContainer"
import ProviderSummary from "../components/docs/ProvidersAndContainers/ProviderSummary"
import Registering from "../components/docs/ProvidersAndContainers/Registering"
import RetrieveFromContainer from "../components/docs/ProvidersAndContainers/RetrieveFromContainer"
import TypeHintingConfig from "../components/docs/ProvidersAndContainers/TypeHintingConfig"
import RepositorySummary from "../components/docs/Repositories/RepositorySummary"
import Services from "../components/docs/Services/Services"
import Singletons from "../components/docs/Services/Singletons"
import { DocumentationItem } from "../types/DocumentationTypes.t"

const data: DocumentationItem[] = [
    {
        href: "#installation",
        title: "Installation",
        titleSmall: "Install",
        children: [
            {
                href: "#installation-1",
                title: "Cloning",
                content: InstallCloning,
            },
            {
                href: "#installation-2",
                title: "Installing Packages",
                titleSmall: "Packages",
                content: InstallPackages
            },
            {
                href: "#installation-3",
                title: "Running Docker",
                titleSmall: "Docker",
                content: InstallDocker
            }
        ]
    },
    {
        href: "#providers-containers",
        title: "Providers & Containers",
        children: [
            {
                content: ProviderSummary,
            },
            {
                href: "#providers-containers-1-2",
                title: "Container explained",
                titleSmall: "Container",
                content: ContainerExplained
            },
            {
                href: "#providers-containers-1-1",
                title: "Registering a provider",
                titleSmall: 'Registering',
                content: Registering,
            },
            {
                href: "#providers-containers-1-3",
                title: "Type hinting config structure",
                titleSmall: 'Type hinting',
                content: TypeHintingConfig
            },
            {
                href: "#providers-containers-1-4",
                title: "Setting up a new container",
                titleSmall: "Setup new",
                content: NewContainer
            },
            {
                href: "#providers-containers-1-5",
                title: "Retrieving from the container",
                titleSmall: "Retrieving",
                content: RetrieveFromContainer
            },
        ],
    },
    {
        href: "#services",
        title: "Services",
        children: [
            {
                content: Services
            },
            {
                href: "#services-2-1",
                title: "Singletons",
                content: Singletons
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
                content: ExpressWebServer
            },
            {
                href: "#express-web-server-3-2",
                title: "Routing Files",
                content: RoutingFiles
            },
            {
                href: "#express-web-server-3-3",
                title: "Protected routes",
                content: ProtectedRoutes
            },
        ],
    },
    {
        href: "#authentication",
        title: "Authentication",
        children: [
            {
                content: AuthSummary,
            },
            {
                href: "#authentication-4-1",
                title: "Endpoints",
                content: AuthEndpoints,
            },
            {
                href: "#authentication-4-2",
                title: "Generate JWT Secret",
                titleSmall: "JWT Secret",
                content: AuthGenerateJwt,
            },
            {
                href: "#authentication-4-3",
                title: "Configuration",
                content: AuthConfiguration,
            },
            {
                href: "#authentication-4-4",
                title: "Auth Container",
                titleSmall: "Container",
                content: AuthContainer
            },
            {
                href: "#authentication-4-5",
                title: "Auth Service",
                titleSmall: "Service",
                content: AuthService
            },
            {
                href: "#authentication-4-6",
                title: "Auth Models",
                titleSmall: "Models",
                content: AuthModels
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
                titleSmall: "Configuration",
                content: MongoConfiguration
            },
            {
                href: "#mongodb-5-2",
                title: "MongoDB Container",
                titleSmall: "Container",
                content: MongoContainer
            },
            {
                href: "#mongodb-5-3",
                title: "Handling Multiple Connections",
                titleSmall: "Multiple Connections",
                content: MongoMultipleConnections
            },
            {
                href: "#mongodb-5-4",
                title: "Change connection on a Model",
                titleSmall: "Change Connection",
                content: MongoModelConnections
            },
        ],
    },
    {
        href: "#models",
        title: "Models",
        children: [
            {
                content: ModelSummary
            },
            {
                href: "#models-6-1",
                title: "Properties",
                content: ModelProperties
            },
            {
                href: "#models-6-2",
                title: "Methods",
                content: ModelMethods,
            },
            {
                href: "#models-6-3",
                title: "CRUD Operations",
                titleSmall: "CRUD",
                content: ModelCRUD
            },
            {
                href: "#models-6-4",
                title: "Relationships",
                content: ModelRelationships
            },
        ],
    },
    {
        href: "#repositories",
        title: "Repositories",
        children: [
            {
                content: RepositorySummary
            }
        ]
    },
    {
        href: "#events",
        title: "Events",
        children: [
            {
                content: EventSummary
            },
            {
                href: "#events-8-1",
                title: "Configuration",
                content: EventConfiguration
            },
            {
                href: "#events-8-2",
                title: "Subscribers and listeners",
                titleSmall: "Subscribers/listeners",
                content: EventSubscribersAndListeners
            },
            {
                href: "#events-8-3",
                title: "Event Drivers",
                content: EventDrivers
            },
            {
                href: "#events-8-4",
                title: "Worker",
                content: EventWorker
            },
        ],
    },
    {
        href: "#observers",
        title: "Observers",
        children: [
            {
                content: ObserverSummary
            },
            {
                href: "#observers-9-1",
                title: "Methods",
                content: ObserverMethods
            },
            {
                href: "#observers-9-2",
                title: "Models",
                content: ObserverModel
            }
        ],
    },
    {
        href: "#console-commands",
        title: "Console commands",
        children: [
            {
                content: ConsoleSummary
            },
            {
                href: "#console-commands-10-1",
                title: "Worker Command",
                titleSmall: "Worker",
                content: ConsoleAvailableCommands
            },
            {
                href: "#console-commands-10-2",
                title: "Maker commands",
                titleSmall: "Maker",
                content: ConsoleMakerCommands
            },
            {
                href: "#console-commands-10-3",
                title: "Custom commands",
                titleSmall: "Custom",
                content: ConsoleCustomCommands
            },
        ]
    },
    {
        href: '#postman',
        title: "Postman Collection",
        titleSmall: "Postman",
        children: [
            {
                content: PostmanCollection
            }
        ]
    },
    {
        href: '#standards',
        title: "Coding Standards",
        children: [
            {
                title: 'Guideline',
                href: '#standards-guideline',
                content: CodingStandards
            }
        ]
    }
]

export default data