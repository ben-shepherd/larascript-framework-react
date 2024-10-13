import CodeBlock from "../../../../../utils/CodeBlock";

const Installing = () => {
  return (
    <article>
      <p>Follow these steps to quickly set up your project:</p>

      <h2>1. Create a new repository</h2>
      <p>
        Use the following link to create a new repository with Larascript as the template:
      </p>
      <p>
        <a href="https://github.com/new?template_name=larascript-framework&template_owner=ben-shepherd">
          https://github.com/new?template_name=larascript-framework&template_owner=ben-shepherd
        </a>
      </p>

      <h2>2. Install dependencies</h2>
      <p>Once you've cloned your new repository, run the following command in your project directory:</p>
      <CodeBlock>yarn install</CodeBlock>
      <p>This will install all the necessary dependencies for your project.</p>

      <h2>3. Add write permissions to logs directory</h2>
      <p>After installing dependencies, you need to add write permissions to the logs directory:</p>
      <CodeBlock>chmod -R 755 /path/to/larascript/storage/logs</CodeBlock>
      <p>This ensures that your application can write log files as needed.</p>

      <h2>4. Start Database Containers</h2>
      <p>To set up your database environment, run:</p>
      <CodeBlock>yarn db:up</CodeBlock>
      <p>This command will start the necessary database containers for your project.</p>

      <h2>5. Run the setup command (optional)</h2>
      <p>If you want to populate the .env file with configured settings, use:</p>
      <CodeBlock>yarn setup</CodeBlock>
      <p>This step is optional but can be helpful for quickly configuring your environment.</p>

      <h2>6. Run database migrations</h2>
      <p>To set up your database schema, run:</p>
      <CodeBlock>yarn dev migrate:up</CodeBlock>
      <p>This command will apply all pending database migrations.</p>

      <h2>7. Start developing</h2>
      <p>To start your development server, use:</p>
      <CodeBlock>yarn dev</CodeBlock>
      <p>This will launch your application in development mode.</p>

      <h3>Additional Notes</h3>
      <ul className="list-disc py-3">
        <li>Make sure to replace "/path/to/larascript" with the actual path to your Larascript installation.</li>
        <li>You may need to use sudo for the chmod command if you don't have the necessary permissions.</li>
        <li>Always ensure you understand the implications of changing file permissions before doing so.</li>
      </ul>
    </article>
  );
}

export default Installing;