import AuthConfiguration from "../components/docs/Authentication/AuthConfiguration"
import AuthContainer from "../components/docs/Authentication/AuthContainer"
import AuthEndpoints from "../components/docs/Authentication/AuthEndpoints"
import AuthGenerateJwt from "../components/docs/Authentication/AuthGenerateJwt"
import AuthModels from "../components/docs/Authentication/AuthModels"
import AuthService from "../components/docs/Authentication/AuthService"
import AuthSummary from "../components/docs/Authentication/AuthSummary"
import CodingStandards from "../components/docs/CodingStandards"
import ConsoleCustomCommands from "../components/docs/Console/ConsoleCustomCommands"
import ConsoleMake from "../components/docs/Console/ConsoleMake"
import EventDrivers from "../components/docs/Events/EventDrivers"
import EventSubscribersAndListeners from "../components/docs/Events/EventSubscribersAndListeners"
import EventSummary from "../components/docs/Events/EventSummary"
import EventWorker from "../components/docs/Events/EventWorker"
import ExpressAction from "../components/docs/Express/ExpressAction"
import ExpressMiddleware from "../components/docs/Express/ExpressMiddleware"
import ExpressResourceRoutes from "../components/docs/Express/ExpressResourceRoutes"
import RoutingFiles from "../components/docs/Express/ExpressRouting"
import ExpressSummary from "../components/docs/Express/ExpressSummary"
import InstallRunningDocker from "../components/docs/Installation/InstallRunningDocker"
import InstallSetupCommand from "../components/docs/Installation/InstallSetupCommand"
import { default as Installing } from "../components/docs/Installation/InstallSummary"
import Requirements from "../components/docs/Installation/Requirements"
import ModelCRUD from "../components/docs/Models/ModelCRUD"
import ModelMethods from "../components/docs/Models/ModelMethods"
import ModelProperties from "../components/docs/Models/ModelProperties"
import ModelRelationships from "../components/docs/Models/ModelRelationships"
import ModelSummary from "../components/docs/Models/ModelSummary"
import MongoConfiguration from "../components/docs/MongoDB/MongoConfiguration"
import MongoContainer from "../components/docs/MongoDB/MongoContainer"
import MongoModelConnections from "../components/docs/MongoDB/MongoModelConnections"
import MongoMultipleConnections from "../components/docs/MongoDB/MongoMultipleConnections"
import ObserverModel from "../components/docs/Observers/ObserverModel"
import ObserverSummary from "../components/docs/Observers/ObserverSummary"
import PostmanCollection from "../components/docs/Postman/PostmanCollection"
import ProviderContainers from "../components/docs/Providers/ProviderContainers"
import ProviderSummary from "../components/docs/Providers/ProviderSummary"
import RepositorySummary from "../components/docs/Repositories/RepositorySummary"
import Services from "../components/docs/Services/Services"
import Singletons from "../components/docs/Services/Singletons"
import Testing from "../components/docs/Testing/Testing"
import ValidatorCreating from '../components/docs/Validator/ValidatorCreating'
import ValidatorJoi from "../components/docs/Validator/ValidatorJoi"
import ValidatorMiddleware from "../components/docs/Validator/ValidatorMiddleware"
import ValidatorSummary from "../components/docs/Validator/ValidatorSummary"
import { DocumentationItem } from "../types/DocumentationTypes.t"

const data: DocumentationItem[] = [
    {
        href: "#setup",
        title: "Setup",
        titleSmall: "Setup",
        children: [
            {
                href: "#setup-requirements",
                title: "Requirements",
                content: Requirements,
            },
            {
                href: "#setup-install",
                title: "Install",
                content: Installing,
            },
            {
                href: "#setup-command",
                title: "Setup Command",
                content: InstallSetupCommand,
            },
            {
                href: "#setup-docker",
                title: "Running Docker",
                titleSmall: "Docker",
                content: InstallRunningDocker,
            },
            {
                href: "#setup-postman",
                title: "Postman",
                content: PostmanCollection
            },
        ]
    },
    {
        href: "#http-express",
        title: "Express Web Server",
        titleSmall: "Express",
        children: [
            {
                content: ExpressSummary,
            },
            {
                href: "#http-express-routing",
                title: "Routing",
                content: RoutingFiles
            },
            {
                href: "#http-express-middleware",
                title: "Middleware",
                content: ExpressMiddleware
            },
            {
                href: "#http-express-actions",
                title: "Actions",
                content: ExpressAction
            },
            {
                href: "#http-express-resources",
                title: "Routing Resources",
                titleSmall: "Resources",
                content: ExpressResourceRoutes
            }
        ],
    },
    {
        href: "#providers",
        title: "Providers",
        children: [
            {
                content: ProviderSummary
            },
            {
                href: "#providers-containers",
                title: "App Container",
                content: ProviderContainers
            }
        ]
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
        href: '#validation',
        title: "Validation",
        children: [
            {
                content: ValidatorSummary
            },
            {
                href: "#validation-joi",
                title: "Joi Documentation",
                titleSmall: "Joi",
                content: ValidatorJoi
            },
            {
                href: "#validation-creating",
                title: "Creating Validator",
                titleSmall: "Creating",
                content: ValidatorCreating
            },
            {
                href: "#validation-middleware",
                title: "Middleware",
                content: ValidatorMiddleware
            }
        ]
    },
    {
        href: "#mongodb",
        title: "MongoDB",
        children: [
            {
                href: "#mongodb-5-1",
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
        href: "#events",
        title: "Events",
        children: [
            {
                content: EventSummary
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
                href: "#observers-9-2",
                title: "Observer Models",
                titleSmall: "Models",
                content: ObserverModel
            }
        ],
    },
    {
        href: "#cli",
        title: "Commands (CLI)",
        titleSmall: "Commands",
        children: [
            {
                href: "#cli-make",
                title: "Make Commands",
                titleSmall: "Make",
                content: ConsoleMake
            },
            {
                href: "#cli-custom",
                title: "Custom commands",
                titleSmall: "Custom",
                content: ConsoleCustomCommands
            },
        ]
    },
    {
        href: "#testing",
        title: "Jest & Testing",
        children: [
            {
                content: Testing,
            }
        ]
    },
    {
        href: '#standards',
        title: "Coding Standards",
        children: [
            {
                content: CodingStandards
            }
        ]
    }
]

export default data