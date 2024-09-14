
const ServiceProvider = 
`class ConsoleProvider extends BaseProvider {

    async register(): Promise<void> {
        
        // Add readline for interacting with the terminal
        App.setContainer('readline', readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        }));
        
        // Add the console service to the container
        App.setContainer('console', new ConsoleService())
        
        // Register commands from @src/config/commands
        App.container('console').register().registerAll(commandsConfig)

    }
    
    async boot(): Promise<void> {}
}`

export default ServiceProvider