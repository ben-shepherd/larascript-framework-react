import CodeBlock from "../../../../../utils/CodeBlock";

const Installing = () => {
  return (
    <article>
      <p>Follow these steps to quickly set up your project:</p>

      <h3>1. Create a new repository</h3>
      <p>
        Use the following link to create a new repository with Larascript as the template:
      </p>
      <p>
        <a href="https://github.com/new?template_name=larascript-framework&template_owner=ben-shepherd">
          https://github.com/new?template_name=larascript-framework&template_owner=ben-shepherd
        </a>
      </p>

      <h3>2. Install dependencies</h3>
      <p>Once you've cloned your new repository, run the following command in your project directory:</p>
      <CodeBlock>yarn install</CodeBlock>
      <p>This will install all the necessary dependencies for your project.</p>

      <h3>3. Start Database Containers</h3>
      <p>To set up your database environment, run:</p>
      <CodeBlock>yarn db:up</CodeBlock>
      <p>This command will start the necessary database containers for your project.</p>

      <h3>4. Run the setup command (optional)</h3>
      <p>If you want to populate the .env file with configured settings, use:</p>
      <CodeBlock>yarn setup</CodeBlock>
      <p>This step is optional but can be helpful for quickly configuring your environment.</p>

      <h3>5. Run database migrations</h3>
      <p>To set up your database schema, run:</p>
      <CodeBlock>yarn dev migrate:up</CodeBlock>
      <p>This command will apply all pending database migrations.</p>

      <h3>6. Start developing</h3>
      <p>To start your development server, use:</p>
      <CodeBlock>yarn dev</CodeBlock>
      <p>This will launch your application in development mode.</p>

    </article>
  );
}

export default Installing;