import AuthConfiguration from "../components/docs/Authentication/AuthConfiguration"
import AuthEndpoints from "../components/docs/Authentication/AuthEndpoints"
import AuthGenerateJwt from "../components/docs/Authentication/AuthGenerateJwt"
import AuthSummary from "../components/docs/Authentication/AuthSummary"
import CodingStandards from "../components/docs/CodingStandards"
import ConsoleCustomCommands from "../components/docs/Console/ConsoleCustomCommands"
import ConsoleMake from "../components/docs/Console/ConsoleMake"
import DatabaseClient from "../components/docs/Database/DatabaseClient"
import DatabaseConfig from "../components/docs/Database/DatabaseConfig"
import DatabaseDocumentManager from "../components/docs/Database/DatabaseDocumentManager"
import DatabaseSchema from "../components/docs/Database/DatabaseSchema"
import DatabaseService from "../components/docs/Database/DatabaseService"
import EventDrivers from "../components/docs/Events/EventDrivers"
import EventSubscribersAndListeners from "../components/docs/Events/EventSubscribersAndListeners"
import EventSummary from "../components/docs/Events/EventSummary"
import EventWorker from "../components/docs/Events/EventWorker"
import ExpressAction from "../components/docs/Express/ExpressAction"
import ExpressMiddleware from "../components/docs/Express/ExpressMiddleware"
import ExpressResourceRoutes from "../components/docs/Express/ExpressResourceRoutes"
import RoutingFiles from "../components/docs/Express/ExpressRouting"
import ExpressSummary from "../components/docs/Express/ExpressSummary"
import Extendables from "../components/docs/Extendables/ExtendableSummary"
import InstallRunningApp from "../components/docs/Installation/InstallRunningApp"
import InstallRunningDocker from "../components/docs/Installation/InstallRunningDocker"
import InstallSetupCommand from "../components/docs/Installation/InstallSetupCommand"
import { default as Installing } from "../components/docs/Installation/InstallSummary"
import Requirements from "../components/docs/Installation/Requirements"
import MigrationSummary from "../components/docs/Migrations/MigrationSummary"
import ModelExamples from "../components/docs/Models/ModelMethods"
import BelongsTo from "../components/docs/Models/ModelRelationships/BelongsTo"
import HasMany from "../components/docs/Models/ModelRelationships/HasMany"
import ModelSummary from "../components/docs/Models/ModelSummary"
import ObserverModel from "../components/docs/Observers/ObserverModel"
import ObserverSummary from "../components/docs/Observers/ObserverSummary"
import PostmanCollection from "../components/docs/Postman/PostmanCollection"
import ProviderSummary from "../components/docs/Providers/ProviderSummary"
import RepositorySummary from "../components/docs/Repositories/RepositorySummary"
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
                href: "#setup-docker",
                title: "Running Docker",
                titleSmall: "Docker",
                content: InstallRunningDocker,
            },
            {
                href: "#setup-app",
                title: "Running App",
                content: InstallRunningApp,
            },
            {
                href: "#setup-command",
                title: "Setup Command",
                content: InstallSetupCommand,
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
            // {
            //     href: "#authentication-4-4",
            //     title: "Auth Container",
            //     titleSmall: "Container",
            //     content: AuthContainer
            // },
            // {
            //     href: "#authentication-4-5",
            //     title: "Auth Service",
            //     titleSmall: "Service",
            //     content: AuthService
            // },
            // {
            //     href: "#authentication-4-6",
            //     title: "Auth Models",
            //     titleSmall: "Models",
            //     content: AuthModels
            // },
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
        href: "#database",
        title: "Database",
        children: [
            {
                title: "Configuration",
                titleSmall: "Config",
                href: "#database-config",
                content: DatabaseConfig
            },
            {
                title: 'Database Container',
                titleSmall: 'Container',
                href: '#database-container',
                content: DatabaseService
            },
            {
                title: 'Database Client',
                titleSmall: 'Client',
                href: '#database-client',
                content: DatabaseClient
            },
            {
                title: 'Document Manager',
                titleSmall: 'Documents',
                href: '#database-document-manager',
                content: DatabaseDocumentManager
            },
            {
                title: 'Document Schema',
                titleSmall: 'Schema',
                href: '#database-schema',
                content: DatabaseSchema
            }
        ],
    },
    {
        href: "#migrations",
        title: "Migrations",
        children: [
            {
                href: "#migrations-summary",
                content: MigrationSummary
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
                href: "#models-examples",
                title: "Examples",
                content: ModelExamples,
            },
            {
                href: "#models-relationships-belongs-to",
                title: "BelongsTo Relationship",
                titleSmall: "BelongsTo",
                content: BelongsTo
            },
            {
                href: "#models-relationships-has-many",
                title: "HasMany Relationship",
                titleSmall: "HasMany",
                content: HasMany
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
        href: "#extendables",
        title: "Extendables",
        children: [
            {
                content: Extendables
            }
        ],
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