import AuthConfiguration from "../components/sections/Documentation/components/docs/Authentication/AuthConfiguration"
import AuthEndpoints from "../components/sections/Documentation/components/docs/Authentication/AuthEndpoints"
import AuthGenerateJwt from "../components/sections/Documentation/components/docs/Authentication/AuthGenerateJwt"
import AuthPermissions from "../components/sections/Documentation/components/docs/Authentication/AuthPermissions"
import AuthSummary from "../components/sections/Documentation/components/docs/Authentication/AuthSummary"
import CodingStandards from "../components/sections/Documentation/components/docs/CodingStandards"
import ConsoleCustomCommands from "../components/sections/Documentation/components/docs/Console/ConsoleCustomCommands"
import ConsoleMake from "../components/sections/Documentation/components/docs/Console/ConsoleMake"
import DatabaseClient from "../components/sections/Documentation/components/docs/Database/DatabaseClient"
import DatabaseConfig from "../components/sections/Documentation/components/docs/Database/DatabaseConfig"
import DatabaseDocumentManager from "../components/sections/Documentation/components/docs/Database/DatabaseDocumentManager"
import DatabaseSchema from "../components/sections/Documentation/components/docs/Database/DatabaseSchema"
import DatabaseService from "../components/sections/Documentation/components/docs/Database/DatabaseService"
import EventDrivers from "../components/sections/Documentation/components/docs/Events/EventDrivers"
import EventSubscribersAndListeners from "../components/sections/Documentation/components/docs/Events/EventSubscribersAndListeners"
import EventSummary from "../components/sections/Documentation/components/docs/Events/EventSummary"
import EventWorker from "../components/sections/Documentation/components/docs/Events/EventWorker"
import ExpressSummary from "../components/sections/Documentation/components/docs/Express/ExpressSummary"
import Extendables from "../components/sections/Documentation/components/docs/Extendables/ExtendableSummary"
import InstallingProduction from "../components/sections/Documentation/components/docs/Installation/InstallProduction"
import InstallTinker from "../components/sections/Documentation/components/docs/Installation/InstallRunningApp"
import Installing from "../components/sections/Documentation/components/docs/Installation/InstallSummary"
import Requirements from "../components/sections/Documentation/components/docs/Installation/Requirements"
import MigrationSummary from "../components/sections/Documentation/components/docs/Migrations/MigrationSummary"
import ModelExamples from "../components/sections/Documentation/components/docs/Models/ModelMethods"
import BelongsTo from "../components/sections/Documentation/components/docs/Models/ModelRelationships/BelongsTo"
import HasMany from "../components/sections/Documentation/components/docs/Models/ModelRelationships/HasMany"
import ModelSummary from "../components/sections/Documentation/components/docs/Models/ModelSummary"
import ObserverModel from "../components/sections/Documentation/components/docs/Observers/ObserverModel"
import ObserverSummary from "../components/sections/Documentation/components/docs/Observers/ObserverSummary"
import PostmanCollection from "../components/sections/Documentation/components/docs/Postman/PostmanCollection"
import ProviderSummary from "../components/sections/Documentation/components/docs/Providers/ProviderSummary"
import RepositorySummary from "../components/sections/Documentation/components/docs/Repositories/RepositorySummary"
import ExpressAction from "../components/sections/Documentation/components/docs/Routing/RoutingAction"
import RoutingCreate from "../components/sections/Documentation/components/docs/Routing/RoutingCreate"
import RoutingMiddleware from "../components/sections/Documentation/components/docs/Routing/RoutingMiddleware"
import RoutingResourceRoutes from "../components/sections/Documentation/components/docs/Routing/RoutingResourceRoutes"
import { default as RoutingSecurityResourceOwner, default as RoutingSummary } from "../components/sections/Documentation/components/docs/Routing/RoutingSecurityResourceOwner"
import RoutingSecuritySummary from "../components/sections/Documentation/components/docs/Routing/RoutingSecuritySummary"
import Testing from "../components/sections/Documentation/components/docs/Testing/Testing"
import ValidatorCreating from "../components/sections/Documentation/components/docs/Validator/ValidatorCreating"
import ValidatorJoi from "../components/sections/Documentation/components/docs/Validator/ValidatorJoi"
import ValidatorMiddleware from "../components/sections/Documentation/components/docs/Validator/ValidatorMiddleware"
import ValidatorSummary from "../components/sections/Documentation/components/docs/Validator/ValidatorSummary"
import { IDocumentationItem } from "../interfaces/IDocumentationItem"

const documentationConfig: IDocumentationItem[] = [
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
                title: "Quick Setup (~5 minutes)",
                titleSmall: "Quick Setup",
                content: Installing,
            },
            {
                href: "#setup-production",
                title: "Running in production",
                titleSmall: "Production",
                content: InstallingProduction,
            },
            {
                href: "#setup-tinker",
                title: "Running Tinker",
                titleSmall: "Tinker",
                content: InstallTinker,
            },
            // {
            //     href: "#setup-command",
            //     title: "Setup Command",
            //     content: InstallSetupCommand,
            // },
            {
                href: "#setup-postman",
                title: "Postman Collection",
                titleSmall: "Postman",
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
            }
        ],
    },
    {
        href: "#routing",
        title: "Routing",
        children: [
            {
                content: RoutingSummary,
            },
            {
                href: "#routing-files",
                title: "Create Route Files",
                titleSmall: "Files",
                content: RoutingCreate,
            },
            {
                href: "#routing-middleware",
                title: "Middleware",
                content: RoutingMiddleware
            },
            {
                href: "#routing-actions",
                title: "Actions",
                content: ExpressAction
            },
            {
                href: "#routing-resources",
                title: "Automatically Generated Model Routes",
                titleSmall: "Model Routes",
                content: RoutingResourceRoutes
            },
            {
                href: "#routing-security",
                title: "Route Security",
                titleSmall: "Security",
                content: RoutingSecuritySummary
            },
            {
                href: "#routing-security-resource-owner",
                title: "Security - Resource Owner",
                titleSmall: "Resource Owner",
                content: RoutingSecurityResourceOwner
            }
        ]
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
                href: "#authentication-endpoints",
                title: "Endpoints",
                content: AuthEndpoints,
            },
            {
                href: "#authentication-generate-jwt-secret",
                title: "Generate JWT Secret",
                titleSmall: "JWT Secret",
                content: AuthGenerateJwt,
            },
            {
                href: "#authentication-configuration",
                title: "Configuration",
                content: AuthConfiguration,
            },
            {
                href: "#authentication-permissions",
                title: "Scopes and Permissions",
                titleSmall: "Permissions",
                content: AuthPermissions,
            }
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

export default documentationConfig