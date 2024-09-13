
const DatabaseConfigExample = 
`const config: IDatabaseConfig = {

    // Name of the default database connection to be used
    defaultConnectionName: DEFAULT_CONNECTION,

    // Comma-separated list of connection names to keep alive
    keepAliveConnections: (process.env.DATABASE_CONNECTIONS_KEEP_ALIVE as string) ?? '',

    // Database connections configuration.
    connections: {

        [DEFAULT_CONNECTION]: {
            driver: DEFAULT_PROVIDER,
            uri: process.env.DATABASE_DEFAULT_URI as string,
            options: {} // Additional connection options can be specified here
        },
    },
};

export default config;`

export default DatabaseConfigExample