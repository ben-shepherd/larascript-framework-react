
const AppSetup = () => {
  return (
    <article>
      <h2>Configuring Your Application</h2>
      <p>To streamline your application setup, we've created a convenient command that guides you through the configuration process. Run the following in your project directory:</p>
      
      <code>yarn setup</code>
      
      <p>This interactive setup will walk you through several important configuration steps:</p>
      
      <ul className="list-disc py-3">
        <li>Environment Setup: The command will copy <code>.env.example</code> to <code>.env</code>, creating a base configuration file.</li>
        
        <li className="py-3">Security Configuration: You'll be prompted to generate a new JWT secret.</li>
        
        <li>Database Selection: 
          <ul className="list-disc py-3">
            <li>Choose your preferred database provider(s): MongoDB, PostgreSQL, or both.</li>
            <li>While you can use both, we recommend selecting one for simplicity.</li>
          </ul>
        </li>
        
        <li>Default Database (Only applicable if both selected): 
          <ul className="list-disc py-3">
            <li>Select a default database provider for your application.</li>
            <li>The setup will automatically configure your environment with the appropriate credentials.</li>
            <li>Credentials are sourced from the respective Docker Compose files (<code>docker-compose.mongodb.yml</code> or <code>docker-compose.postgres.yml</code>).</li>
          </ul>
        </li>
        
        <li>Additional Features: You'll be asked to enable or disable the following:
          <ul className="list-disc py-3">
            <li>Express server</li>
            <li>Authentication routes</li>
            <li>User creation route</li>
          </ul>
        </li>
      </ul>
      
      <p>By the end of this process, your application will be tailored to your specifications and ready for development. Feel free to revisit this setup if you need to adjust your configuration in the future.</p>
    </article>
  );
}

export default AppSetup;