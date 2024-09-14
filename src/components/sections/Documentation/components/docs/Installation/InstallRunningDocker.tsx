
const InstallRunningDocker = () => {
  return (
    <article>
      <h2>Running Your Application with Docker</h2>
      
      <h3>Understanding Docker</h3>
      <p>Docker is a platform that uses containerization technology to package applications and their dependencies together. This ensures consistency across different development and production environments. Here's a brief overview:</p>
      <ul className="list-disc py-3">
        <li>Containers are lightweight, standalone executable packages that include everything needed to run an application.</li>
        <li>Docker Compose is a tool for defining and running multi-container Docker applications.</li>
        <li>Docker files (.yml) specify how to set up and configure containers for your application.</li>
      </ul>

      <h3>Starting Your Application</h3>
      <p>To start your API and database containers, run the following command in your project directory:</p>
      <code>yarn up</code>
      <p>This command executes:</p>
      <code>docker-compose -f docker-compose.base.yml -f docker-compose.postgres.yml up -d</code>
      <p>This starts your containers based on the configurations in the specified Docker Compose files.</p>

      <h3>Stopping Your Application</h3>
      <p>To stop and remove the running containers, use:</p>
      <code>yarn down</code>
      <p>This command executes:</p>
      <code>docker-compose -f docker-compose.base.yml -f docker-compose.postgres.yml down</code>
      <p>This stops and removes the containers defined in your Docker Compose files.</p>

      <h3>What's Happening</h3>
      <p>When you run these commands:</p>
      <ul className="list-disc py-3">
        <li>Docker Compose reads the specified .yml files to understand your application's structure.</li>
        <li>It creates and starts containers for your API and PostgreSQL or MongoDB database (as specified in the Docker Compose files).</li>
        <li>Your application's components are now running in isolated environments, but can communicate with each other as defined in your Docker configuration.</li>
      </ul>

      <p>This setup allows you to run your entire application stack with a single command, ensuring consistency across different development environments.</p>
    </article>
  );
}

export default InstallRunningDocker;